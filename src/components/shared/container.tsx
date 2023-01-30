import styled, { css } from 'styled-components'

type ContainerProps = {
  navWidth?: boolean
  fullHeight?: boolean
  fullWidth?: boolean
  slim?: boolean
  narrow?: boolean
  center?: boolean
  between?: boolean
}

const Container = styled.div<ContainerProps>`
  position: relative;

  margin-left: auto;
  margin-right: auto;

  padding-left: ${({ theme }) => theme.container.paddingMD};
  padding-right: ${({ theme }) => theme.container.paddingMD};

  ${({ theme }) => theme.media.lg.max} {
    padding-left: ${({ theme }) => theme.container.padding};
    padding-right: ${({ theme }) => theme.container.padding};
  }

  ${({ theme }) => theme.media.sm.max} {
    padding-left: ${({ theme }) => theme.container.paddingSM};
    padding-right: ${({ theme }) => theme.container.paddingSM};
  }

  width: 100%;
  max-width: ${({ theme }) =>
    `calc(${theme.container.widthXL} + (${theme.container.padding} * 2))`};

  ${({ theme }) => theme.media.xxl.max} {
    max-width: ${({ theme }) =>
      `calc(${theme.container.width} + (${theme.container.padding} * 2))`};
  }

  ${({ slim }) =>
    slim &&
    css`
      max-width: ${({ theme }) =>
        `calc(${theme.container.widthSlimXL} + (${theme.container.padding} * 2))`};

      ${({ theme }) => theme.media.xxl.max} {
        max-width: ${({ theme }) =>
          `calc(${theme.container.widthSlim} + (${theme.container.padding} * 2))`};
      }
    `}

  ${({ narrow }) =>
    narrow &&
    css`
      max-width: ${({ theme }) =>
        `calc(${theme.container.widthNarrowXL} + (${theme.container.padding} * 2))`};

      ${({ theme }) => theme.media.xxl.max} {
        max-width: ${({ theme }) =>
          `calc(${theme.container.widthNarrow} + (${theme.container.padding} * 2))`};
      }
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      max-width: initial;
    `}

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}

  ${({ navWidth }) =>
    navWidth &&
    css`
      max-width: ${({ theme }) => theme.container.widthNav} !important;
    `}

  ${({ center }) =>
    center &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${({ between }) =>
    between &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    `}
`

export default Container
