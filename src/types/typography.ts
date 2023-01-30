import type { CSSProperties } from 'styled-components'

import type { Colors } from 'types/theme'

export type TextColor = { themecolor: keyof Colors }

export type TextProps = {
  align?: CSSProperties['textAlign']
  size?: number
  line?: CSSProperties['lineHeight']
  weight?: CSSProperties['fontWeight']
  margin?: CSSProperties['margin']
  transform?: CSSProperties['textTransform']
  decoration?: CSSProperties['textDecoration']
  sizeDiff?: number
} & Optional<TextColor, 'themecolor'>

export type WithLineProps = {
  margin?: CSSProperties['margin']
}

export default TextProps
