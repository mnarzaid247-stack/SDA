// TODO Day 3: add errorMessage and result state
//             complete the handleSubmit function with validation and simulated response
//             add conditional rendering to the results area
// TODO Day 5: move all state and logic to src/hooks/useEvaluator.js
//             import and use the hook here instead
import { useState } from "react"
export default function EvaluatorPage() {
  const [jobDescription, setJobDescription] = useState('')
  const [prompt, setPrompt] = useState('')
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('idle')

  function onSubmit(e) {
    e.preventDefault()
    if(!jobDescription || !file) {
      setStatus('error')
      return
    }
    setStatus('loading')
  }

  return (
    <main>
      <section className="form-section">
        <h2>Evaluate a Resume</h2>
        <form method="post" id="form" onSubmit={onSubmit}>
          <label htmlFor="job"> job description</label>
          <textarea
          rows="2"
          cols="10" 
          name="job" 
          id="job" 
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          ></textarea>
          <label htmlFor="prompt">Custom Prompt</label>
          <textarea
           rows="2" 
           cols="60" 
           name="prompt" 
           id="prompt"
           value={prompt}
           onChange={(e) => setPrompt(e.target.value)}
           ></textarea>
          <label htmlFor="cv">Upload your CV</label>
          <input
          type="file" 
          accept=".pdf" 
          name="cv" 
          id="cv"
          onChange={(e) => setFile(e.target.files[0] || null)}
          />
          <button type="submit"> Submit</button>
        </form>
      </section>

      <section className="results-section">
        <h2>Results</h2>
        <div id="results">
          <p>Results will appear here</p>
        </div>
      </section>
    </main>
  )
}
