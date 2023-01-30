import { useEffect, MutableRefObject } from 'react'

type Props = {
  ref: MutableRefObject<HTMLDivElement | null>
  handler: () => void
}

const useOutsideClick = ({ ref, handler }: Props) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || (e.target && ref.current.contains(e.target as Node)))
        return

      handler()
    }

    document.addEventListener('mousedown', listener)

    return () => document.removeEventListener('mousedown', listener)
  }, [ref, handler])
}

export default useOutsideClick
