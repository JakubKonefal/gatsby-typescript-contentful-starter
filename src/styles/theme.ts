import type { Breakpoints, Colors, Fonts, Container } from 'types/theme'

import media from 'styles/media'

export const breakpoints: Breakpoints = {
  xxs: 0,
  xs: 360,
  s: 440,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1601,
}

export const colors: Colors = {
  primary: '#B19684',
  primary100: '#867062',
  primary200: '#947967',
  primary300: '#B09683',
  primary400: '#B0968385',
  primary500: '#B99A86',
  primary600: '#AA9684',
  gray: '#E6EAEE',
  gray100: '#EEF1F4',
  gray200: '#EEEEEE',
  gray300: '#DDDEDF',
  gray400: '#EAE8E8',
  gray500: '#C9C9C9',
  black: '#000000',
  black100: '#222121',
  white: '#FFFFFF',
  danger: '#CA0F0F',
}

export const fonts: Fonts = {
  size: '16px',
}

export const container: Container = {
  widthNav: '1920px',

  widthXL: '1400px',
  width: '1140px',

  widthSlimXL: '1520px',
  widthSlim: '1100px',

  widthNarrowXL: '1200px',
  widthNarrow: '768px',

  paddingMD: '2rem',
  paddingSM: '1rem',
  padding: '2rem',
}

const theme = {
  breakpoints,
  colors,
  fonts,
  container,
  media: media(),
}

export default theme
