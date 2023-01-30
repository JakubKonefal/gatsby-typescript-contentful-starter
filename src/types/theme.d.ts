import { CSSProperties } from 'styled-components'

export type Breakpoints = {
  xxs: number
  xs: number
  s: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
  xxxl: number
}

export type Colors = {
  primary: CSSProperties['color']
  primary100: CSSProperties['color']
  primary200: CSSProperties['color']
  primary300: CSSProperties['color']
  primary400: CSSProperties['color']
  primary500: CSSProperties['color']
  primary600: CSSProperties['color']
  gray: CSSProperties['color']
  gray100: CSSProperties['color']
  gray200: CSSProperties['color']
  gray300: CSSProperties['color']
  gray400: CSSProperties['color']
  gray500: CSSProperties['color']
  black: CSSProperties['color']
  black100: CSSProperties['color']
  white: CSSProperties['color']
  danger: CSSProperties['color']
}

export type Fonts = {
  size: `${number}px`
}

export type Container = {
  widthNav: CSSProperties['width']

  widthXL: CSSProperties['width']
  width: CSSProperties['width']

  widthSlimXL: CSSProperties['width']
  widthSlim: CSSProperties['width']

  widthNarrowXL: CSSProperties['width']
  widthNarrow: CSSProperties['width']

  paddingMD: CSSProperties['padding']
  paddingSM: CSSProperties['padding']
  padding: CSSProperties['padding']
}

export type Media = {
  [key in keyof Breakpoints]: {
    min: string
    max: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: Fonts
    colors: Colors
    breakpoints: Breakpoints
    container: Container
    media: Media
  }
}
