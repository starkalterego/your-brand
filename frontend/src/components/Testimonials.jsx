import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Wedding Planner',
      company: 'Elite Events Bhubaneswar',
      content: 'The custom water bottles added such a personal touch to our client\'s wedding. Guests loved seeing the couple\'s names and wedding date on every bottle!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'General Manager',
      company: 'Grand Bay Resort',
      content: 'We\'ve been using AquaBrand for all our in-room water bottles. The quality is excellent and our guests appreciate the branded touch.',
      rating: 5
    },
    {
      name: 'Anita Patel',
      role: 'HR Director',
      company: 'TechCorp India',
      content: 'Perfect solution for our corporate events and daily office use. The ordering process was smooth and delivery was always on time.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container-custom px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4" style={{ backgroundColor: '#F0F4F8', color: '#1E293B' }}>
            Client Stories
          </div>
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: '#1E293B' }}>
            Trusted by Businesses
            <span style={{ color: '#60A5FA' }}> Across Odisha</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed" style={{ color: '#64748B' }}>
            See what our clients have to say about our custom branded water solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 md:p-10 rounded-2xl md:rounded-3xl relative hover:shadow-2xl transition-all duration-500 border transform hover:-translate-y-1"
              style={{ background: 'linear-gradient(to bottom right, #ffffff, #F0F4F8)', borderColor: '#CBD5E1' }}
            >
              <Quote className="h-8 md:h-10 w-8 md:w-10 mb-3 md:mb-4" style={{ color: '#60A5FA30' }} />
              
              {/* Rating */}
              <div className="flex mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm md:text-base text-gray-700 mb-5 md:mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4 md:pt-6">
                <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                <div className="text-xs md:text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-xs md:text-sm text-primary-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
