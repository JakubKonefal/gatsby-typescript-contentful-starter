import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import Cookie from 'js-cookie'
import Container from 'components/shared/container'
import Button from 'components/shared/button'
import { Text } from 'components/shared/typography'

const CookiesWrapper = styled.aside`
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
  display: block;
  transition: 0.3s ease;
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.black};

  ${({ hidden }) =>
    hidden &&
    css`
      opacity: 0;
      transform: translateY(100px);
    `}
`

const CookiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  gap: 30px;

  ${({ theme }) => theme.media.lg.min} {
    flex-direction: row;
  }
`

const CookiesButton = styled(Button)`
  padding: 15px 0;

  ${({ theme }) => theme.media.lg.min} {
    padding: 15px 100px;
  }
`

const CookiesText = styled(Text)`
  a {
    font-weight: 600;
  }
`

const COOKIE_KEY = 'walbrzyska-cookies'

const Cookies = () => {
  const [visible, setVisible] = useState(false)
  const [removeAlert, setRemoveAlert] = useState(false)

  const acceptCookies = () => {
    Cookie.set(COOKIE_KEY, 'true')
    setVisible(false)
    setTimeout(() => setRemoveAlert(true), 500)
    if (localStorage) {
      localStorage.setItem(COOKIE_KEY, 'true')
    }
  }

  useEffect(() => {
    if (localStorage) {
      const value = localStorage.getItem(COOKIE_KEY)
      if (value && Boolean(value) === true) {
        setVisible(false)
        setTimeout(() => setRemoveAlert(true), 500)
      } else {
        setVisible(true)
      }
    } else {
      setVisible(true)
    }
  }, [])

  return (
    <>
      {!removeAlert && (
        <CookiesWrapper hidden={!visible}>
          <Container>
            <CookiesContainer>
              <CookiesText themecolor="white">
                Strona korzysta z plików cookies w celu realizacji usług. Możesz
                określić warunki przechowywania lub dostępu do plików cookies w
                Twojej przeglądarce.
                {/* <Link to="/polityka-prywatnosci/"> Czytaj więcej</Link> */}
              </CookiesText>
              <CookiesButton primary onClick={acceptCookies}>
                OK
              </CookiesButton>
            </CookiesContainer>
          </Container>
        </CookiesWrapper>
      )}
    </>
  )
}

export default Cookies
