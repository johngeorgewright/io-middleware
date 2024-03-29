import { writeFile } from 'node:fs/promises'
import * as path from 'node:path'
import * as prettier from 'prettier'

const target = path.join('src', 'IOMiddlewareFunction.ts')
const max = 20
const range = (to: number) => new Array(to).fill(null).map((_, i) => i + 1)
const joinLines = (lines: string[]) => lines.join('\n')

const output = /* ts */ `
// This is generated by bin/generateIOMiddlewareFunction.ts
// ... edits this file might be overidden
import { RequestHandler } from 'express'
import { IOMiddleware, ParamsDictionary } from './types.js'

export interface IOMiddlewareFunction {
${joinLines(
  range(max).map(
    (_, i) => /* ts */ `
  <
    O0,
    ${joinLines(
      range(i + 1).map(
        (i) => `
    O${i},`,
      ),
    )}
    P extends ParamsDictionary,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj extends Record<string, any>,
  >(
    initValue: O0,
    ${joinLines(
      range(i + 1).map(
        (i) =>
          `
    middleware${i - 1}: IOMiddleware<O${
      i - 1
    }, O${i}, P, ResBody, ReqBody, ReqQuery, LocalsObj>,`,
      ),
    )}
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>
`,
  ),
)}
}
`

await writeFile(
  target,
  await prettier.format(output, {
    parser: 'typescript',
    ...(await prettier.resolveConfig(target)),
  }),
)
