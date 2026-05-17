const formm = document.getElementById("form");
const result = document.getElementById("result");


formm.addEventListener('submit', (event) => {
event.preventDefault();

const job = document.getElementById("job").value;
const prompt = document.getElementById("prompt").value;
const cv = document.getElementById("cv");
const cvFile = cv.files[0]?.name;


if (job.trim() === ''){
    result.textContent = 'Please enter a job description.';
}
else if (!cv.files[0]){
    result.textContent = 'Please upload a PDF resume.';
}
else {
    result.textContent = `Evaluating ${cvFile} against the job description... (ChatGPT integration coming in Stage 5)`;
}
})
