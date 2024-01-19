import { RequestHandler } from 'express'
import { IOMiddlewareFunction } from './IOMiddlewareFunction.js'
import { IOMiddleware } from './types.js'

export { IOMiddleware, IOMiddlewareFunction }

/**
 * Break out of the ioMiddleware loop and continue.
 */
export const BREAK = Symbol.for('io-middleware/break')

/**
 * Stop any further middleware.
 */
export const FINISH = Symbol.for('io-middleware/finish')

export const ioMiddleware: IOMiddlewareFunction =
  (initValue: any, ...middleware: IOMiddleware<any, any>[]): RequestHandler =>
  async (req, res, next) => {
    try {
      let value = initValue
      for (const fn of middleware) {
        value = await fn(req, res, value)
        if (value === BREAK || value === FINISH) break
      }
      if (value !== FINISH) next()
    } catch (error) {
      next(error)
    }
  }
