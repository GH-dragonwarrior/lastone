import { FAQ, FAQCategory } from './types'

export const faqData: FAQ[] = [
  {
    id: 'process-types',
    question: 'What manufacturing processes do you offer?',
    answer: 'We offer a comprehensive range of processes including CNC machining, 3D printing (SLA, SLS, FDM), injection molding, and urethane casting. Each process is optimized for different applications and materials.',
    category: FAQCategory.GENERAL
  },
  {
    id: 'lead-times',
    question: 'What are your typical lead times?',
    answer: 'Lead times vary by process: 3D Printing (2-5 days), CNC Machining (5-10 days), Injection Molding (15-20 days). Rush services are available for urgent projects.',
    category: FAQCategory.SHIPPING
  },
  {
    id: 'materials',
    question: 'What materials are available?',
    answer: 'We offer a wide range of materials including various plastics (ABS, PLA, Nylon, PEEK) and metals (Aluminum, Steel, Titanium). Each material is carefully selected for specific applications.',
    category: FAQCategory.TECHNICAL
  },
  {
    id: 'quality-standards',
    question: 'What quality standards do you follow?',
    answer: 'We maintain ISO 9001 certification and follow industry-specific standards including AS9100 for aerospace and ISO 13485 for medical devices.',
    category: FAQCategory.QUALITY
  },
  {
    id: 'pricing',
    question: 'How is pricing calculated?',
    answer: "Pricing is based on several factors including material choice, part size, complexity, quantity, and lead time requirements. You'll receive an instant quote when you upload your CAD file.",
    category: FAQCategory.PRICING
  }
];
