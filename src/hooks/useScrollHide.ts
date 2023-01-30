import { useState, useLayoutEffect } from 'react'

const isBrowser = typeof window !== `undefined`

function getScrollPosition() {
  if (!isBrowser) return { x: 0, y: 0 }

  return { x: window.scrollX, y: window.scrollY }
}

let throttleTimeout: ReturnType<typeof setTimeout>

export default function useScrollHide(
  wait: number,
  offset: number,
  dependencies: any[] = []
) {
  const [position, setPosition] = useState(getScrollPosition())
  const [hidden, setHidden] = useState(false)

  const callback = () => {
    const newPosition = getScrollPosition()
    if (position.y > newPosition.y) {
      setHidden(false)
    } else if (newPosition.y + 50 >= offset) {
      setHidden(true)
    }
    setPosition(newPosition)
    clearTimeout(throttleTimeout)
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        clearTimeout(throttleTimeout)
        throttleTimeout = setTimeout(callback, wait)
      } else {
        callback()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [...dependencies, position])

  return hidden
}
