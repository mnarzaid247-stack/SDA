import { useState } from "react"

export default function useEvaluator() {
  const [jobDescription, setJobDescription] = useState('')
  const [prompt, setPrompt] = useState('')
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState(null)
  const [result, setResult] = useState(null)

  function handleSubmit(e) {
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

    setTimeout(() => {
      setStatus('success')
      setResult(`Evaluating ${file.name}... ChatGPT integration coming in Stage 5.`)
    }, 1500)
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
