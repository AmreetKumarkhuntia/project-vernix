import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

const docsPath = path.resolve(process.cwd(), 'docs');

export async function load() {
  const filePath = path.join(docsPath, `introduction.md`);
  const markdown = fs.readFileSync(filePath, 'utf-8');
  const content = marked(markdown);

  return {
    content,
  };
}
