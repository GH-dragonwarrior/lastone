import type { APIResponse } from '@/app/types/index'

export async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<APIResponse<T>> {
  try {
    const response = await fetch(`/api/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        // Add any authentication headers here
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('API Error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
}

export const uploadFile = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<APIResponse<{ url: string }>> => {
  try {
    const formData = new FormData()
    formData.append('file', file)

    const xhr = new XMLHttpRequest()
    
    // Track upload progress
    if (onProgress) {
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded * 100) / event.total)
          onProgress(progress)
        }
      }
    }

    return new Promise((resolve, reject) => {
      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText)
          resolve({ success: true, data: response })
        } else {
          reject(new Error('Upload failed'))
        }
      }

      xhr.onerror = () => reject(new Error('Network error'))
      
      xhr.open('POST', '/api/upload')
      xhr.send(formData)
    })
  } catch (error) {
    console.error('Upload Error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed'
    }
  }
}
