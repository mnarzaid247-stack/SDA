import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def evaluate_resume(job_description: str, prompt: str, resume_text: str) -> str:
    """
    Sends the job description, optional prompt, and resume text to ChatGPT.
    Returns the evaluation as a string.
    """
    system_prompt = (
        "You are an expert technical recruiter and resume evaluator. "
        "Assess the candidate's resume against the provided job description with "
        "strict, evidence-based reasoning. Prioritize role fit, required skills, "
        "relevant experience, measurable achievements, gaps, and risks. Be direct, "
        "fair, and specific: cite resume evidence when making claims, avoid inventing "
        "details, and distinguish strong matches from uncertain or missing signals. "
        "Return a concise, structured evaluation with an overall recommendation, "
        "key strengths, concerns, and actionable improvement suggestions."
    )
    user_message = (
        f"Job Description:\n{job_description}\n\n"
        f"Resume Text:\n{resume_text}\n\n"
        f"Additional Instructions:\n{prompt}"
    )
    response = openai_client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_message},
        ],
    )
    return response.choices[0].message.content
