import { css, createGlobalStyle } from 'styled-components'

import Normalize from 'styles/normalize'

const Global = css`
  * {
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  html {
    font-size: ${({ theme }) => theme.fonts.size};
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    position: relative;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
  }

  p {
    font-family: 'Montserrat', sans-serif;
  }

  span {
    font-family: 'Montserrat', sans-serif;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 100px white inset;
    box-shadow: 0 0 0px 100px white inset;
  }

  img {
    margin: 0;
  }
`

const GlobalStyles = createGlobalStyle`
    ${Normalize}
    ${Global} 
`

export default GlobalStyles
