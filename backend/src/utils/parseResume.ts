import pdfParse from 'pdf-parse';
import mammoth from 'mammoth';
import fs from 'fs/promises';
import path from 'path';

export async function parseResumesFromFiles(files: any[]) {
  const results: { name: string; text: string }[] = [];

  for (const file of files) {
    const buffer = await fs.readFile(file.tempfile);
    const ext = path.extname(file.originalname).toLowerCase();

    let text = '';
    if (ext === '.pdf') {
      const data = await pdfParse(buffer);
      text = data.text;
    } else if (ext === '.docx') {
      const result = await mammoth.extractRawText({ buffer });
      text = result.value;
    }

    results.push({
      name: file.originalname,
      text: text.trim()
    });
  }

  return results;
}
