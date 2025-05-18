import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { parseMultipartForm } from 'hono/middleware/multipart';
import { parseResumesFromFiles } from './utils/parseResume';
import { analyzeResumeBatch } from './utils/langchainAgent';
import dotenv from 'dotenv';

dotenv.config();

const app = new Hono();

app.post('/analyze', parseMultipartForm(), async (c) => {
  const body = c.req.body();
  const files = await body.files('resumes');
  const jd = body.get('jobDescription') as string;

  if (!files || files.length === 0 || !jd) {
    return c.json({ error: 'Missing resumes or job description' }, 400);
  }

  const resumeTexts = await parseResumesFromFiles(files);
  const analysisResults = await analyzeResumeBatch(resumeTexts, jd);

  return c.json(analysisResults);
});

serve({ fetch: app.fetch, port: 3000 });
console.log('🚀 Backend running on http://localhost:3000');
