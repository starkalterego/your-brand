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
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-5" style={{ backgroundColor: '#EFF6FF', color: '#0EA5E9', border: '1px solid #DBEAFE' }}>
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-[1.1]" style={{ color: '#1E293B', letterSpacing: '-0.02em' }}>
                Let's Create Something
                <span style={{ color: '#60A5FA' }}> Special</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#64748B', lineHeight: '1.7' }}>
                Get in touch for a free quote and design consultation. We're here to make your brand shine.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start space-x-3 md:space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-slate-50">
                <div className="h-11 md:h-12 w-11 md:w-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)' }}>
                  <Phone className="h-5 md:h-6 w-5 md:w-6" style={{ color: '#0EA5E9' }} />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-sm md:text-base" style={{ color: '#1E293B' }}>Call or WhatsApp</div>
                  <a href="https://wa.me/918114806315" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity text-sm md:text-base" style={{ color: '#64748B' }}>
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
            className="bg-white p-6 md:p-10 rounded-2xl"
            style={{
              opacity: 0,
              transform: 'translateX(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              border: '1px solid #E2E8F0'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#1E293B' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border transition-all duration-200 outline-none text-sm md:text-base"
                  style={{ borderColor: '#E2E8F0' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#60A5FA'
                    e.target.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#1E293B' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border transition-all duration-200 outline-none text-sm md:text-base"
                  style={{ borderColor: '#E2E8F0' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#60A5FA'
                    e.target.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: '#1E293B' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border transition-all duration-200 outline-none text-sm md:text-base"
                  style={{ borderColor: '#E2E8F0' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#60A5FA'
                    e.target.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-semibold mb-2" style={{ color: '#1E293B' }}>
                  Event/Service Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border transition-all duration-200 outline-none text-sm md:text-base"
                  style={{ borderColor: '#E2E8F0' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#60A5FA'
                    e.target.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0'
                    e.target.style.boxShadow = 'none'
                  }}
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
                <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#1E293B' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border transition-all duration-200 outline-none resize-none text-sm md:text-base"
                  style={{ borderColor: '#E2E8F0' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#60A5FA'
                    e.target.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0'
                    e.target.style.boxShadow = 'none'
                  }}
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-all duration-300 font-semibold flex items-center justify-center space-x-2 text-sm md:text-base hover:scale-[1.02] active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
                  boxShadow: '0 8px 24px rgba(14, 165, 233, 0.25)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 32px rgba(14, 165, 233, 0.35)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(14, 165, 233, 0.25)'}
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
