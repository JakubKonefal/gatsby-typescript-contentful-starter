import { useState, useEffect } from 'react'

const useLocation = () => {
  const locationPath =
    typeof window !== 'undefined' ? window.location.pathname : '/'

  const [pathname, setPathname] = useState(locationPath)

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [locationPath])

  return pathname
}

export default useLocation
