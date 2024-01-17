import { Request, Response } from 'express'
import { type FINISH, type HALT } from './index.js'

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
  ): O | typeof HALT | typeof FINISH | Promise<O | typeof HALT | typeof FINISH>
}

export interface ParamsDictionary {
  [key: string]: string
}

export interface ParsedQs {
  [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[]
}
