import { Request, Response } from 'express'
import type { CONTINUE, FINISH, BREAK } from './index.js'

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

interface Continue<T> {
  type: typeof CONTINUE
  state: T
}

interface Break {
  type: typeof BREAK
}

interface Finish {
  type: typeof FINISH
}

export type IOMiddlewareOutput<T> = Continue<T> | Break | Finish

export interface ParamsDictionary {
  [key: string]: string
}

export interface ParsedQs {
  [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[]
}

type Asyncable<T> = T | Promise<T>
