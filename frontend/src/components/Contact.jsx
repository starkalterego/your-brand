import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
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
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.')
  }

  return (
    <section id="contact" className="py-16 md:py-24" style={{ background: 'linear-gradient(to bottom, #F0F4F8, #ffffff)' }}>
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left - Contact Info */}
          <div className="space-y-6 md:space-y-8">
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
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="h-10 md:h-12 w-10 md:w-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F0F4F8' }}>
                  <Phone className="h-5 md:h-6 w-5 md:w-6" style={{ color: '#60A5FA' }} />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-sm md:text-base" style={{ color: '#1E293B' }}>Phone</div>
                  <a href="tel:+919876543210" className="hover:opacity-80 text-xs md:text-sm" style={{ color: '#64748B' }}>
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a href="mailto:hello@aquabrand.in" className="text-gray-600 hover:text-primary-600">
                    hello@aquabrand.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Location</div>
                  <p className="text-gray-600">
                    Bhubaneswar, Odisha, India
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100">
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
