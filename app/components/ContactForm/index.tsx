import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import SubmitButton from './SubmitButton'
import StatusMessage from './StatusMessage'
import { ContactFormData, SubmissionStatus } from './types'

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState<SubmissionStatus>('idle')
  
  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('submitting')
    
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    //   })

    //   if (!response.ok) throw new Error('Submission failed')
      
    //   setSubmitStatus('success')
    //   reset()
    // } catch (error) {
    //   setSubmitStatus('error')
    // }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600">
          Ready to start your project? Our team is here to help.
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">
            Sales & Quotes
          </h3>
          <p className="text-gray-600 mb-4">
            Get pricing and lead time information
          </p>
          <p className="text-sm text-gray-500">
            Response time: Within 2 hours
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">
            Technical Support
          </h3>
          <p className="text-gray-600 mb-4">
            Engineering and design assistance
          </p>
          <p className="text-sm text-gray-500">
            Response time: Within 4 hours
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="First Name"
            {...register('firstName', {
              required: 'First name is required',
              minLength: {
                value: 2,
                message: 'First name must be at least 2 characters'
              }
            })}
            error={errors.firstName?.message}
          />
          <FormInput
            label="Last Name"
            {...register('lastName', {
              required: 'Last name is required',
              minLength: {
                value: 2,
                message: 'Last name must be at least 2 characters'
              }
            })}
            error={errors.lastName?.message}
          />
        </div>

        <FormInput
          label="Email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          error={errors.email?.message}
        />

        <FormInput
          label="Company"
          {...register('company')}
          optional
        />

        <FormTextarea
          label="Message"
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters'
            }
          })}
          error={errors.message?.message}
        />

        <StatusMessage status={submitStatus} />
        
        <SubmitButton 
          isSubmitting={isSubmitting} 
          status={submitStatus}
        />
      </form>
    </div>
  )
}

export default ContactForm
