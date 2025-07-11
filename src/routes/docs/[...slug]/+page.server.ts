import { error } from '@sveltejs/kit';
import fs from 'fs';
import { marked } from 'marked';
import path from 'path';

const docsPath = path.resolve(process.cwd(), 'docs');

export async function load({ params }) {
  const slug = params.slug || 'index';
  const filePath = path.join(docsPath, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw error(404, 'Not found');
  }

  const markdown = fs.readFileSync(filePath, 'utf-8');
  const content = marked(markdown);

  return {
    content,
  };
}
