import { RequestHandler } from 'express'
import { IOMiddlewareFunction } from './IOMiddlewareFunction.js'
import {
  BREAK,
  Break,
  FINISH,
  Finish,
  IOMiddleware,
  IOMiddlewareOutput,
  NEXT,
  Next,
} from './types.js'

export { IOMiddleware, IOMiddlewareFunction, IOMiddlewareOutput }

/**
 * Stop ioMiddleware state reduction and instead continue to other middleware
 */
export function brk(): Break {
  return { type: BREAK }
}

/**
 * Stop ioMiddleware state reduction **and** all other middleware
 */
export function finish(): Finish {
  return { type: FINISH }
}

/**
 * Continue ioMiddleware state reduction
 */
export function next<T>(state: T): Next<T> {
  return { type: NEXT, state }
}

export const ioMiddleware: IOMiddlewareFunction =
  (initValue: any, ...middleware: IOMiddleware<any, any>[]): RequestHandler =>
  async (req, res, nextMiddleware) => {
    try {
      let output: IOMiddlewareOutput<any> = next(initValue)
      for (const fn of middleware) {
        if (output.type === NEXT) output = await fn(req, res, output.state)
        if (output.type === BREAK || output.type === FINISH) break
      }
      if (output.type !== FINISH) nextMiddleware()
    } catch (error) {
      next(error)
    }
  }
