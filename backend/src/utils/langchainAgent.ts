import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanMessage } from 'langchain/schema';

const llm = new ChatOpenAI({
  modelName: 'gpt-3.5-turbo',
  temperature: 0,
  openAIApiKey: process.env.OPENAI_API_KEY
});

export async function analyzeResumeBatch(
  resumes: { name: string; text: string }[],
  jobDescription: string
) {
  const results = [];

  for (const resume of resumes) {
    const prompt = `
You are an AI HR assistant. Score the candidate resume against the following Job Description. 
Return a JSON with fields: score (0-100), good_points (array), bad_points (array)

Job Description:
${jobDescription}

Candidate Resume:
${resume.text}

Return JSON only.
`;

    const res = await llm.call([new HumanMessage(prompt)]);

    try {
      const parsed = JSON.parse(res.content || '{}');
      results.push({
        name: resume.name,
        score: parsed.score || 0,
        good_points: parsed.good_points || [],
        bad_points: parsed.bad_points || []
      });
    } catch (err) {
      results.push({
        name: resume.name,
        score: 0,
        good_points: [],
        bad_points: ['Failed to parse resume']
      });
    }
  }

  return results;
}
