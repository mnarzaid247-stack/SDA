// TODO Day 1: convert your Stage 1 form HTML to JSX
//             (remember: class → className, self-closing tags need />)
// TODO Day 2: add useState for jobDescription, prompt, file, status
//             make the textareas controlled inputs
// TODO Day 3: add errorMessage and result state
//             complete the handleSubmit function with validation and simulated response
//             add conditional rendering to the results area
// TODO Day 5: move all state and logic to src/hooks/useEvaluator.js
//             import and use the hook here instead

export default function EvaluatorPage() {
  return (
    <main>
      <section className="form-section">
        <h2>Evaluate a Resume</h2>
        <form method="post" id="form">
          <label for="job"> job description</label>
          <textarea rows="2" cols="10" name="job" id="job"></textarea>
          <label for="prompt">Custom Prompt</label>
          <textarea rows="2" cols="60" name="prompt" id="prompt"></textarea>
          <label for="cv">Upload your CV</label>
          <input type="file" accept=".pdf" name="cv" id="cv"></input>
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
