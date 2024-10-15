import { Request, Response } from 'express'

export const BREAK = Symbol.for('io-middleware/break')

export const NEXT = Symbol.for('io-middleware/continue')

export const FINISH = Symbol.for('io-middleware/finish')

export interface IOMiddleware<
  I,
  O,
  P extends ParamsDictionary = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = ParsedQs,
  LocalsObj extends Record<string, any> = Record<string, any>,
> {
  (
    req: Request<P, ResBody, ReqBody, ReqQuery, LocalsObj>,
    res: Response<ResBody, LocalsObj>,
    input: I,
  ): Asyncable<IOMiddlewareOutput<O>>
}

export interface Next<T> {
  type: typeof NEXT
  state: T
}

export interface Break {
  type: typeof BREAK
}

export interface Finish {
  type: typeof FINISH
}

export type IOMiddlewareOutput<T> = Next<T> | Break | Finish

export interface ParamsDictionary {
  [key: string]: string
}

export interface ParsedQs {
  [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[]
}

type Asyncable<T> = T | Promise<T>
