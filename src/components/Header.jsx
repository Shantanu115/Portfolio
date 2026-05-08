import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      // Detect active section
      const sections = ['hero', 'about', 'what-im-doing', 'resume', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 150 // Offset for header height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'what-im-doing', label: 'Services' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-500 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-heading font-medium text-heading">Shantanu</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-nav transition-colors ${
                  activeSection === item.id
                    ? 'text-primary font-semibold'
                    : 'text-text hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden xl:flex items-center space-x-4">
            <a href="https://github.com/Shantanu115" target="_blank" rel="noopener noreferrer" className="text-text/60 hover:text-primary transition-colors"><FaGithub size={16} /></a>
            <a href="https://www.linkedin.com/in/shantanu-pandey" target="_blank" rel="noopener noreferrer" className="text-text/60 hover:text-primary transition-colors"><FaLinkedin size={16} /></a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden text-text text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-20 left-4 right-4 bg-white rounded-lg shadow-xl p-4 mt-2">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-nav transition-colors text-left ${
                    activeSection === item.id
                      ? 'text-primary font-semibold'
                      : 'text-text hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
