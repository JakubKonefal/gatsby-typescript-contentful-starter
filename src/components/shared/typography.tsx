import styled, { css, CSSProperties } from 'styled-components'

import omitProps from 'utils/omitProps'

import { pxToRem } from 'styles/mixins'

import type { TextProps, TextColor } from 'types/typography'

const TextCustomProps = [
  'themecolor',
  'size',
  'sizeDiff',
  'align',
  'weight',
  'align',
  'margin',
  'transform',
  'decoration',
]

export const Heading = styled.h1<TextProps>`
  display: block;

  font-weight: ${({ weight }) => weight ?? '700'};
  line-height: ${({ line }) => line ?? 'initial'};
  font-size: ${({ size }) =>
    size ? `${pxToRem(size)}rem` : `${pxToRem(70)}rem`};
  text-align: ${({ align }) => align ?? 'left'};
  text-transform: ${({ transform }) => transform ?? 'initial'};
  text-decoration: ${({ decoration }) => decoration ?? 'none'};
  color: ${({ theme, themecolor }) =>
    themecolor ? theme.colors[themecolor] : theme.colors.black};

  margin-bottom: ${({ margin }) => margin ?? '1.5rem'};

  transition: color 150ms ease;

  ${({ size, sizeDiff = 0.5 }) =>
    css`
      ${({ theme }) => theme.media.xxl.max} {
        font-size: ${size
          ? `${pxToRem(size * (1 - (sizeDiff / 10) * 2))}rem`
          : `${pxToRem(66)}rem`};
      }

      ${({ theme }) => theme.media.xl.max} {
        font-size: ${size
          ? `${pxToRem(size * (1 - (sizeDiff / 10) * 3))}rem`
          : `${pxToRem(62)}rem`};
      }

      ${({ theme }) => theme.media.lg.max} {
        font-size: ${size
          ? `${pxToRem(size * (1 - (sizeDiff / 10) * 4))}rem`
          : `${pxToRem(54)}rem`};
      }

      ${({ theme }) => theme.media.md.max} {
        font-size: ${size
          ? `${pxToRem(size * (1 - (sizeDiff / 10) * 5))}rem`
          : `${pxToRem(48)}rem`};
      }

      ${({ theme }) => theme.media.sm.max} {
        font-size: ${size
          ? `${pxToRem(size * (1 - (sizeDiff / 10) * 6))}rem`
          : `${pxToRem(42)}rem`};
      }
    `}
`

export const Text = styled.p.withConfig<Omit<TextProps, 'sizeDiff'>>(
  omitProps(TextCustomProps)
)`
  position: relative;
  display: block;
  line-height: ${({ line }) => line ?? '1.4'};
  font-weight: ${({ weight }) => weight ?? '400'};
  text-transform: ${({ transform }) => transform ?? 'initial'};
  font-size: ${({ size }) => (size ? `${pxToRem(size)}rem` : '1rem')};
  text-align: ${({ align }) => align ?? 'left'};
  text-decoration: ${({ decoration }) => decoration ?? 'none'};
  color: ${({ theme, themecolor }) =>
    themecolor ? theme.colors[themecolor] : theme.colors.black};

  margin-bottom: ${({ margin }) => margin ?? '0'};

  transition: color 150ms ease;

  a {
    color: inherit;
  }
`

export const Light = styled.span`
  font-weight: 300;
`

export const Medium = styled.span`
  font-weight: 500;
`

export const SemiBold = styled.span`
  font-weight: 600;
`

export const Bold = styled.span`
  font-weight: 700;
`

export const Color = styled.span<TextColor>`
  color: ${({ theme, themecolor }) =>
    themecolor ? theme.colors[themecolor] : theme.colors.black} !important;
`

export const Content = styled.div<{ line?: CSSProperties['lineHeight'] }>`
  b {
    font-weight: 500;
    font-size: 1.1em;
    color: ${({ theme }) => theme.colors.black};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 1.5rem;

    li {
      padding-left: 1.4em;
      text-indent: -1.2em;
      margin: 0 0 0.25rem;

      &::before {
        content: '';

        display: inline-block;
        width: 7px;
        height: 7px;

        margin-right: 12px;

        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  p,
  li {
    line-height: ${({ line }) => line || '1.9'};
    font-weight: 400;

    font-size: 1rem;
    text-align: left;

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.media.md.max} {
      line-height: ${({ line }) => line || '1.55'};
    }
  }

  p {
    display: block;
    margin-bottom: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;

    font-weight: 700;
    text-align: left;
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.5rem;

    margin: 0.75rem 0 1rem;
    ${({ theme }) => theme.media.md.max} {
      font-size: 1.2rem;
    }
  }
  h5,
  h6 {
    margin: 0.5rem 0;
  }

  h1 {
    font-size: ${pxToRem(30)}rem;
    ${({ theme }) => theme.media.md.max} {
      font-size: ${pxToRem(26)}rem;
    }
  }
  h2 {
    font-size: ${pxToRem(26)}rem;
    ${({ theme }) => theme.media.md.max} {
      font-size: ${pxToRem(22)}rem;
    }
  }
  h3 {
    font-size: ${pxToRem(24)}rem;
    ${({ theme }) => theme.media.md.max} {
      font-size: ${pxToRem(21)}rem;
    }
  }
  h4 {
    font-size: ${pxToRem(22)}rem;
    ${({ theme }) => theme.media.md.max} {
      font-size: ${pxToRem(20)}rem;
    }
  }
  h5 {
    font-size: ${pxToRem(20)}rem;
  }
  h6 {
    font-size: ${pxToRem(18)}rem;
  }

  img {
    display: block;
    width: 100%;
    margin: 1rem 0 2rem;
  }
  .small {
    font-size: ${pxToRem(14)}rem;
    line-height: 1.6;
  }
  .tiny {
    font-size: ${pxToRem(12)}rem;
    line-height: 1.5;
  }
`
