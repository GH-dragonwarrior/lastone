import { useState } from 'react'
import MaterialCard from './MaterialCard'
import MaterialComparison from './MaterialComparison'
import PropertyFilter from './PropertyFilter'
import { materials } from './data'
import type { MaterialProperty } from './types'

const MaterialSection = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null)
  const [activeFilters, setActiveFilters] = useState<MaterialProperty[]>([])
  const [showComparison, setShowComparison] = useState(false)

  // Filter materials based on selected properties
  const filteredMaterials = materials.filter(material => {
    if (activeFilters.length === 0) return true
    return activeFilters.every(filter => 
      material.properties[filter] >= 3 // Threshold for "good" rating
    )
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Materials & Capabilities
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Industrial-grade materials optimized for your specific needs
        </p>
      </div>

      {/* Property Filters */}
      <div className="mb-8">
        <PropertyFilter
          activeFilters={activeFilters}
          onFilterChange={setActiveFilters}
        />
      </div>

      {/* Material Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map(material => (
          <MaterialCard
            key={material.id}
            material={material}
            isSelected={selectedMaterial === material.id}
            onSelect={() => setSelectedMaterial(material.id)}
          />
        ))}
      </div>

      {/* Material Comparison */}
      {selectedMaterial && (
        <div className="mt-12">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="mb-6 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 
              rounded-lg hover:bg-blue-50 transition-colors"
          >
            {showComparison ? 'Hide Comparison' : 'Compare Materials'}
          </button>

          {showComparison && (
            <MaterialComparison
              selectedMaterialId={selectedMaterial}
              onClose={() => setShowComparison(false)}
            />
          )}
        </div>
      )}

      {/* Integration Note for Developer */}
      {/* 
        TODO: Integration Points
        1. Replace materials array with your database
        2. Connect material selection to your quote system
        3. Add your material computation logic
        4. Integrate with your pricing system
      */}
    </div>
  )
}

export default MaterialSection
