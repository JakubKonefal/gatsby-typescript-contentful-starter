import { useState, useEffect } from 'react'
import { Breakpoints as BreakpointsType } from 'types/theme'

import { breakpoints } from 'styles/theme'

type BreakpointsBoolean = {
  [key in keyof BreakpointsType]: boolean
}

export default function useBreakpoint(): BreakpointsBoolean {
  const getBreakpoints = () => {
    const isSSR = typeof window === `undefined`
    const bps: Partial<BreakpointsBoolean> = {}

    const keys = Object.keys(breakpoints) as Array<keyof BreakpointsType>
    keys.forEach((key) => {
      const query = `(min-width: ${breakpoints[key]}px)`
      const matches = isSSR || window.matchMedia(query).matches
      bps[key] = matches
    })

    return bps as BreakpointsBoolean
  }

  const [Breakpoints, setBreakpoints] = useState<BreakpointsBoolean>(
    getBreakpoints()
  )

  useEffect(() => {
    const listener = () => setBreakpoints(getBreakpoints())

    window.addEventListener('resize', listener)
    return () => window.addEventListener('resize', listener)
  }, [])

  return Breakpoints
}
