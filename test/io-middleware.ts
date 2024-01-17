import express from 'express'
import request from 'supertest'
import assert from 'node:assert'
import { test } from 'node:test'
import { setTimeout } from 'node:timers/promises'
import { HALT, ioMiddleware } from '../src/index.js'

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
