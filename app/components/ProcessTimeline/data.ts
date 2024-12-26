import { ProcessStep } from './types'

export const processSteps: ProcessStep[] = [
  {
    id: 'upload',
    title: 'Upload & Quote',
    description: 'Upload your CAD files and receive instant pricing',
    status: 'Design Phase',
    icon: '📤',
    details: [
      'Supported formats: STL, STEP, OBJ',
      'Instant volume analysis',
      'Material recommendations'
    ]
  },
  {
    id: 'review',
    title: 'Review & Optimize',
    description: 'Our engineers review your design for manufacturability',
    status: 'Engineering Review',
    icon: '🔍',
    details: [
      'DFM analysis',
      'Material optimization',
      'Cost reduction opportunities'
    ]
  },
  {
    id: 'production',
    title: 'Production',
    description: 'Your parts are manufactured using industrial-grade processes',
    status: 'Manufacturing',
    icon: '⚙️',
    details: [
      'Quality control checks',
      'Real-time status updates',
      'Production tracking'
    ]
  },
  {
    id: 'quality',
    title: 'Quality & Shipping',
    description: 'Rigorous quality checks before shipping',
    status: 'Quality Control',
    icon: '📦',
    details: [
      'Multi-point inspection',
      'Detailed quality reports',
      'Track your shipment'
    ]
  }
]
