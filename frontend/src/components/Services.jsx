import React from 'react'
import { Heart, Building2, Briefcase, Users } from 'lucide-react'

const Services = () => {
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
      <div className="container-custom px-4">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-2xl md:rounded-3xl border hover:shadow-2xl transition-all duration-500 bg-white transform hover:-translate-y-2"
              style={{ borderColor: '#CBD5E1' }}
            >
              <div className="h-12 md:h-14 w-12 md:w-14 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md" style={{ background: 'linear-gradient(to bottom right, #DBEAFE, #60A5FA30)' }}>
                <service.icon className="h-6 md:h-7 w-6 md:w-7" style={{ color: '#60A5FA' }} />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3" style={{ color: '#1E293B' }}>olor: '#1E293B' }}>
                {service.title}
              </h3>
              
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-1.5 md:space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 bg-primary-600 rounded-full mr-2"></span>
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
