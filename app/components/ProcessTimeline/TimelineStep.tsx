import { ProcessStep } from './types'

interface TimelineStepProps {
  step: ProcessStep
  index: number
  isActive: boolean
  isHovered: boolean
  isEven: boolean
  onHover: () => void
  onLeave: () => void
  onClick: () => void
}

const TimelineStep = ({
  step,
  index,
  isActive,
  isHovered,
  isEven,
  onHover,
  onLeave,
  onClick
}: TimelineStepProps) => {
  return (
    <div 
      className={`relative flex items-center ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Timeline node */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div 
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
            transition-all duration-300 ${
              isActive 
                ? 'border-blue-600 bg-blue-50' 
                : 'border-gray-300 bg-white'
            } ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
        >
          {step.icon}
        </div>
      </div>

      {/* Content */}
      <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
        <div 
          className={`p-6 bg-white rounded-lg shadow-sm border transition-all duration-300
            ${isActive 
              ? 'border-blue-200 shadow-blue-50' 
              : 'border-gray-100'
            } ${
              isHovered ? 'transform scale-105' : ''
            }`}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {step.title}
            </h3>
            <span className={`px-2 py-1 text-xs rounded-full ${
              isActive 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {step.status}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">{step.description}</p>
          
          <div className="space-y-2">
            {step.details.map((detail, idx) => (
              <div key={idx} className="flex items-center text-sm text-gray-500">
                <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"/>
                {detail}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineStep
