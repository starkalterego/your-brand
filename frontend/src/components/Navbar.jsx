import React, { useState } from 'react'
import { Menu, X, Droplet } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Try Mockup', href: '#mockup' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom px-4">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Droplet className="h-6 md:h-8 w-6 md:w-8" style={{ color: '#60A5FA' }} />
            <span className="text-lg md:text-xl font-semibold" style={{ color: '#1E293B' }}>AquaDrops</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors font-medium hover:opacity-80"
                style={{ color: '#475569' }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="text-white px-6 py-2 rounded-full transition-colors font-medium"
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
