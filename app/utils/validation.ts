export const validateEmail = (email: string): boolean => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return regex.test(email)
}

export const validateFileType = (file: File, allowedTypes: string[]): boolean => {
  const extension = file.name.split('.').pop()?.toLowerCase()
  return extension ? allowedTypes.includes(`.${extension}`) : false
}

export const validateFileSize = (file: File, maxSizeMB: number): boolean => {
  return file.size <= maxSizeMB * 1024 * 1024
}
