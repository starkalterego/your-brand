import React from 'react'
import { Droplet, Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom px-4 py-4 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-1.5 md:space-y-4 text-center md:text-left">
            <div className="flex items-center space-x-2 justify-centermd:justify-start">
              <Droplet className="h-5 md:h-8 w-5 md:w-8" style={{ color: '#60A5FA' }} />
              <span className="text-sm md:text-xl font-semibold text-white">AquaDrops</span>
            </div>
            <p className="text-xs md:text-sm text-gray-400 leading-tight md:leading-relaxed max-w-xs mx-auto md:mx-0">
              Premium custom-branded water solutions for Odisha.
            </p>
            <div className="flex space-x-2 md:space-x-4 justify-center md:justify-start">
              <a href="#" className="p-1.5 md:p-2 -m-1.5 md:-m-2 transition-colors hover:opacity-70 active:scale-95" style={{ color: '#94A3B8' }} aria-label="Facebook">
                <Facebook className="h-4 md:h-5 w-4 md:w-5" />
              </a>
              <a href="#" className="p-1.5 md:p-2 -m-1.5 md:-m-2 transition-colors hover:opacity-70 active:scale-95" style={{ color: '#94A3B8' }} aria-label="Instagram">
                <Instagram className="h-4 md:h-5 w-4 md:w-5" />
              </a>
              <a href="#" className="p-1.5 md:p-2 -m-1.5 md:-m-2 transition-colors hover:opacity-70 active:scale-95" style={{ color: '#94A3B8' }} aria-label="LinkedIn">
                <Linkedin className="h-4 md:h-5 w-4 md:w-5" />
              </a>
              <a href="mailto:wecare.aquadrops@gmail.com" className="p-1.5 md:p-2 -m-1.5 md:-m-2 transition-colors hover:opacity-70 active:scale-95" style={{ color: '#94A3B8' }} aria-label="Email">
                <Mail className="h-4 md:h-5 w-4 md:w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-left">
            <h3 className="text-white font-semibold mb-1 md:mb-4 text-sm md:text-base">Services</h3>
            <ul className="space-y-0 md:space-y-2.5 text-xs md:text-sm leading-tight">
              <li>
                <a href="#services" className="inline-block md:py-1 transition-colors hover:opacity-70 active:scale-95" style={{ color: '#94A3B8' }}>
                  Weddings
                </a>
              </li>
              <li>
                <a href="#services" className="inline-block md:py-1 transition-colors hover:opacity-70 active:scale-95" style={{ color: '#94A3B8' }}>
                  Hotels
                </a>
              </li>
              <li>
                <a href="#services" className="inline-block md:py-1 transition-colors hover:opacity-70 active:scale-95" style={{ color: '#94A3B8' }}>
                  Corporate
                </a>
              </li>
              <li>
                <a href="#services" className="inline-block md:py-1 transition-colors hover:opacity-70 active:scale-95" style={{ color: '#94A3B8' }}>
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-white font-semibold mb-1 md:mb-4 text-sm md:text-base">Links</h3>
            <ul className="space-y-0 md:space-y-2.5 text-xs md:text-sm leading-tight">
              <li>
                <a href="#features" className="inline-block md:py-1 hover:text-primary-400 active:scale-95 transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="inline-block md:py-1 hover:text-primary-400 active:scale-95 transition-all">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="inline-block md:py-1 hover:text-primary-400 active:scale-95 transition-all">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="inline-block md:py-1 hover:text-primary-400 active:scale-95 transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h3 className="text-white font-semibold mb-1 md:mb-4 text-sm md:text-base">Contact</h3>
            <ul className="space-y-0 md:space-y-2.5 text-xs md:text-sm leading-tight">
              <li>Bhubaneswar, Odisha</li>
              <li>
                <a href="https://wa.me/918114806315" target="_blank" rel="noopener noreferrer" className="inline-block md:py-1 hover:text-primary-400 active:scale-95 transition-all">
                  +91 8114806315
                </a>
              </li>
              <li>
                <a href="mailto:wecare.aquadrops@gmail.com" className="inline-block md:py-1 hover:text-primary-400 active:scale-95 transition-all">
                  wecare.aquadrops@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-3 md:mt-12 pt-2 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-1.5 md:gap-4">
          <p className="text-center md:text-left">&copy; {currentYear} AquaDrops. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-1">
            <a href="#" className="hover:text-primary-400 active:scale-95 transition-all py-0.5 md:py-1">
              Privacy
            </a>
            <a href="#" className="hover:text-primary-400 active:scale-95 transition-all py-0.5 md:py-1">
              Terms
            </a>
            <a href="#" className="hover:text-primary-400 active:scale-95 transition-all py-0.5 md:py-1">
              FSSAI
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
