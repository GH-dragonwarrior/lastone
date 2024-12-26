import { useMemo } from 'react'
import { materials } from './data'
import PropertyBar from './PropertyBar'

interface MaterialComparisonProps {
  selectedMaterialId: string
  onClose: () => void
}

const MaterialComparison = ({ 
  selectedMaterialId,
  onClose 
}: MaterialComparisonProps) => {
  const selectedMaterial = useMemo(
    () => materials.find(m => m.id === selectedMaterialId),
    [selectedMaterialId]
  )

  if (!selectedMaterial) return null

  // Find alternative materials in the same category
  const alternatives = materials.filter(m => 
    m.category === selectedMaterial.category && m.id !== selectedMaterialId
  )

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Material Comparison
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500"
        >
          ×
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Selected Material */}
        <div className="border border-blue-500 rounded-lg p-4 bg-blue-50">
          <h4 className="font-medium text-gray-900 mb-2">
            {selectedMaterial.name}
            <span className="ml-2 text-sm text-blue-600">Selected</span>
          </h4>
          <div className="space-y-3">
            {Object.entries(selectedMaterial.properties).map(([key, value]) => (
              <PropertyBar
                key={key}
                name={key}
                value={value}
                max={5}
              />
            ))}
          </div>
        </div>

        {/* Alternative Materials */}
        {alternatives.slice(0, 2).map(material => (
          <div key={material.id} className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">
              {material.name}
            </h4>
            <div className="space-y-3">
              {Object.entries(material.properties).map(([key, value]) => (
                <PropertyBar
                  key={key}
                  name={key}
                  value={value}
                  max={5}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Recommendation */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">
          Recommendation
        </h4>
        <p className="text-sm text-gray-600">
          Based on your requirements, {selectedMaterial.name} is recommended for its
          {' '}{selectedMaterial.features[0].toLowerCase()}.
        </p>
      </div>
    </div>
  )
}

export default MaterialComparison
