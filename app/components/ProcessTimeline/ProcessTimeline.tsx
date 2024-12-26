import { useState } from 'react'
import TimelineStep from './TimelineStep'
import { processSteps } from './data'
// import type { ProcessStep } from './types'

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From CAD file to finished parts in four simple steps. 
          Our automated platform ensures quality and speed at every stage.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"/>
        
        {/* Timeline steps */}
        <div className="relative space-y-16">
          {processSteps.map((step, index) => (
            <TimelineStep
              key={step.id}
              step={step}
              index={index}
              isActive={index <= activeStep}
              isHovered={hoveredStep === index}
              isEven={index % 2 === 0}
              onHover={() => setHoveredStep(index)}
              onLeave={() => setHoveredStep(null)}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center mt-12 gap-2">
        {processSteps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index <= activeStep 
                ? 'w-8 bg-blue-600' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProcessTimeline
