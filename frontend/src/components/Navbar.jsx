import React, { useState, useEffect } from 'react'
import { Menu, X, Droplet } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Try Mockup', href: '#mockup' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav 
      className="fixed w-full bg-white/95 backdrop-blur-md z-50 transition-all duration-300"
      style={{
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="container-custom px-4">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Droplet className="h-7 md:h-9 w-7 md:w-9 transition-transform group-hover:scale-110" style={{ color: '#60A5FA' }} />
            <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: '#1E293B' }}>AquaDrops</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative transition-colors font-medium group"
                style={{ color: '#475569' }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#60A5FA' }}></span>
              </a>
            ))}
            <a
              href="#contact"
              className="text-white px-6 py-2.5 rounded-full transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#0EA5E9' }}
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 transition-colors active:bg-slate-100 rounded-lg"
              style={{ color: '#475569' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 px-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:bg-slate-50 active:bg-slate-100 transition-all font-medium py-3 px-4 rounded-lg"
                  style={{ color: '#475569' }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-white px-6 py-3 rounded-lg active:scale-95 transition-all font-medium text-center mt-2"
                style={{ backgroundColor: '#0EA5E9' }}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
