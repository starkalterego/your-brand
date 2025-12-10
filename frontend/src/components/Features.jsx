import React, { useEffect, useRef, useState } from 'react'
import { Shield, Zap, Palette, Recycle } from 'lucide-react'

const Features = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const ctaRef = useRef(null)
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
          
          // Stagger animation for feature cards
          cardsRef.current.forEach((card, index) => {
            if (card) {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateY(0) scale(1)'
              }, index * 120)
            }
          })

          // Animate CTA section
          if (ctaRef.current) {
            setTimeout(() => {
              ctaRef.current.style.opacity = '1'
              ctaRef.current.style.transform = 'translateY(0)'
            }, 500)
          }
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
            
            if (scrollLeft >= scrollWidth - clientWidth - 10) {
              scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
            } else {
              scrollContainerRef.current.scrollBy({ left: 250, behavior: 'smooth' })
            }
          }
        }, 2500)
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
    setTimeout(() => setIsAutoScrolling(true), 5000)
  }

  const features = [
    {
      icon: Shield,
      title: 'FSSAI Certified',
      description: 'Fully compliant with Indian food safety standards and regulations for packaged drinking water.'
    },
    {
      icon: Zap,
      title: 'Quick Turnaround',
      description: 'Local production in Bhubaneswar ensures rapid delivery for urgent event requirements.'
    },
    {
      icon: Palette,
      title: 'Design Support',
      description: 'Our in-house team helps create stunning label designs that perfectly represent your brand.'
    },
    {
      icon: Recycle,
      title: 'Eco-Responsible',
      description: '100% recyclable PET bottles with EPR compliance, future-proof against plastic regulations.'
    }
  ]

  return (
    <section id="features" className="py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #F0F4F8, #ffffff, #F0F4F8)' }}>
      <div className="container-custom px-4" ref={sectionRef}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-5" style={{ backgroundColor: '#EFF6FF', color: '#0EA5E9', border: '1px solid #DBEAFE' }}>
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-[1.1]" style={{ color: '#1E293B', letterSpacing: '-0.02em' }}>
            Why Choose <span style={{ color: '#60A5FA' }}>AquaDrops?</span>
          </h2>
          <p className="text-base md:text-xl leading-relaxed" style={{ color: '#64748B', lineHeight: '1.7' }}>
            Combining quality, compliance, and creativity to deliver premium branded water solutions.
          </p>
        </div>

        {/* Features Grid - Horizontal Scroll on Mobile */}
        <div 
          ref={scrollContainerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => window.innerWidth < 768 && setIsAutoScrolling(false)}
          onMouseLeave={() => window.innerWidth < 768 && setIsAutoScrolling(true)}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="flex-shrink-0 w-[220px] sm:w-[240px] md:w-auto snap-center text-center group cursor-pointer p-5 md:p-6 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1"
              style={{
                opacity: 0,
                transform: 'translateY(30px) scale(0.9)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                border: '1px solid #E2E8F0'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)'}
            >
              <div className="inline-flex h-14 md:h-16 w-14 md:w-16 rounded-xl items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)' }}>
                <feature.icon className="h-7 md:h-8 w-7 md:w-8" style={{ color: '#0EA5E9' }} />
              </div>
              
              <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3" style={{ color: '#1E293B' }}>
                {feature.title}
              </h3>
              
              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#64748B', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className="mt-12 md:mt-16 bg-gradient-to-r from-primary-600 via-primary-700 to-blue-600 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
          style={{
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 md:w-40 h-32 md:h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 md:w-60 h-40 md:h-60 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Ready to Brand Your Hydration?
            </h3>
            <p className="text-primary-100 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
              Get started with a free quote and design mockup. Minimum order quantities apply for bulk pricing.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-primary-600 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-50 hover:scale-105 transition-all font-semibold shadow-2xl text-sm md:text-base"
            >
              Request Free Mockup
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
