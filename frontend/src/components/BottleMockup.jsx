import React, { useState } from 'react'
import { Upload, X, Download, RefreshCw, Palette, Eye, FileText } from 'lucide-react'

const BottleMockup = () => {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const clearImage = () => {
    setUploadedImage(null)
  }

  return (
    <section id="mockup" className="py-16 md:py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #F0F4F8, #ffffff, #F0F4F8)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl" style={{ backgroundColor: '#60A5FA' }}></div>
        <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl" style={{ backgroundColor: '#0EA5E9' }}></div>
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6" style={{ color: '#1E293B' }}>
            Visualize Your
            <br />
            <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #60A5FA, #0EA5E9)' }}>Custom Label</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed" style={{ color: '#64748B' }}>
            Upload your design and see it come to life on our premium water bottle. Get an instant preview of how your brand will look with our interactive mockup tool.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Upload Section */}
          <div className="space-y-4 md:space-y-6">
            {/* Upload Box */}
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className="relative border-2 border-dashed rounded-xl md:rounded-2xl p-8 md:p-12 text-center transition-all duration-300 cursor-pointer group"
              style={{
                borderColor: isDragging ? '#0EA5E9' : '#CBD5E1',
                backgroundColor: isDragging ? '#F0F9FF' : '#F0F4F8',
                transform: isDragging ? 'scale(1.05)' : 'scale(1)',
                boxShadow: isDragging ? '0 10px 40px rgba(14, 165, 233, 0.2)' : 'none'
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="fileUpload"
              />
              
              <div className="pointer-events-none">
                <div className="inline-flex h-12 md:h-16 w-12 md:w-16 rounded-xl md:rounded-2xl items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #DBEAFE, #F0F4F8)' }}>
                  <Upload className="h-6 md:h-8 w-6 md:w-8" style={{ color: '#60A5FA' }} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#1E293B' }}>
                  {uploadedImage ? '✨ Design Uploaded!' : 'Upload Your Design'}
                </h3>
                <p className="mb-2 font-medium text-sm md:text-base" style={{ color: '#64748B' }}>
                  {uploadedImage ? 'Click to change or drag to replace' : 'Drag and drop or click to browse'}
                </p>
                <p className="text-sm" style={{ color: '#94A3B8' }}>
                  PNG, JPG, SVG up to 10MB
                </p>
              </div>
            </div>

            {/* Image Preview Card */}
            {uploadedImage && (
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border hover:shadow-xl transition-all" style={{ borderColor: '#CBD5E1' }}>
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <h4 className="font-semibold flex items-center gap-2 text-sm md:text-base" style={{ color: '#1E293B' }}>
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Preview Ready
                  </h4>
                  <button
                    onClick={clearImage}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <img
                  src={uploadedImage}
                  alt="Uploaded design"
                  className="w-full h-32 md:h-48 object-contain rounded-xl border"
                  style={{ background: 'linear-gradient(to bottom right, #F0F4F8, #ffffff)', borderColor: '#CBD5E1' }}
                />
                <div className="mt-3 md:mt-4 flex flex-col sm:flex-row gap-2 md:gap-3">
                  <button className="flex-1 text-white px-4 py-2.5 md:py-3 rounded-lg hover:shadow-lg transition-all text-xs md:text-sm font-semibold flex items-center justify-center gap-2 group" style={{ background: 'linear-gradient(to right, #0EA5E9, #06B6D4)', boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)' }}>
                    <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Download
                  </button>
                  <label htmlFor="fileUpload" className="flex-1 px-4 py-3 rounded-lg transition-all text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer" style={{ backgroundColor: '#F0F4F8', color: '#475569' }}>
                    <RefreshCw className="h-4 w-4" />
                    Change
                  </label>
                </div>
              </div>
            )}

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="rounded-lg md:rounded-xl p-3 md:p-4 border" style={{ background: 'linear-gradient(to bottom right, #F0F4F8, #E2E8F0)', borderColor: '#CBD5E1' }}>
                <div className="text-xs md:text-sm font-semibold" style={{ color: '#475569' }}>500ml</div>
                <div className="text-[10px] md:text-xs" style={{ color: '#64748B' }}>Standard Size</div>
              </div>
              <div className="rounded-lg md:rounded-xl p-3 md:p-4 border" style={{ background: 'linear-gradient(to bottom right, #DBEAFE, #BFDBFE)', borderColor: '#60A5FA' }}>
                <div className="text-xs md:text-sm font-semibold" style={{ color: '#0EA5E9' }}>Premium</div>
                <div className="text-[10px] md:text-xs" style={{ color: '#0284C7' }}>PET Bottle</div>
              </div>
            </div>
          </div>

          {/* Bottle Preview */}
          <div className="relative flex items-center justify-center py-6 md:py-8">
            {/* Bottle Container */}
            <div className="relative w-full max-w-xs md:max-w-sm">
              {/* Soft background glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 md:w-72 h-[350px] md:h-[500px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(96, 165, 250, 0.12), rgba(240, 244, 248, 0.15))' }}></div>
              </div>

              {/* Main Bottle Structure */}
              <div className="relative mx-auto" style={{ width: '150px', height: '420px' }}>
                
                {/* Bottle Cap - Dark Blue/Black */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30" style={{ width: '65px' }}>
                  {/* Cap dome top */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-t-xl h-8 shadow-xl">
                    <div className="absolute top-1 left-2 w-3 h-3 bg-white/20 rounded-full blur-sm"></div>
                  </div>
                  {/* Cap threading */}
                  <div className="bg-gradient-to-b from-gray-800 to-gray-700 h-12 relative overflow-hidden">
                    <div className="absolute w-full h-px bg-gray-600 top-2"></div>
                    <div className="absolute w-full h-px bg-gray-600 top-4"></div>
                    <div className="absolute w-full h-px bg-gray-600 top-6"></div>
                    <div className="absolute w-full h-px bg-gray-600 top-8"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white/10 rounded-full blur-sm"></div>
                  </div>
                  {/* Cap seal ring */}
                  <div className="bg-gradient-to-b from-blue-600 to-blue-700 h-1"></div>
                </div>

                {/* Bottle Neck */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-blue-50/90 via-white/95 to-blue-100/90 shadow-lg" 
                     style={{ width: '65px', height: '45px', borderRadius: '0 0 8px 8px' }}>
                  <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white/50 to-transparent"></div>
                </div>

                {/* Main Bottle Body - Realistic PET bottle */}
                <div className="absolute top-[65px] left-1/2 transform -translate-x-1/2 overflow-visible" 
                     style={{ width: '200px', height: '495px' }}>
                  
                  {/* Shoulder (top curve) */}
                  <div className="absolute top-0 w-full h-24 bg-gradient-to-br from-blue-50/80 via-white/90 to-blue-100/80 overflow-hidden"
                       style={{ borderRadius: '100px 100px 0 0', clipPath: 'polygon(32.5% 0, 67.5% 0, 100% 100%, 0% 100%)' }}>
                    <div className="absolute inset-y-0 left-2 w-12 bg-gradient-to-r from-white/60 to-transparent"></div>
                  </div>

                  {/* Main cylinder body */}
                  <div className="absolute top-12 w-full h-[380px] bg-gradient-to-br from-blue-50/70 via-white/85 to-blue-100/75 shadow-2xl overflow-hidden">
                    
                    {/* Left highlight - strong shine */}
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/70 via-white/40 to-transparent"></div>
                    
                    {/* Left edge highlight */}
                    <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-white/90 to-transparent"></div>
                    
                    {/* Right shadow */}
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-400/15 via-gray-300/8 to-transparent"></div>

                    {/* Center vertical highlight */}
                    <div className="absolute inset-y-0 left-12 w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                    {/* Label Area */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-xl overflow-hidden" 
                         style={{ top: '60px', width: '170px', height: '200px', borderRadius: '6px' }}>
                      
                      {uploadedImage ? (
                        <div className="relative w-full h-full">
                          <img
                            src={uploadedImage}
                            alt="Custom bottle label"
                            className="w-full h-full object-cover"
                          />
                          {/* Label curve effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-black/10 pointer-events-none"></div>
                          <div className="absolute inset-0 pointer-events-none" style={{ 
                            boxShadow: 'inset 4px 0 10px rgba(0,0,0,0.08), inset -4px 0 10px rgba(0,0,0,0.08)' 
                          }}></div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full border-2 border-dashed" style={{ background: 'linear-gradient(to bottom right, #F0F4F8, #E2E8F0)', borderColor: '#0EA5E9' }}>
                          <div className="text-center p-4">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #DBEAFE, #60A5FA30)' }}>
                              <FileText className="h-8 w-8" style={{ color: '#60A5FA' }} />
                            </div>
                            <p className="text-sm font-bold" style={{ color: '#1E293B' }}>Your label</p>
                            <p className="text-xs mt-1" style={{ color: '#64748B' }}>Upload a design</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Water fill effect */}
                    <div className="absolute bottom-0 w-full h-28 bg-gradient-to-t from-blue-400/50 via-blue-300/35 to-transparent overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/25 via-transparent to-blue-400/25"></div>
                      {/* Water surface */}
                      <div className="absolute top-0 w-full h-2 bg-gradient-to-b from-blue-200/60 to-transparent"></div>
                      <div className="absolute top-1 left-8 w-16 h-1 bg-white/40 rounded-full blur-sm"></div>
                      {/* Bubbles */}
                      <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
                      <div className="absolute bottom-8 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                    </div>

                    {/* Animated shine sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full animate-shine pointer-events-none"></div>
                  </div>

                  {/* Bottom base */}
                  <div className="absolute bottom-0 w-full h-24 bg-gradient-to-br from-blue-100/60 via-white/80 to-blue-200/70 overflow-hidden"
                       style={{ borderRadius: '0 0 80px 80px' }}>
                    <div className="absolute inset-y-0 left-2 w-10 bg-gradient-to-r from-white/50 to-transparent"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gradient-to-b from-gray-400/20 to-transparent rounded-full"></div>
                  </div>
                </div>

                {/* Ground shadow */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gradient-radial from-black/20 via-black/10 to-transparent rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="relative group">
            <div className="absolute inset-0 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, rgba(96, 165, 250, 0.15), rgba(14, 165, 233, 0.15))' }}></div>
            <div className="relative rounded-xl md:rounded-2xl p-6 md:p-8 border transition-all" style={{ background: 'linear-gradient(to bottom right, #ffffff, #F0F4F8)', borderColor: '#CBD5E1' }}>
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #DBEAFE, #F0F4F8)' }}>
                <Palette className="h-5 md:h-6 w-5 md:w-6" style={{ color: '#60A5FA' }} />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2" style={{ color: '#1E293B' }}>Custom Design</h3>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#64748B' }}>
                Upload your unique design and see exactly how it will appear on your custom water bottles.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, rgba(96, 165, 250, 0.15), rgba(14, 165, 233, 0.15))' }}></div>
            <div className="relative rounded-2xl p-8 border transition-all" style={{ background: 'linear-gradient(to bottom right, #ffffff, #F0F4F8)', borderColor: '#CBD5E1' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #DBEAFE, #F0F4F8)' }}>
                <Eye className="h-6 w-6" style={{ color: '#60A5FA' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1E293B' }}>Instant Preview</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                Get real-time visualization of your label on a 500ml premium bottle before placing your order.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, rgba(96, 165, 250, 0.15), rgba(14, 165, 233, 0.15))' }}></div>
            <div className="relative rounded-2xl p-8 border transition-all" style={{ background: 'linear-gradient(to bottom right, #ffffff, #F0F4F8)', borderColor: '#CBD5E1' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #DBEAFE, #F0F4F8)' }}>
                <Download className="h-6 w-6" style={{ color: '#60A5FA' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1E293B' }}>Easy Download</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                Download high-resolution previews to share with your team or print for approval.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          to {
            transform: translateX(200%) skewX(12deg);
          }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </section>
  )
}

export default BottleMockup
