import React from 'react'
import styled, { css } from 'styled-components'

import Image from 'components/shared/image'

import { pxToRem } from 'styles/mixins'

type IconProps = {
  src: string
  alt?: string
  size?: number
  height?: number
  width?: number

  marginRight?: boolean
  marginLeft?: boolean

  inline?: boolean

  className?: string
  auto?: boolean
}

const StyledIcon = styled(Image).attrs({ tag: 'span' })<IconProps>`
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  ${({ width }) =>
    width &&
    css`
      min-width: ${width}px;
    `}

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${pxToRem(6)}rem;
    `}

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${pxToRem(6)}rem;
    `}

  ${({ auto }) =>
    auto &&
    css`
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      * {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    `}
`

const Icon: React.FC<IconProps> = ({
  src,
  alt = '',
  size = 16,
  className,
  marginLeft,
  marginRight,
  height,
  width,
  auto = false,
  inline = true,
}) => {
  if (height && !width) {
    return (
      <StyledIcon
        src={src}
        alt={alt ?? ''}
        height={height}
        className={className}
        auto={auto}
        inline={inline}
        objectFit="contain"
        objectPosition="center"
        marginLeft={marginLeft}
        marginRight={marginRight}
      />
    )
  }

  if (!height && width) {
    return (
      <StyledIcon
        src={src}
        alt={alt ?? ''}
        width={width}
        className={className}
        auto={auto}
        inline={inline}
        objectFit="contain"
        objectPosition="center"
        marginLeft={marginLeft}
        marginRight={marginRight}
      />
    )
  }

  return (
    <StyledIcon
      src={src}
      alt={alt ?? ''}
      width={width || size}
      height={height || size}
      className={className}
      auto={auto}
      inline={inline}
      objectFit="contain"
      objectPosition="center"
      marginLeft={marginLeft}
      marginRight={marginRight}
    />
  )
}

export default Icon
