import { SubmissionStatus } from './types'

interface SubmitButtonProps {
  isSubmitting: boolean
  status: SubmissionStatus
}

const SubmitButton = ({ isSubmitting, status }: SubmitButtonProps) => {
  const getButtonText = () => {
    switch (status) {
      case 'submitting':
        return 'Sending...'
      case 'success':
        return 'Sent!'
      case 'error':
        return 'Try Again'
      default:
        return 'Send Message'
    }
  }

  return (
    <button
      type="submit"
      disabled={isSubmitting || status === 'success'}
      className={`w-full flex justify-center py-2 px-4 border border-transparent 
        rounded-lg shadow-sm text-sm font-medium text-white
        ${status === 'success'
          ? 'bg-green-600'
          : status === 'error'
          ? 'bg-red-600 hover:bg-red-700'
          : isSubmitting
          ? 'bg-blue-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700'
        } transition-colors`}
    >
      {getButtonText()}
    </button>
  )
}

export default SubmitButton
