/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import { css as scCss } from 'styled-components'
import { transform, flattenStrings } from '@xstyled/core'

export function css(...rawArgs) {
  const scCssArgs = scCss(...rawArgs)
  const flattenedArgs = flattenStrings(scCssArgs)
  return flattenedArgs.map(transform)
}
