export const scrollTo = (top: number, behavior: ScrollBehavior = 'smooth') => {
  if (typeof window !== `undefined`) {
    window.scrollTo({
      top,
      behavior,
    })
  }
}

export const scrollToElement = (
  element: Element | null,
  behavior: ScrollBehavior = 'smooth'
) => {
  if (typeof window !== `undefined`) {
    if (element) {
      element.scrollIntoView({ behavior })

      return true
    }
  }
  return false
}

export const scrollToNextSibling = (parent: string) => {
  const origin = document.querySelector(parent)
  if (origin) {
    const sibling = origin.nextSibling
    if (sibling) {
      return scrollToElement(sibling as Element)
    }
  }
  return false
}

export const scrollTop = () => {
  if (typeof window !== `undefined`) {
    const topElement = document.querySelector('body')
    return scrollToElement(topElement)
  }
  return false
}

export const scrollToSection = (
  selector: string,
  behavior: ScrollBehavior = 'smooth',
  forceIntoView: boolean = false
) => {
  if (typeof window !== `undefined`) {
    const element = document.querySelector(selector)
    if (forceIntoView && element) {
      element.scrollIntoView({ behavior })
      return true
    }
    return scrollToElement(element, behavior)
  }
  return false
}

export const scrollToSectionTop = (selector: string) => {
  if (typeof window !== `undefined`) {
    const element = document.querySelector(selector)

    if (element) {
      const { top } = element.getBoundingClientRect()
      if (top < 0) {
        return scrollToElement(element)
      }
    }
  }
  return false
}

export default scrollToSection
