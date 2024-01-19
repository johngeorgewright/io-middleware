# io-middleware

Creates middleware that will accumulate state.

## Example

```typescript
import express from 'express'
import { ioMiddleware, FINISHED } from 'io-middleware'

express().get(
  '/user/:id',
  ioMiddleware(
    null, // initial value
    async (req, res) => fetchUser(req.params.id),
    async (req, res, user) => ({ name: user.name, email: user.email }),
    (req, res, state) => {
      res.json(state)
      return FINISHED // prevents any further middleware being called
    },
  ),
)
```

## Typing state changes between middleware

One of the problems we face when writing reusable middleware is to make sure that particular state is available before they're used.

For example, lets say I have one piece of middleware that creates a "local":

```typescript
function articleInfo() {
  return (req, res, next) => {
    res.locals.articleId = getArticleFromReferrer(req)
    if (!res.locals.articleId) next(new ServerError(404))
    else next()
  }
}
```

Then in another piece of middleware that wants use that "local":

```typescript
function partitionKey() {
  return (req, res, next) => {
    res.locals.partitionKey = partitionLookUp(res.locals.articleId)
    if (!res.locals.partitionKey) next(new ServerError(404))
    else next()
  }
}
```

We can then join our middleware together:

```typescript
express().get('/partition', article(), partitionKey(), (req, res) => {
  // handle response
})
```

If we were to create another route and forget to assign an `articleId` to our locals, before using the `partitionKey()` we'd have problem.

Strongly typing our middleware can help us ensure that the required state has been populated.

```typescript
import { FINISH, ioMiddleware, IOMiddleware } from 'io-middleware'

function articleInfo<I>(): IOMiddleware<I, I & { articleId: string }> {
  return (req, res, state) => {
    const articleId = getArticleFromReferrer(req)
    if (!articleId) throw new ServerError(404)
    return { ...state, articleId }
  }
}

function partitionKey<I extends { articleId: string }>(): IOMiddleware<
  I,
  I & { partitionKey: string }
> {
  return (req, res, state) => {
    const partitionKey = partitionLookUp(state.articleId)
    if (!partitionKey) throw new ServerError(404)
    return { ...state, partitionKey }
  }
}

express().get(
  '/partition',
  ioMiddleware(
    {},
    articleInfo(), // If this were to be removed our project would not compile
    partitionKey(),
    (req, res, state) => {
      res.json(state)
      return FINISH
    },
  ),
)
```
