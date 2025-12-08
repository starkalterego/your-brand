import React from 'react'
import { Droplet, Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Droplet className="h-8 w-8" style={{ color: '#60A5FA' }} />
              <span className="text-xl font-semibold text-white">AquaBrand</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium custom-branded bottled water solutions for events, hospitality, and corporate needs across Odisha.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors" style={{ color: '#94A3B8' }}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:opacity-70" style={{ color: '#94A3B8' }}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:opacity-70" style={{ color: '#94A3B8' }}>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:hello@aquabrand.in" className="transition-colors hover:opacity-70" style={{ color: '#94A3B8' }}>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="transition-colors hover:opacity-70" style={{ color: '#94A3B8' }}>
                  Wedding Water Bottles
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:opacity-70" style={{ color: '#94A3B8' }}>
                  Hotel & Resort Branding
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:opacity-70" style={{ color: '#94A3B8' }}>
                  Corporate Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:opacity-70" style={{ color: '#94A3B8' }}>
                  Event Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary-400 transition-colors">
                  Our Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>Bhubaneswar, Odisha</li>
              <li>
                <a href="tel:+919876543210" className="hover:text-primary-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@aquabrand.in" className="hover:text-primary-400 transition-colors">
                  hello@aquabrand.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} AquaBrand. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              FSSAI Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
