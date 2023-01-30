import * as React from 'react'

import GlobalStyles from 'styles/global'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

export default Layout
