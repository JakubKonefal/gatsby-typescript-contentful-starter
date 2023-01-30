const React = require('react')
const { ThemeProvider } = require('styled-components')

const { default: theme } = require('styles/theme')
const { default: GlobalStyles } = require('styles/global')

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {element}
      </ThemeProvider>
    </>
  )
}
