export enum FAQCategory {
  GENERAL = 'General',
  TECHNICAL = 'Technical',
  PRICING = 'Pricing',
  SHIPPING = 'Shipping',
  QUALITY = 'Quality'
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: FAQCategory
}
