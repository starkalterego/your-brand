import React, { useRef, useState, useEffect } from 'react'
import { Star, Quote, Award, TrendingUp, Users } from 'lucide-react'

const Testimonials = () => {
  const scrollRef = useRef(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoScrollInterval = useRef(null)

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Wedding Planner',
      company: 'Elite Events Bhubaneswar',
      content: 'The custom water bottles added such a personal touch to our client\'s wedding. Guests loved seeing the couple\'s names and wedding date on every bottle!',
      rating: 5,
      avatar: 'PS'
    },
    {
      name: 'Rajesh Kumar',
      role: 'General Manager',
      company: 'Grand Bay Resort',
      content: 'We\'ve been using these services for all our in-room water bottles. The quality is excellent and our guests appreciate the branded touch.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Anita Patel',
      role: 'HR Director',
      company: 'TechCorp India',
      content: 'Perfect solution for our corporate events and daily office use. The ordering process was smooth and delivery was always on time.',
      rating: 5,
      avatar: 'AP'
    },
    {
      name: 'Suresh Nayak',
      role: 'Event Coordinator',
      company: 'Odisha Convention Center',
      content: 'Outstanding service and product quality. The custom branding options helped us create a professional impression at our conferences.',
      rating: 5,
      avatar: 'SN'
    }
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50K+', label: 'Bottles Delivered' },
    { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate' }
  ]

  useEffect(() => {
    const scrollElement = scrollRef.current
    
    const startAutoScroll = () => {
      if (window.innerWidth < 768 && isAutoScrolling) {
        autoScrollInterval.current = setInterval(() => {
          if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            
            if (scrollLeft >= scrollWidth - clientWidth - 10) {
              scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
            } else {
              scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth * 0.85, behavior: 'smooth' })
            }
          }
        }, 4000)
      }
    }

    startAutoScroll()
    
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current)
      }
    }
  }, [isAutoScrolling])

  const handleTouchStart = () => {
    setIsAutoScrolling(false)
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current)
    }
  }

  const handleTouchEnd = () => {
    setTimeout(() => setIsAutoScrolling(true), 6000)
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 relative" style={{ background: 'linear-gradient(to bottom, #F0F4F8, #ffffff)' }}>
      <div className="container-custom px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4" style={{ backgroundColor: '#DBEAFE', color: '#0EA5E9' }}>
            <Star className="h-4 w-4 mr-2 fill-current" />
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: '#1E293B' }}>
            What Our Clients
            <span style={{ color: '#60A5FA' }}> Say About Us</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#64748B' }}>
            Real experiences from businesses and event planners across Odisha
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl border"
              style={{ background: 'linear-gradient(to bottom right, #ffffff, #F0F4F8)', borderColor: '#CBD5E1' }}
            >
              <stat.icon className="h-6 md:h-8 w-6 md:w-8 mx-auto mb-2 md:mb-3" style={{ color: '#60A5FA' }} />
              <div className="text-xl md:text-3xl font-bold mb-1" style={{ color: '#1E293B' }}>{stat.value}</div>
              <div className="text-xs md:text-sm font-medium" style={{ color: '#64748B' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => window.innerWidth < 768 && setIsAutoScrolling(false)}
          onMouseLeave={() => window.innerWidth < 768 && setIsAutoScrolling(true)}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-auto snap-center group"
            >
              <div className="h-full bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:shadow-xl hover:border-blue-200" style={{ borderColor: '#E2E8F0' }}>
                {/* Header with Avatar and Quote */}
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base" style={{ background: 'linear-gradient(to bottom right, #60A5FA, #0EA5E9)' }}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-sm md:text-base" style={{ color: '#1E293B' }}>{testimonial.name}</div>
                      <div className="text-xs md:text-sm" style={{ color: '#64748B' }}>{testimonial.role}</div>
                    </div>
                  </div>
                  <Quote className="h-6 md:h-8 w-6 md:w-8 opacity-20" style={{ color: '#60A5FA' }} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#FCD34D' }} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6" style={{ color: '#475569' }}>
                  "{testimonial.content}"
                </p>

                {/* Company Tag */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs md:text-sm font-medium" style={{ backgroundColor: '#F0F4F8', color: '#0EA5E9' }}>
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full transition-all"
              style={{ backgroundColor: '#CBD5E1' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
