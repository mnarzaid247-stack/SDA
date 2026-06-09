 import useEvaluator from "../hooks/useEvaluator"

export default function EvaluatorPage() {
  const {
    jobDescription,
    setJobDescription,
    prompt,
    setPrompt,
    setFile,
    status,
    errorMessage,
    result,
    handleSubmit,
  } = useEvaluator()

  return (
    <main>
      <section className="form-section">
        <h2>Evaluate a Resume</h2>

        <form method="post" id="form" onSubmit={handleSubmit}>
          <label htmlFor="job">Job description</label>
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

          <button type="submit" disabled={status === 'loading'}>
            Submit
          </button>
        </form>
      </section>

      <section className="results-section">
        <h2>Results</h2>

        <div id="results">
          {status === 'idle' && <p>Results will appear here</p>}

          {status === 'loading' && <p>Evaluating...</p>}

          {status === 'error' && <p className="error">{errorMessage}</p>}

          {status === 'success' && <p>{result}</p>}
        </div>
      </section>
    </main>
  )
}
