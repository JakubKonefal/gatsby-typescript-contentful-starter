import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

import Icon from 'components/shared/icon'

import useOutsideClick from 'hooks/useOutsideClick'
import scrollToSection from 'utils/scrollToSection'

// import closeIcon from 'assets/icons/close.svg'

const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`

const Wrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -35%);
  visibility: hidden;
  opacity: 0;
  transition: 0.35s ease;
  cursor: pointer;
  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -50%);
    `}
`

const InnerWrapper = styled.div`
  position: relative;
`

const CloseButton = styled.button`
  background: transparent;
  padding: 0;
  margin: 0;
  position: absolute;
  top: -35px;
  right: 0;
  width: 20px;
  height: 20px;
  z-index: 1;
  cursor: pointer;
  ${({ theme }) => theme.media.md.min} {
    top: -34px;
    right: -34px;
    width: 25px;
    height: 25px;
  }
`

const IconWrapper = styled.div`
  position: relative;

  & > img {
    max-width: 90vw;
    max-height: 50vh;
  }

  ${({ theme }) => theme.media.md.min} {
    & > img {
      max-width: 640px;
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    & > img {
      max-height: 60vh;
    }
  }

  ${({ theme }) => theme.media.xl.min} {
    & > img {
      max-width: 740px;
      max-height: 75vh;
    }
  }

  ${({ theme }) => theme.media.xxl.min} {
    & > img {
      max-width: 820px;
    }
  }
`

const Popup = ({ popupImg }: any) => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  const closePopup = () => {
    sessionStorage.setItem('promoPopupClosed', 'true')
    setIsVisible(false)
  }

  useEffect(() => {
    if (!sessionStorage.getItem('promoPopupClosed')) {
      setTimeout(() => {
        setIsVisible(true)
      }, 200)
    }
  }, [])

  useEffect(() => {
    const scrollToPromoFlats = () => {
      const flatsSection = document.querySelector(`#contactTop`)
      if (flatsSection && scrolling) {
        flatsSection.scrollIntoView({ behavior: 'smooth' })
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', scrollToPromoFlats)
    return () => window.removeEventListener('scroll', scrollToPromoFlats)
  }, [scrolling])

  const popupRef = useRef(null)
  useOutsideClick({ ref: popupRef, handler: closePopup })

  return (
    popupImg && (
      <Overlay visible={isVisible}>
        <Wrapper
          onClick={() => {
            scrollToSection('#contactTop')
            closePopup()
            setScrolling(true)
          }}
          ref={popupRef}
          visible={isVisible}
        >
          <InnerWrapper>
            <CloseButton
              onClick={(event) => {
                event.stopPropagation()
                closePopup()
              }}
            >
              {/* <Icon src={closeIcon} alt="zamknij" auto /> */}
            </CloseButton>
            <IconWrapper>
              <img src={popupImg} alt="promocja" />
            </IconWrapper>
          </InnerWrapper>
        </Wrapper>
      </Overlay>
    )
  )
}

export default Popup
