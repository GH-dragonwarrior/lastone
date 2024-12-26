import { Material } from './types'

export const materials: Material[] = [
  {
    id: 'pla',
    name: 'PLA',
    type: 'plastic',
    category: 'standard',
    properties: {
      strength: 3,
      temperature: 2,
      chemical: 2,
      cost: 4,
      time: 5
    },
    features: [
      'Excellent surface finish',
      'Good dimensional accuracy',
      'Eco-friendly'
    ],
    description: 'Ideal for prototypes and low-stress applications'
  },
  // Add more materials...
]
