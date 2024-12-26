import { SubmissionStatus } from './types'

interface StatusMessageProps {
  status: SubmissionStatus
}

const StatusMessage = ({ status }: StatusMessageProps) => {
  if (status === 'idle') return null

  const messages = {
    submitting: {
      title: 'Sending your message...',
      description: 'Please wait while we process your request.',
      style: 'bg-blue-50 text-blue-800'
    },
    success: {
      title: 'Message sent successfully!',
      description: 'We\'ll be in touch with you shortly.',
      style: 'bg-green-50 text-green-800'
    },
    error: {
      title: 'Failed to send message',
      description: 'Please try again or contact us directly.',
      style: 'bg-red-50 text-red-800'
    }
  }

  const message = messages[status]

  return (
    <div className={`rounded-lg p-4 ${message.style}`}>
      <h3 className="text-sm font-medium mb-1">
        {message.title}
      </h3>
      <p className="text-sm opacity-90">
        {message.description}
      </p>
    </div>
  )
}

export default StatusMessage
