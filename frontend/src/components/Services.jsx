import React, { useEffect, useRef, useState } from 'react'
import { Heart, Building2, Briefcase, Users } from 'lucide-react'

const Services = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const scrollContainerRef = useRef(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoScrollInterval = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          
          // Stagger animation for cards
          cardsRef.current.forEach((card, index) => {
            if (card) {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateY(0) scale(1)'
              }, index * 100)
            }
          })
        }
      })
    }, observerOptions)

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  // Auto-scroll for mobile
  useEffect(() => {
    const startAutoScroll = () => {
      if (window.innerWidth < 768 && scrollContainerRef.current && isAutoScrolling) {
        autoScrollInterval.current = setInterval(() => {
          if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            
            // If reached end, scroll back to start
            if (scrollLeft >= scrollWidth - clientWidth - 10) {
              scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
            } else {
              scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
            }
          }
        }, 3000) // Auto-scroll every 3 seconds
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
    setTimeout(() => setIsAutoScrolling(true), 5000) // Resume after 5 seconds of inactivity
  }

  const services = [
    {
      icon: Heart,
      title: 'Weddings & Events',
      description: 'Custom bottles with couple names, event themes, and personalized messages for your special day.',
      features: ['Custom label design', 'Multiple sizes', 'Quick turnaround']
    },
    {
      icon: Building2,
      title: 'Hotels & Resorts',
      description: 'Branded water bottles for rooms, dining, and guest services to enhance your hospitality brand.',
      features: ['Room service ready', 'Premium packaging', 'Bulk discounts']
    },
    {
      icon: Briefcase,
      title: 'Corporate Offices',
      description: 'Professional branded bottles for meetings, conferences, and daily office use with your logo.',
      features: ['Logo placement', 'Corporate gifting', 'Regular supply']
    },
    {
      icon: Users,
      title: 'Event Planners',
      description: 'Perfect for conferences, exhibitions, product launches, and large-scale events across Odisha.',
      features: ['White-label options', 'Large volumes', 'On-time delivery']
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24" style={{ background: 'linear-gradient(to bottom, #ffffff, #F0F4F8, #ffffff)' }}>
      <div className="container-custom px-4" ref={sectionRef}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-5" style={{ backgroundColor: '#EFF6FF', color: '#0EA5E9', border: '1px solid #DBEAFE' }}>
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-[1.1]" style={{ color: '#1E293B', letterSpacing: '-0.02em' }}>
            Tailored Solutions for
            <span style={{ color: '#60A5FA' }}> Every Occasion</span>
          </h2>
          <p className="text-base md:text-xl leading-relaxed" style={{ color: '#64748B', lineHeight: '1.7' }}>
            From intimate weddings to large corporate events, we provide custom-branded water solutions that make an impact.
          </p>
        </div>

        {/* Services Grid - Horizontal Scroll on Mobile */}
        <div 
          ref={scrollContainerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => window.innerWidth < 768 && setIsAutoScrolling(false)}
          onMouseLeave={() => window.innerWidth < 768 && setIsAutoScrolling(true)}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group flex-shrink-0 w-[280px] sm:w-[320px] md:w-auto snap-center p-6 md:p-8 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1"
              style={{ 
                borderColor: '#E2E8F0',
                opacity: 0,
                transform: 'translateY(30px) scale(0.95)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)'}
            >
              <div className="h-12 md:h-14 w-12 md:w-14 rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)' }}>
                <service.icon className="h-6 md:h-7 w-6 md:w-7" style={{ color: '#0EA5E9' }} />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: '#1E293B' }}>
                {service.title}
              </h3>
              
              <p className="text-sm md:text-base mb-4 md:mb-5 leading-relaxed" style={{ color: '#64748B', lineHeight: '1.6' }}>
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs md:text-sm" style={{ color: '#64748B' }}>
                    <span className="h-1.5 w-1.5 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: '#60A5FA' }}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
