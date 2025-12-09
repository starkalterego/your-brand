import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  const leftContentRef = useRef(null)
  const rightContentRef = useRef(null)
  const galleryScrollRef = useRef(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoScrollInterval = useRef(null)

  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    if (leftContentRef.current) observer.observe(leftContentRef.current)
    if (rightContentRef.current) observer.observe(rightContentRef.current)

    // Auto-scroll for gallery on mobile
    const startAutoScroll = () => {
      if (window.innerWidth < 768 && isAutoScrolling) {
        autoScrollInterval.current = setInterval(() => {
          if (galleryScrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = galleryScrollRef.current
            
            if (scrollLeft >= scrollWidth - clientWidth - 10) {
              galleryScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
            } else {
              galleryScrollRef.current.scrollBy({ left: galleryScrollRef.current.clientWidth * 0.85, behavior: 'smooth' })
            }
          }
        }, 3500) // Auto-scroll every 3.5 seconds
      }
    }

    startAutoScroll()

    return () => {
      if (leftContentRef.current) observer.unobserve(leftContentRef.current)
      if (rightContentRef.current) observer.unobserve(rightContentRef.current)
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

  return (
    <section className="relative pt-16 pb-10 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 overflow-hidden" style={{ backgroundColor: '#F0F4F8' }}>
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl animate-blob" style={{ backgroundColor: '#60A5FA20' }}></div>
        <div className="absolute top-40 -right-20 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl animate-blob animation-delay-2000" style={{ backgroundColor: '#0EA5E925' }}></div>
        <div className="absolute -bottom-20 left-1/2 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl animate-blob animation-delay-4000" style={{ backgroundColor: '#CBD5E120' }}></div>
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 opacity-0 translate-x-[-50px]" ref={leftContentRef} style={{ transition: 'all 0.8s ease-out' }}>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-3 md:mb-4" style={{ color: '#1E293B' }}>
                Your Brand,
                <br />
                <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #60A5FA, #0EA5E9)' }}>Every Drop</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: '#475569' }}>
                Elevate your events, hotels, and corporate spaces with custom-branded bottled water. 
                Perfect for weddings, conferences, and hospitality services across Odisha.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all transform hover:scale-105 active:scale-95 hover:shadow-2xl font-semibold shadow-lg text-sm md:text-base"
                style={{ background: 'linear-gradient(to right, #0EA5E9, #06B6D4)', boxShadow: '0 10px 30px rgba(14, 165, 233, 0.3)' }}
              >
                Start Your Order
                <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center bg-white border-2 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-slate-50 active:bg-slate-100 transition-all font-semibold shadow-md hover:shadow-lg text-sm md:text-base"
                style={{ borderColor: '#CBD5E1', color: '#1E293B' }}
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-6 pt-4 md:pt-8 border-t" style={{ borderColor: '#CBD5E1' }}>
              <div>
                <div className="text-lg md:text-3xl font-bold" style={{ color: '#1E293B' }}>500+</div>
                <div className="text-[10px] md:text-sm font-medium leading-tight" style={{ color: '#64748B' }}>Happy Clients</div>
              </div>
              <div>
                <div className="text-lg md:text-3xl font-bold" style={{ color: '#1E293B' }}>24h</div>
                <div className="text-[10px] md:text-sm font-medium leading-tight" style={{ color: '#64748B' }}>Quick Delivery</div>
              </div>
              <div>
                <div className="text-lg md:text-3xl font-bold" style={{ color: '#1E293B' }}>100%</div>
                <div className="text-[10px] md:text-sm font-medium leading-tight" style={{ color: '#64748B' }}>FSSAI Certified</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Water Bottle Showcase */}
          <div className="relative h-[400px] md:h-[650px] flex items-center justify-center opacity-0 translate-x-[50px]" ref={rightContentRef} style={{ transition: 'all 0.8s ease-out 0.2s' }}>
            {/* Soft background circle matching page theme */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15), rgba(240, 244, 248, 0.3))' }}></div>
            </div>
            
            {/* Main bottle image with seamless blending */}
            <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
              <div className="relative group">
                {/* Subtle circular glow that matches website palette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 md:w-80 h-48 md:h-80 rounded-full blur-2xl opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2), rgba(96, 165, 250, 0.15))' }}></div>
                </div>
                
                {/* Image container with seamless integration */}
                <div className="relative transform transition-all duration-500 group-hover:scale-105">
                  <img 
                    src="/images/hero-bottle.png"
                    alt="Premium AquaDrops Water Bottle Mockup"
                    className="w-auto h-64 md:h-96 object-contain drop-shadow-2xl group-hover:drop-shadow-3xl transition-all duration-500 mix-blend-multiply"
                    style={{
                      filter: 'contrast(1.05) saturate(1.1) brightness(1.02) drop-shadow(0 20px 40px rgba(14, 165, 233, 0.15))'
                    }}
                  />
                </div>

                {/* Reflection effect for realism */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-3 rounded-full blur-sm" style={{ background: 'linear-gradient(to right, transparent, rgba(203, 213, 225, 0.3), transparent)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Section Below */}
        <div className="mt-8 md:mt-20 pt-8 md:pt-12">
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-3" style={{ backgroundColor: '#DBEAFE', color: '#0EA5E9' }}>
              Our Portfolio
            </div>
            <h3 className="text-xl md:text-3xl font-bold mb-2" style={{ color: '#1E293B' }}>
              See Our Work in <span style={{ color: '#60A5FA' }}>Action</span>
            </h3>
            <p className="text-xs md:text-base" style={{ color: '#64748B' }}>
              Trusted by leading businesses across Odisha
            </p>
          </div>
          
          <div 
            ref={galleryScrollRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => window.innerWidth < 768 && setIsAutoScrolling(false)}
            onMouseLeave={() => window.innerWidth < 768 && setIsAutoScrolling(true)}
            className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0"
          >
            {/* Wedding Events */}
            <div className="group relative flex-shrink-0 w-[280px] md:w-auto snap-center rounded-xl md:rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" style={{ borderColor: '#E2E8F0' }}>
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img 
                  src="/images/wedding.png"
                  alt="Wedding Events"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm" style={{ backgroundColor: 'rgba(96, 165, 250, 0.9)', color: 'white' }}>
                  Weddings
                </div>
              </div>
              <div className="bg-white p-4 md:p-5">
                <h4 className="font-bold text-sm md:text-lg mb-1" style={{ color: '#1E293B' }}>Wedding Celebrations</h4>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#64748B' }}>
                  Custom branded water bottles that add a personal touch to your special day
                </p>
              </div>
            </div>

            {/* Corporate Events */}
            <div className="group relative flex-shrink-0 w-[280px] md:w-auto snap-center rounded-xl md:rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" style={{ borderColor: '#E2E8F0' }}>
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img 
                  src="/images/meetings.png"
                  alt="Corporate Events"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm" style={{ backgroundColor: 'rgba(14, 165, 233, 0.9)', color: 'white' }}>
                  Corporate
                </div>
              </div>
              <div className="bg-white p-4 md:p-5">
                <h4 className="font-bold text-sm md:text-lg mb-1" style={{ color: '#1E293B' }}>Corporate Events</h4>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#64748B' }}>
                  Professional branded solutions for meetings, conferences and corporate gatherings
                </p>
              </div>
            </div>

            {/* Hotel Hospitality */}
            <div className="group relative flex-shrink-0 w-[280px] md:w-auto snap-center rounded-xl md:rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" style={{ borderColor: '#E2E8F0' }}>
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img 
                  src="/images/hotels.png"
                  alt="Hotel Hospitality"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm" style={{ backgroundColor: 'rgba(96, 165, 250, 0.9)', color: 'white' }}>
                  Hospitality
                </div>
              </div>
              <div className="bg-white p-4 md:p-5">
                <h4 className="font-bold text-sm md:text-lg mb-1" style={{ color: '#1E293B' }}>Hotel & Resorts</h4>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#64748B' }}>
                  Elevate guest experience with premium branded water for your hospitality business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
