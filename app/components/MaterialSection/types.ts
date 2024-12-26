export type MaterialProperty = 'strength' | 'temperature' | 'chemical' | 'cost' | 'time'

export type MaterialType = 'metal' | 'plastic' | 'composite'

export type MaterialCategory = 'standard' | 'engineering' | 'high-performance'

export interface Material {
  id: string
  name: string
  type: MaterialType
  category: MaterialCategory
  properties: Record<MaterialProperty, number>
  features: string[]
  description: string
}
