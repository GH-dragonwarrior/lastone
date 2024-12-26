import { NavItem } from './types'

interface MobileMenuProps {
  isOpen: boolean
  navItems: NavItem[]
  activeSection: string
  onNavigate: (sectionId: string) => void
}

const MobileMenu = ({
  isOpen,
  navItems,
  activeSection,
  onNavigate
}: MobileMenuProps) => {
  return (
    <div 
      className={`md:hidden bg-white border-b border-gray-100 transition-all duration-300 ${
        isOpen ? 'opacity-100 max-h-64' : 'opacity-0 max-h-0'
      } overflow-hidden`}
    >
      <div className="px-4 py-2 space-y-1">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`block w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${
              activeSection === item.id
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {item.label}
          </button>
        ))}
        <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default MobileMenu
