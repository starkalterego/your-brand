import React, { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const leftColRef = useRef(null)
  const rightColRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (leftColRef.current) {
            leftColRef.current.style.opacity = '1'
            leftColRef.current.style.transform = 'translateX(0)'
          }
          if (rightColRef.current) {
            setTimeout(() => {
              rightColRef.current.style.opacity = '1'
              rightColRef.current.style.transform = 'translateX(0)'
            }, 200)
          }
        }
      })
    }, observerOptions)

    if (leftColRef.current) observer.observe(leftColRef.current)

    return () => {
      if (leftColRef.current) observer.unobserve(leftColRef.current)
    }
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.')
  }

  return (
    <section id="contact" className="py-16 md:py-24" style={{ background: 'linear-gradient(to bottom, #F0F4F8, #ffffff)' }}>
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left - Contact Info */}
          <div 
            ref={leftColRef}
            className="space-y-6 md:space-y-8"
            style={{
              opacity: 0,
              transform: 'translateX(-40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <div>
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4" style={{ backgroundColor: '#F0F4F8', color: '#1E293B' }}>
                Get In Touch
              </div>
              <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: '#1E293B' }}>
                Let's Create Something
                <span style={{ color: '#60A5FA' }}> Special</span>
              </h2>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed" style={{ color: '#64748B' }}>
                Get in touch for a free quote and design consultation. We're here to make your brand shine.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 md:space-y-6">
              <div className="flex items-start space-x-2.5 md:space-x-4">
                <div className="h-9 md:h-12 w-9 md:w-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F0F4F8' }}>
                  <Phone className="h-4 md:h-6 w-4 md:w-6" style={{ color: '#60A5FA' }} />
                </div>
                <div>
                  <div className="font-semibold mb-0.5 text-xs md:text-base" style={{ color: '#1E293B' }}>Call or WhatsApp</div>
                  <a href="https://wa.me/918114806315" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 text-[11px] md:text-sm" style={{ color: '#64748B' }}>
                    +91 8114806315
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 md:space-x-4">
                <div className="h-9 md:h-12 w-9 md:w-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F0F4F8' }}>
                  <Mail className="h-4 md:h-6 w-4 md:w-6" style={{ color: '#60A5FA' }} />
                </div>
                <div>
                  <div className="font-semibold mb-0.5 text-xs md:text-base" style={{ color: '#1E293B' }}>Email</div>
                  <a href="mailto:wecare.aquadrops@gmail.com" className="hover:opacity-80 text-[11px] md:text-sm" style={{ color: '#64748B' }}>
                    wecare.aquadrops@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 md:space-x-4">
                <div className="h-9 md:h-12 w-9 md:w-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F0F4F8' }}>
                  <MapPin className="h-4 md:h-6 w-4 md:w-6" style={{ color: '#60A5FA' }} />
                </div>
                <div>
                  <div className="font-semibold mb-0.5 text-xs md:text-base" style={{ color: '#1E293B' }}>Location</div>
                  <p className="text-[11px] md:text-sm" style={{ color: '#64748B' }}>
                    Bhubaneswar, Odisha, India
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-200">
              <h3 className="font-semibold mb-2 md:mb-3 text-sm md:text-base" style={{ color: '#1E293B' }}>Business Hours</h3>
              <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm" style={{ color: '#64748B' }}>
                <div className="flex justify-between">
                  <span>Mon - Sat</span>
                  <span>9AM - 7PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10AM - 4PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div 
            ref={rightColRef}
            className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100"
            style={{
              opacity: 0,
              transform: 'translateX(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors text-sm md:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors text-sm md:text-base"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                  Event/Service Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors text-sm md:text-base"
                >
                  <option value="">Select an option</option>
                  <option value="wedding">Wedding/Event</option>
                  <option value="hotel">Hotel/Resort</option>
                  <option value="corporate">Corporate Office</option>
                  <option value="event-planning">Event Planning</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors resize-none text-sm md:text-base"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl hover:bg-primary-700 transition-colors font-medium flex items-center justify-center space-x-2 shadow-lg shadow-primary-200 text-sm md:text-base"
              >
                <span>Send Message</span>
                <Send className="h-4 md:h-5 w-4 md:w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
