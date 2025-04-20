
import matter from 'gray-matter';

export interface MarkdownContent {
  title: string;
  date: string;
  author?: string;
  category?: string;
  excerpt?: string;
  image?: string;
  content: string;
  fileSize?: string;
  pages?: number;
}

export const parseMarkdownContent = (markdown: string): MarkdownContent => {
  const { data, content } = matter(markdown);
  return {
    title: data.title || '',
    date: data.date || '',
    author: data.author,
    category: data.category,
    excerpt: data.excerpt,
    image: data.image,
    content,
    fileSize: data.fileSize,
    pages: data.pages
  };
};
