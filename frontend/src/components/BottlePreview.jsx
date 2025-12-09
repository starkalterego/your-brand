import React from 'react'
import { Droplets } from 'lucide-react'

const BottlePreview = () => {

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Professional Water Bottle Mockup */}
      <div className="relative h-[600px] bg-gradient-to-br from-slate-50 via-white to-primary-50 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center p-8">
        
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/30 via-primary-50/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/20 via-white/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* SVG Water Bottle - Professional Design */}
        <svg 
          viewBox="0 0 250 700" 
          className="w-40 h-full drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.2))', maxHeight: '450px' }}
        >
          {/* Bottle cap - metallic teal */}
          <g id="cap">
            {/* Cap top */}
            <ellipse cx="125" cy="40" rx="22" ry="10" fill="#0d9488" />
            {/* Cap body */}
            <rect x="105" y="40" width="40" height="28" fill="#14b8a6" />
            {/* Cap grooves */}
            {[...Array(12)].map((_, i) => (
              <line key={i} x1={108 + i * 3} y1="40" x2={108 + i * 3} y2="68" stroke="#0d9488" strokeWidth="0.8" opacity="0.5" />
            ))}
            {/* Cap highlight */}
            <ellipse cx="115" cy="45" rx="8" ry="12" fill="white" opacity="0.5" />
            {/* Cap rim */}
            <ellipse cx="125" cy="68" rx="22" ry="8" fill="#0d9488" opacity="0.8" />
          </g>

          {/* Bottle neck - tapered transparent */}
          <g id="neck">
            <path d="M 110 68 L 100 110 L 150 110 L 140 68 Z" fill="url(#neckGradient)" stroke="#e0e7ff" strokeWidth="1" />
            {/* Neck shine left */}
            <path d="M 112 68 L 103 110 L 108 110 L 118 68 Z" fill="white" opacity="0.4" />
            {/* Neck shine right */}
            <path d="M 138 68 L 147 110 L 142 110 L 132 68 Z" fill="white" opacity="0.15" />
          </g>

          {/* Main bottle body */}
          <g id="body">
            {/* Bottle shape - curved sides */}
            <path d="M 100 110 Q 85 140 80 180 Q 75 250 80 320 Q 85 380 95 420 Q 105 450 125 455 Q 145 450 155 420 Q 165 380 170 320 Q 175 250 170 180 Q 165 140 150 110 Z" 
                  fill="url(#bottleGradient)" 
                  stroke="#bfdbfe" 
                  strokeWidth="1.5" />
            
            {/* Water fill inside */}
            <path d="M 85 220 Q 82 260 82 310 Q 85 360 92 410 Q 100 440 125 443 Q 150 440 158 410 Q 165 360 168 310 Q 168 260 165 220 Z" 
                  fill="url(#waterGradient)" 
                  opacity="0.6" />
            
            {/* Left side main highlight - creates glass effect */}
            <ellipse cx="95" cy="200" rx="12" ry="100" fill="white" opacity="0.45" />
            
            {/* Right side subtle highlight */}
            <ellipse cx="155" cy="250" rx="8" ry="80" fill="white" opacity="0.12" />
            
            {/* Bottom water line effect */}
            <ellipse cx="125" cy="220" rx="35" ry="8" fill="url(#waterLineGradient)" opacity="0.4" />
          </g>

          {/* Label - Professional white label with AquaDrops */}
          <g id="label">
            {/* Label background */}
            <rect x="95" y="200" width="60" height="140" rx="3" fill="white" opacity="0.97" stroke="#d1d5db" strokeWidth="1.5" />
            
            {/* Decorative top accent line */}
            <rect x="95" y="200" width="60" height="3" fill="url(#accentGradient)" rx="3" />
            
            {/* Logo - Droplet circle */}
            <circle cx="125" cy="225" r="10" fill="url(#logoCircleGradient)" stroke="#0d9488" strokeWidth="0.5" />
            <path d="M 125 218 Q 121 223 125 230 Q 129 223 125 218" fill="white" opacity="0.8" />
            
            {/* Brand text - AQUABRAND */}
            <text x="125" y="255" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="800" textAnchor="middle" fill="#0d9488" letterSpacing="0.8">
              AQUABRAND
            </text>
            
            {/* Tagline */}
            <text x="125" y="275" fontFamily="Inter, Arial, sans-serif" fontSize="7" fontWeight="600" textAnchor="middle" fill="#64748b" letterSpacing="0.5">
              PREMIUM WATER
            </text>
            
            {/* Decorative dots */}
            <circle cx="118" cy="290" r="1.5" fill="#14b8a6" />
            <circle cx="125" cy="290" r="1.5" fill="#0d9488" />
            <circle cx="132" cy="290" r="1.5" fill="#14b8a6" />
            
            {/* Bottom decorative line */}
            <line x1="100" y1="305" x2="150" y2="305" stroke="url(#accentGradient)" strokeWidth="1.5" />
            
            {/* Text below line */}
            <text x="125" y="320" fontFamily="Inter, Arial, sans-serif" fontSize="6" textAnchor="middle" fill="#94a3b8" fontWeight="500">
              Pure • Fresh • Premium
            </text>
            
            {/* Label edge highlight */}
            <rect x="95" y="200" width="60" height="140" rx="3" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
          </g>

          {/* Bottom base curve */}
          <g id="base">
            {/* Base shine - ellipse for depth */}
            <ellipse cx="125" cy="460" rx="18" ry="6" fill="white" opacity="0.25" />
          </g>

          {/* Gradients */}
          <defs>
            <linearGradient id="neckGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.6" />
              <stop offset="20%" stopColor="#e0f2fe" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.98" />
              <stop offset="80%" stopColor="#e0f2fe" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.5" />
            </linearGradient>
            
            <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.25" />
              <stop offset="8%" stopColor="#bae6fd" stopOpacity="0.4" />
              <stop offset="15%" stopColor="#e0f2fe" stopOpacity="0.6" />
              <stop offset="22%" stopColor="#ffffff" stopOpacity="0.98" />
              <stop offset="50%" stopColor="#fafbfc" stopOpacity="0.99" />
              <stop offset="78%" stopColor="#ffffff" stopOpacity="0.97" />
              <stop offset="85%" stopColor="#e0f2fe" stopOpacity="0.65" />
              <stop offset="92%" stopColor="#bae6fd" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.28" />
            </linearGradient>
            
            <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#0891b2" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0.32" />
            </linearGradient>
            
            <linearGradient id="waterLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            
            <radialGradient id="logoCircleGradient" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0d9488" />
            </radialGradient>
            
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Info Section */}
      <div className="mt-8 text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Droplets className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-bold text-gray-900">Professional Water Bottle</h3>
        </div>
        <p className="text-sm text-gray-600">
          Custom branded water bottles for your business, perfect for weddings, hotels, corporate events, and more.
        </p>
        <div className="pt-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-600">500ml</p>
            <p className="text-xs text-gray-500">Standard Size</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-600">∞</p>
            <p className="text-xs text-gray-500">Custom Branding</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-600">Fast</p>
            <p className="text-xs text-gray-500">Quick Delivery</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottlePreview
