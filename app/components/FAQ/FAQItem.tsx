import { FAQ } from './types'

interface FAQItemProps {
  faq: FAQ
  isActive: boolean
  onClick: () => void
}

const FAQItem = ({ faq, isActive, onClick }: FAQItemProps) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        aria-expanded={isActive}
      >
        <span className="font-medium text-gray-900">{faq.question}</span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-200 ${
          isActive ? 'rotate-180' : ''
        }`}>
          ↓
        </span>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out ${
        isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-6 pb-4">
          <p className="text-gray-600 prose prose-sm">{faq.answer}</p>
          {faq.category && (
            <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              {faq.category}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default FAQItem
