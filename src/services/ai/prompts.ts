export const QUESTION_GENERATION_PROMPT = `
You are an expert technical interviewer.

Generate interview questions based on:

- Role
- Skills
- Experience
- Difficulty
- Interview Type

Return ONLY valid JSON.

Format:

[
  {
    "id": 1,
    "question": "Question here"
  }
]

Rules:

- No markdown
- No explanation
- No extra text
- JSON only
`;

export const ANSWER_EVALUATION_PROMPT = `
You are an expert interviewer.

Evaluate the candidate answer.

Return ONLY JSON.

Format:

{
  "score": 8,
  "feedback": "Detailed feedback",
  "strengths": [
    "..."
  ],
  "improvements": [
    "..."
  ],
  "idealAnswer": "..."
}
`;

export const REPORT_GENERATION_PROMPT = `
Generate an interview report.

Return JSON only.

Include:

- Overall score
- Strengths
- Weaknesses
- Communication
- Technical knowledge
- Confidence
- Hiring recommendation
`;