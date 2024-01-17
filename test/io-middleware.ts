import express from 'express'
import request from 'supertest'
import assert from 'node:assert'
import { test } from 'node:test'
import { setTimeout } from 'node:timers/promises'
import { HALT, IOMiddleware, ioMiddleware } from '../src/index.js'

test('passes state from one middleware to the next', (_, done) => {
  const app = express().use(
    ioMiddleware(
      {},
      (req, res, state): { foo: string } => {
        assert.ok(!!req.headers)
        assert.ok(!!res.send)
        assert.deepStrictEqual(state, {})
        return { foo: 'bar' }
      },
      (_req, _res, state) => {
        assert.deepStrictEqual(state, { foo: 'bar' })
        return 'success'
      },
      async (_req, _res, state) => {
        await setTimeout(5)
        assert.strictEqual(state, 'success')
      },
    ),
    (_, res) => res.sendStatus(200),
  )

  request(app).get('/').expect(200).end(done)
})

test('stopping middleware from continuing', (_, done) => {
  const app = express().use(
    ioMiddleware(
      {},
      (req, res, state): { foo: string } => {
        assert.ok(!!req.headers)
        assert.ok(!!res.send)
        assert.deepStrictEqual(state, {})
        return { foo: 'bar' }
      },
      () => HALT,
      () => {
        throw new Error('Middleware did not halt')
      },
    ),
    (_, res) => res.sendStatus(200),
  )

  request(app).get('/').expect(200).end(done)
})

test('types with separate functions', () => {
  function foo(): IOMiddleware<{}, { foo: string }> {
    return (_req, _res, state) => ({ ...state, foo: 'bar' })
  }

  function success(): IOMiddleware<
    { foo: string },
    { foo: string; mung: number }
  > {
    return (_req, _res, state) =>
      state.foo === 'rab' ? HALT : { ...state, mung: 1 }
  }

  express().use(ioMiddleware({}, foo(), success()))

  // @ts-expect-error Argument of type '{}' is not assignable to parameter of type '{ foo: string; }'.
  express().use(ioMiddleware({}, success()))
})
