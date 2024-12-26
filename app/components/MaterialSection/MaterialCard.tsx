import { Material } from './types'
import PropertyBar from './PropertyBar'

interface MaterialCardProps {
  material: Material
  isSelected: boolean
  onSelect: () => void
}

const MaterialCard = ({ material, isSelected, onSelect }: MaterialCardProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border transition-all duration-300
        ${isSelected 
          ? 'border-blue-500 ring-1 ring-blue-500 bg-blue-50' 
          : 'border-gray-200 hover:border-blue-300'
        }`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {material.name}
            </h3>
            <p className="text-sm text-gray-500">{material.category}</p>
          </div>
          <span className={`px-2 py-1 text-xs rounded-full
            ${isSelected ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
            {material.type}
          </span>
        </div>

        {/* Properties */}
        <div className="space-y-3 mb-4">
          {Object.entries(material.properties).map(([key, value]) => (
            <PropertyBar
              key={key}
              name={key}
              value={value}
              max={5}
            />
          ))}
        </div>

        {/* Features */}
        <div className="mt-4 space-y-2">
          {material.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-1 h-1 bg-blue-500 rounded-full mr-2" />
              {feature}
            </div>
          ))}
        </div>

        {/* Action */}
        <button
          onClick={onSelect}
          className={`mt-6 w-full px-4 py-2 rounded-lg transition-colors text-sm font-medium
            ${isSelected
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'text-blue-600 border border-blue-600 hover:bg-blue-50'
            }`}
        >
          {isSelected ? 'Selected' : 'Select Material'}
        </button>
      </div>
    </div>
  )
}

export default MaterialCard
