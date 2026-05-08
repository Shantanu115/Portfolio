import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white transition-all duration-400 z-50 hover:bg-primary/80 ${
        isVisible ? 'bottom-4 opacity-100 visible' : '-bottom-4 opacity-0 invisible'
      }`}
    >
      <FaArrowUp size={20} />
    </button>
  )
}

export default ScrollToTop
