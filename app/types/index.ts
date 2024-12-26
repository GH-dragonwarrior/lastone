// Shared Types
export interface NavigationItem {
  id: string
  label: string
  href: string
}

// Form Types
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  company?: string
  message: string
}

// Material Types
export interface MaterialProperties {
  strength: number
  temperature: number
  chemical: number
  cost: number
  time: number
}

export interface Material {
  id: string
  name: string
  type: 'metal' | 'plastic' | 'composite'
  category: 'standard' | 'engineering' | 'high-performance'
  properties: MaterialProperties
  features: string[]
  description: string
  specifications?: Record<string, string>
}

// Process Types
export interface ProcessStep {
  id: string
  title: string
  description: string
  status: string
  icon: string
  details: string[]
}

// FAQ Types
export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'general' | 'technical' | 'pricing' | 'shipping' | 'quality'
}

// API Response Types
export interface APIResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export interface FileUploadResponse {
  url: string
  fileId: string
  status: 'processing' | 'ready' | 'failed'
}

export interface QuoteResponse {
  quoteId: string
  price: number
  leadTime: string
  materialOptions: Material[]
}
