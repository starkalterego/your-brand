import React, { useRef, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const scrollRef = useRef(null)

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Wedding Planner',
      company: 'Elite Events Bhubaneswar',
      content: 'The custom water bottles added such a personal touch to our client\'s wedding. The quality exceeded our expectations and guests absolutely loved the personalized design.',
      rating: 5,
      avatar: 'PS',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Rajesh Kumar',
      role: 'General Manager',
      company: 'Grand Bay Resort',
      content: 'We\'ve partnered with AquaDrops for over a year now. The consistency in quality and the professional branding has elevated our guest experience significantly.',
      rating: 5,
      avatar: 'RK',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Anita Patel',
      role: 'HR Director',
      company: 'TechCorp India',
      content: 'Perfect solution for our corporate events and daily office use. The ordering process is seamless, delivery is always punctual, and the team is incredibly responsive.',
      rating: 5,
      avatar: 'AP',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      name: 'Suresh Nayak',
      role: 'Event Coordinator',
      company: 'Odisha Convention Center',
      content: 'Outstanding service and premium product quality. The custom branding options are versatile and helped us create a lasting professional impression.',
      rating: 5,
      avatar: 'SN',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Meera Desai',
      role: 'Marketing Head',
      company: 'StartUp Hub Odisha',
      content: 'Innovative branding solution that perfectly aligns with our modern approach. The bottles are conversation starters at every event we host.',
      rating: 5,
      avatar: 'MD',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      name: 'Vikram Singh',
      role: 'Operations Manager',
      company: 'Royal Palace Hotel',
      content: 'The attention to detail and commitment to quality is unmatched. Our guests frequently compliment the branded water bottles in their rooms.',
      rating: 5,
      avatar: 'VS',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ]

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame
    let animationId

    const scroll = () => {
      scrollPosition += scrollSpeed
      
      // Reset when scrolled through one set of testimonials
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 50%, #F8FAFC 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-5" style={{ background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)', color: '#0EA5E9', border: '1px solid #BFDBFE' }}>
            <Star className="h-3.5 w-3.5 md:h-4 md:w-4 mr-2 fill-current" />
            Trusted by 500+ Clients
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-[1.1]" style={{ color: '#1E293B', letterSpacing: '-0.03em' }}>
            Don't Just Take
            <br />
            <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #60A5FA, #0EA5E9)' }}>Our Word For It</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl" style={{ color: '#64748B', lineHeight: '1.7' }}>
            Real stories from businesses transforming their brand presence
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect - more pronounced on mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10 pointer-events-none"></div>

          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-hidden pb-4 md:pb-6"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[380px] lg:w-[420px]"
              >
                <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-5 md:p-7 lg:p-8" 
                  style={{ 
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                    border: '1px solid #E2E8F0'
                  }}>
                  
                  {/* Quote icon background */}
                  <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 opacity-5">
                    <Quote className="h-24 w-24 md:h-32 md:w-32" style={{ color: '#0EA5E9' }} />
                  </div>

                  {/* Avatar and Info */}
                  <div className="flex items-start gap-3 mb-4 md:mb-5 relative z-10">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg ring-2 md:ring-3 ring-white`}>
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base md:text-lg mb-0.5 md:mb-1" style={{ color: '#1E293B' }}>{testimonial.name}</h4>
                      <p className="text-xs md:text-sm mb-1.5 md:mb-2" style={{ color: '#64748B' }}>{testimonial.role}</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 md:h-3.5 md:w-3.5 fill-current" style={{ color: '#FBBF24' }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-5 relative z-10" style={{ color: '#475569', lineHeight: '1.7' }}>
                    "{testimonial.content}"
                  </p>

                  {/* Company badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold relative z-10" 
                    style={{ background: 'linear-gradient(135deg, #F0F9FF, #E0F2FE)', color: '#0EA5E9' }}>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-current animate-pulse"></div>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-sm md:text-base mb-3 md:mb-4" style={{ color: '#64748B' }}>
            Join 500+ satisfied clients
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-base font-semibold transition-all active:scale-95 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)' }}
          >
            Start Your Order Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
