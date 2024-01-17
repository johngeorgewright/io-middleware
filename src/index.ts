import { RequestHandler } from 'express'
import { IOMiddlewareFunction } from './IOMiddlewareFunction.js'
import { IOMiddleware } from './types.js'

export { IOMiddleware, IOMiddlewareFunction }

export const HALT = Symbol.for('io-middleware/halt')
export const FINISH = Symbol.for('io-middleware/finish')

export const ioMiddleware: IOMiddlewareFunction = (
  initValue: any,
  ...middleware: IOMiddleware<any, any>[]
): RequestHandler => {
  return async (req, res, next) => {
    try {
      let value = initValue
      for (const fn of middleware) {
        value = await fn(req, res, value)
        if (value === HALT || value === FINISH) break
      }
      if (value !== FINISH) next()
    } catch (error) {
      next(error)
    }
  }
}
