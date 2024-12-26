interface PropertyBarProps {
  name: string
  value: number
  max: number
}

const PropertyBar = ({ name, value, max }: PropertyBarProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 w-24 capitalize">
        {name.replace('_', ' ')}
      </span>
      <div className="flex-1">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${(value / max) * 100}%` }}
          />
        </div>
      </div>
      <span className="text-sm text-gray-600 w-8 text-right">
        {value}/{max}
      </span>
    </div>
  )
}

export default PropertyBar
