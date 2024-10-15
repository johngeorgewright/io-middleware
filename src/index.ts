import { RequestHandler } from 'express'
import { IOMiddlewareFunction } from './IOMiddlewareFunction.js'
import { IOMiddleware, IOMiddlewareOutput } from './types.js'

export { IOMiddleware, IOMiddlewareFunction, IOMiddlewareOutput }

/**
 * Break out of the ioMiddleware loop and continue.
 */
export const BREAK = Symbol.for('io-middleware/break')

/**
 * Continue ioMiddleware loop
 */
export const CONTINUE = Symbol.for('io-middleware/continue')

/**
 * Stop any further middleware.
 */
export const FINISH = Symbol.for('io-middleware/finish')

export const ioMiddleware: IOMiddlewareFunction =
  (initValue: any, ...middleware: IOMiddleware<any, any>[]): RequestHandler =>
  async (req, res, next) => {
    try {
      let output: IOMiddlewareOutput<any> = { type: CONTINUE, state: initValue }
      for (const fn of middleware) {
        if (output.type === CONTINUE) output = await fn(req, res, output.state)
        if (output.type === BREAK || output.type === FINISH) break
      }
      if (output.type !== FINISH) next()
    } catch (error) {
      next(error)
    }
  }
