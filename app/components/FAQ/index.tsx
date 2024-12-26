import { useState } from 'react'
import FAQItem from './FAQItem'
import SearchBar from './SearchBar'
import { faqData } from './faq-data'
import { FAQCategory } from './types'

const FAQ = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'all'>('all')

  // Filter FAQs based on search and category
  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = 
      activeCategory === 'all' || faq.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600">
          Everything you need to know about our manufacturing services
        </p>
      </div>

      {/* Search and Category Filters */}
      <div className="mb-8 space-y-4">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search FAQs..."
        />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm transition-colors
              ${activeCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            All
          </button>
          {Object.values(FAQCategory).map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors
                ${activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isActive={activeItem === faq.id}
              onClick={() => setActiveItem(activeItem === faq.id ? null : faq.id)}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No FAQs found matching your search criteria
            </p>
          </div>
        )}
      </div>

      {/* Contact Support */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
        <p className="text-gray-900 font-medium mb-2">
          Still have questions?
        </p>
        <p className="text-gray-600 mb-4">
          Our team is here to help with any other questions you might have
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </div>
  )
}

export default FAQ
