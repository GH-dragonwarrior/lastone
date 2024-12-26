'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  // State Management
  const [activeSection, setActiveSection] = useState('hero')
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState<any>(null)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activePartner, setActivePartner] = useState(0)

  const handleFileChange = (e: any) => {
    setFile(e.target.files?.[0]);
    // console.log(file);
    };
  // Content Data
  const mainSections = [
    { id: 'industries', label: 'Industries' },
    { id: 'services', label: 'Services' },
    { id: 'partners', label: 'Partners' }
  ]

  const industries = [
    {
      name: 'Advanced Air Mobility',
      description: 'Supporting the next generation of aviation with high-performance, lightweight components'
    },
    {
      name: 'Robotics',
      description: 'Precision parts for autonomous systems and robotic applications'
    },
    {
      name: 'Medical Devices',
      description: 'FDA-compliant manufacturing for medical device innovation'
    },
    {
      name: 'Electric Ground Mobility',
      description: 'Advancing electric vehicle technology with rapid manufacturing'
    },
    {
      name: 'Industrial and Energy',
      description: 'Robust solutions for industrial equipment and energy systems'
    }
  ]

  const services = [
    {
      name: 'Growing',
      description: 'Advanced additive manufacturing for prototypes through production',
      features: [
        'Multiple materials available',
        'Scalable from prototype to production',
        'Industrial-grade quality'
      ]
    },
    {
      name: 'Subtracting',
      description: 'Precision CNC machining for metals, polymers, and composites',
      features: [
        'High precision machining',
        'Wide material compatibility',
        'Complex geometries'
      ]
    },
    {
      name: 'Forming',
      description: 'Rapid tooling and forming processes including urethane casting and injection molding',
      features: [
        'Urethane casting',
        'Vacuum casting',
        'Rapid tooling'
      ]
    }
  ]

  const partners = Array(5).fill(null).map((_, i) => ({
    name: `Partner ${i + 1}`,
    logo: `/api/placeholder/200/80`
  }))

  // Scroll Handling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)

      // Update active section based on scroll position
      const current = mainSections.find(section => {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current.id)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // File Upload Handlers
  const handleDrag = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true)
    else if (e.type === 'dragleave') setDragActive(false)
  }

  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files?.[0]) setFile(e.dataTransfer.files[0])
  }

  const scrollToSection = (sectionId: string) => {
    // setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-16">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Manufacturing
              </span>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {mainSections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === section.id ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                  Get Started
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? '×' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-b border-gray-100 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 max-h-64' : 'opacity-0 max-h-0'
        } overflow-hidden`}>
          <div className="px-4 py-2 space-y-1">
            {mainSections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
                Manufacturing at{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Software Speed
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Get instant quotes, order parts, and manage production—all in one place
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  ['40-60%', 'Cost Reduction'],
                  ['5x', 'Faster Time'],
                  ['3x', 'More Iterations']
                ].map(([value, label]) => (
                  <div key={label} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <p className="text-2xl sm:text-3xl font-bold text-blue-600">{value}</p>
                    <p className="text-sm text-gray-600">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* File Upload */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white rounded-lg shadow-sm p-8">
                <div 
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                    dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  } ${file ? 'border-green-500 bg-green-50' : ''}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept=".stl,.step,.stp"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label 
                    htmlFor="file-upload"
                    className="cursor-pointer inline-flex flex-col items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      ↑
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {file ? file.name : 'Drop your CAD file here'}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Supports STL, STEP files
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Industries We Serve</h2>
            <p className="mt-4 text-xl text-gray-600">
              Powering the future of hardware development
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                <p className="mt-2 text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              End-to-end manufacturing solutions
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Trusted By</h2>
            <p className="mt-4 text-xl text-gray-600">
              Industry leaders using our platform
            </p>
          </div>

          <div className="mt-16 flex justify-center items-center gap-8 flex-wrap">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`transition-all duration-500 ${
                  index === activePartner ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}