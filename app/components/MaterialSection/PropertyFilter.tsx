import { MaterialProperty } from './types'

interface PropertyFilterProps {
  activeFilters: MaterialProperty[]
  onFilterChange: (filters: MaterialProperty[]) => void
}

const PropertyFilter = ({ 
  activeFilters, 
  onFilterChange 
}: PropertyFilterProps) => {
  const properties: MaterialProperty[] = [
    'strength',
    'temperature',
    'chemical',
    'cost',
    'time'
  ]

  const toggleFilter = (property: MaterialProperty) => {
    if (activeFilters.includes(property)) {
      onFilterChange(activeFilters.filter(p => p !== property))
    } else {
      onFilterChange([...activeFilters, property])
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {properties.map(property => (
        <button
          key={property}
          onClick={() => toggleFilter(property)}
          className={`px-4 py-2 rounded-full text-sm transition-colors
            ${activeFilters.includes(property)
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          {property.charAt(0).toUpperCase() + property.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default PropertyFilter
