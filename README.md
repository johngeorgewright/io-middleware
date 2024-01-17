# io-middleware

Creates middleware that will accumulate state.

## Example

```typescript
import express from 'express'
import { ioMiddleware, HALT } from 'io-middleware'

express().get(
  '/user/:id',
  ioMiddleware(
    null, // initial value
    async (req, res) => fetchUser(req.params.id),
    async (req, res, user) => ({ name: user.name, email: user.email }),
    (req, res, state) => res.json(state),
  ),
)
```
