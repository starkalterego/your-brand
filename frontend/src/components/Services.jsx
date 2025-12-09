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
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4" style={{ backgroundColor: '#F0F4F8', color: '#1E293B' }}>
            Our Services
          </div>
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: '#1E293B' }}>
            Tailored Solutions for
            <span style={{ color: '#60A5FA' }}> Every Occasion</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed" style={{ color: '#64748B' }}>
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
              className="group flex-shrink-0 w-[280px] sm:w-[320px] md:w-auto snap-center p-5 md:p-8 rounded-xl md:rounded-3xl border hover:shadow-2xl transition-all duration-500 bg-white transform hover:-translate-y-2"
              style={{ 
                borderColor: '#CBD5E1',
                opacity: 0,
                transform: 'translateY(30px) scale(0.95)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              <div className="h-11 md:h-14 w-11 md:w-14 rounded-lg md:rounded-xl flex items-center justify-center mb-2.5 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md" style={{ background: 'linear-gradient(to bottom right, #DBEAFE, #60A5FA30)' }}>
                <service.icon className="h-5 md:h-7 w-5 md:w-7" style={{ color: '#60A5FA' }} />
              </div>
              
              <h3 className="text-base md:text-xl font-semibold mb-1.5 md:mb-3" style={{ color: '#1E293B' }}>
                {service.title}
              </h3>
              
              <p className="text-xs md:text-base text-gray-600 mb-2.5 md:mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-1 md:space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-[11px] md:text-sm text-gray-600">
                    <span className="h-1 w-1 md:h-1.5 md:w-1.5 bg-primary-600 rounded-full mr-1.5 md:mr-2 flex-shrink-0"></span>
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
