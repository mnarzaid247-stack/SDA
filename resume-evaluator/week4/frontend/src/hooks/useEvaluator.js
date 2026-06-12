import { useState } from 'react'
import client from '../api/client'

export default function useEvaluator() {
  const [jobDescription, setJobDescription] = useState('')
  const [prompt, setPrompt] = useState('')
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState(null)
  const [result, setResult] = useState(null)

  async function handleSubmit(e) {
  e.preventDefault()

  if (!jobDescription) {
    setStatus('error')
    setErrorMessage('Please enter a job description.')
    return
  }

  if (!file) {
    setStatus('error')
    setErrorMessage('Please upload your CV.')
    return
  }

  setStatus('loading')
  setErrorMessage(null)
  setResult(null)

  try {
    const response = await client.post('/evaluate', {
      job_description: jobDescription,
      prompt: prompt,
    })

    setStatus('success')
    setResult(response.data.result)
  } catch (error) {
    console.error(error)
    setStatus('error')
    setErrorMessage('Evaluation failed.')
  }
}

  return {
    jobDescription,
    setJobDescription,
    prompt,
    setPrompt,
    file,
    setFile,
    status,
    errorMessage,
    result,
    handleSubmit,
  }
}
