import styled, { css, keyframes } from 'styled-components'
import { darken } from 'polished'

import { Colors } from 'types/theme'
import { colors } from 'styles/theme'
import { pxToRem } from 'styles/mixins'

type ButtonProps = {
  [key in keyof Colors]?: boolean
} & {
  outline?: boolean
  loading?: boolean
  square?: boolean
  marginRight?: boolean
  marginLeft?: boolean
  uppercase?: boolean
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Button = styled.button<ButtonProps>`
  display: inline-block;
  position: relative;
  white-space: nowrap;

  padding: ${({ square }) =>
    square ? `${pxToRem(6)}em` : `${pxToRem(6)}em ${pxToRem(12)}em`};

  border: 2px solid transparent;
  border-radius: 8px;

  font-size: ${pxToRem(16)}rem;
  font-weight: 400;
  text-decoration: none;

  cursor: pointer;
  transition: color 100ms ease, background-color 100ms ease,
    border-color 100ms ease;

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${pxToRem(6)}em;
    `}

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${pxToRem(10)}em;
    `}

  ${(props) => {
    const keys = Object.keys(props)
    const colorProps = Object.keys(colors)

    for (const key of keys) {
      if (
        colorProps.includes(key) &&
        Boolean(props[key as keyof typeof props])
      ) {
        return css`
          background: ${({ theme }) => theme.colors[key as keyof Colors]};
          border-color: ${({ theme }) => theme.colors[key as keyof Colors]};
          color: ${({ theme }) => theme.colors.white};

          &:hover {
            background: ${({ theme }) =>
              darken(0.05, String(theme.colors[key as keyof Colors]))};
            border-color: ${({ theme }) =>
              darken(0.05, String(theme.colors[key as keyof Colors]))};
          }
        `
      }
    }

    return null
  }}

    ${({ outline }) =>
    outline &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.black};
    `}

    ${({ loading }) =>
    loading &&
    css`
      opacity: 0.7;
      cursor: wait;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: inherit;
      }

      &::after {
        content: '';
        position: absolute;
        top: calc(50% - 11px);
        left: calc(50% - 10px);
        width: 20px;
        height: 20px;
        border: 3px solid ${({ theme }) => theme.colors.white};
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-radius: 50%;
        background: none;
        opacity: (submitting ? '1': '0');
        animation: ${spin} 1s ease infinite;
        z-index: 5;
      }
    `}

    &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default Button
