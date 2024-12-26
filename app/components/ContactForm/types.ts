export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  company?: string
  message: string
}
