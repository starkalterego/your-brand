import React from 'react'
import { Shield, Zap, Palette, Recycle } from 'lucide-react'

const Features = () => {
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
      <div className="container-custom px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4" style={{ backgroundColor: '#F0F4F8', color: '#1E293B' }}>
            Why Choose Us
          </div>
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: '#1E293B' }}>
            Why Choose <span style={{ color: '#60A5FA' }}>AquaBrand?</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed" style={{ color: '#64748B' }}>
            Combining quality, compliance, and creativity to deliver premium branded water solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="inline-flex h-14 md:h-16 w-14 md:w-16 rounded-xl md:rounded-2xl shadow-lg items-center justify-center mb-4 md:mb-6 group-hover:scale-125 group-hover:shadow-2xl transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, #ffffff, #F0F4F8)', boxShadow: '0 10px 30px rgba(96, 165, 250, 0.15)' }}>
                <feature.icon className="h-7 md:h-8 w-7 md:w-8 group-hover:scale-110 transition-transform" style={{ color: '#60A5FA' }} />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3" style={{ color: '#1E293B' }}>
                {feature.title}
              </h3>
              
              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#64748B' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary-600 via-primary-700 to-blue-600 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
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
