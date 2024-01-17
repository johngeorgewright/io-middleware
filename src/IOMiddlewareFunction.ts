// This is generated by bin/generateIOMiddlewareFunction.ts
// ... edits this file might be overidden
import { RequestHandler } from 'express'
import { IOMiddleware, ParamsDictionary } from './types.js'

export interface IOMiddlewareFunction {
  <
    O0,
    O1,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware8: IOMiddleware<O8, O9, P, ResBody, ReqBody, ReqQuery, LocalsObj>,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware8: IOMiddleware<O8, O9, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware9: IOMiddleware<
      O9,
      O10,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware8: IOMiddleware<O8, O9, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware9: IOMiddleware<
      O9,
      O10,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware10: IOMiddleware<
      O10,
      O11,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware8: IOMiddleware<O8, O9, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware9: IOMiddleware<
      O9,
      O10,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware10: IOMiddleware<
      O10,
      O11,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware11: IOMiddleware<
      O11,
      O12,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    O13,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware8: IOMiddleware<O8, O9, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware9: IOMiddleware<
      O9,
      O10,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware10: IOMiddleware<
      O10,
      O11,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware11: IOMiddleware<
      O11,
      O12,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware12: IOMiddleware<
      O12,
      O13,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    O13,
    O14,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware8: IOMiddleware<O8, O9, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware9: IOMiddleware<
      O9,
      O10,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware10: IOMiddleware<
      O10,
      O11,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware11: IOMiddleware<
      O11,
      O12,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware12: IOMiddleware<
      O12,
      O13,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware13: IOMiddleware<
      O13,
      O14,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    O13,
    O14,
    O15,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware8: IOMiddleware<O8, O9, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware9: IOMiddleware<
      O9,
      O10,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware10: IOMiddleware<
      O10,
      O11,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware11: IOMiddleware<
      O11,
      O12,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware12: IOMiddleware<
      O12,
      O13,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware13: IOMiddleware<
      O13,
      O14,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware14: IOMiddleware<
      O14,
      O15,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    O13,
    O14,
    O15,
    O16,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware8: IOMiddleware<O8, O9, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware9: IOMiddleware<
      O9,
      O10,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware10: IOMiddleware<
      O10,
      O11,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware11: IOMiddleware<
      O11,
      O12,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware12: IOMiddleware<
      O12,
      O13,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware13: IOMiddleware<
      O13,
      O14,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware14: IOMiddleware<
      O14,
      O15,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware15: IOMiddleware<
      O15,
      O16,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    O13,
    O14,
    O15,
    O16,
    O17,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware8: IOMiddleware<O8, O9, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware9: IOMiddleware<
      O9,
      O10,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware10: IOMiddleware<
      O10,
      O11,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware11: IOMiddleware<
      O11,
      O12,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware12: IOMiddleware<
      O12,
      O13,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware13: IOMiddleware<
      O13,
      O14,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware14: IOMiddleware<
      O14,
      O15,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware15: IOMiddleware<
      O15,
      O16,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware16: IOMiddleware<
      O16,
      O17,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    O13,
    O14,
    O15,
    O16,
    O17,
    O18,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware8: IOMiddleware<O8, O9, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware9: IOMiddleware<
      O9,
      O10,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware10: IOMiddleware<
      O10,
      O11,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware11: IOMiddleware<
      O11,
      O12,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware12: IOMiddleware<
      O12,
      O13,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware13: IOMiddleware<
      O13,
      O14,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware14: IOMiddleware<
      O14,
      O15,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware15: IOMiddleware<
      O15,
      O16,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware16: IOMiddleware<
      O16,
      O17,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware17: IOMiddleware<
      O17,
      O18,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    O13,
    O14,
    O15,
    O16,
    O17,
    O18,
    O19,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware8: IOMiddleware<O8, O9, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware9: IOMiddleware<
      O9,
      O10,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware10: IOMiddleware<
      O10,
      O11,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware11: IOMiddleware<
      O11,
      O12,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware12: IOMiddleware<
      O12,
      O13,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware13: IOMiddleware<
      O13,
      O14,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware14: IOMiddleware<
      O14,
      O15,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware15: IOMiddleware<
      O15,
      O16,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware16: IOMiddleware<
      O16,
      O17,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware17: IOMiddleware<
      O17,
      O18,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware18: IOMiddleware<
      O18,
      O19,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>

  <
    O0,
    O1,
    O2,
    O3,
    O4,
    O5,
    O6,
    O7,
    O8,
    O9,
    O10,
    O11,
    O12,
    O13,
    O14,
    O15,
    O16,
    O17,
    O18,
    O19,
    O20,
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,

    middleware0: IOMiddleware<O0, O1, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware1: IOMiddleware<O1, O2, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware2: IOMiddleware<O2, O3, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware3: IOMiddleware<O3, O4, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware4: IOMiddleware<O4, O5, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware5: IOMiddleware<O5, O6, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware6: IOMiddleware<O6, O7, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware7: IOMiddleware<O7, O8, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware8: IOMiddleware<O8, O9, P, ResBody, ReqBody, ReqQuery, LocalsObj>,

    middleware9: IOMiddleware<
      O9,
      O10,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware10: IOMiddleware<
      O10,
      O11,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware11: IOMiddleware<
      O11,
      O12,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware12: IOMiddleware<
      O12,
      O13,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware13: IOMiddleware<
      O13,
      O14,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware14: IOMiddleware<
      O14,
      O15,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware15: IOMiddleware<
      O15,
      O16,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware16: IOMiddleware<
      O16,
      O17,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware17: IOMiddleware<
      O17,
      O18,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware18: IOMiddleware<
      O18,
      O19,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,

    middleware19: IOMiddleware<
      O19,
      O20,
      P,
      ResBody,
      ReqBody,
      ReqQuery,
      LocalsObj
    >,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>
}