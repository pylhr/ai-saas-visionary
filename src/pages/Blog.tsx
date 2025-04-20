
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MarkdownContent, parseMarkdownContent } from '../utils/markdown';
import ReactMarkdown from 'react-markdown';

const Blog = () => {
  const [posts, setPosts] = useState<MarkdownContent[]>([]);

  useEffect(() => {
    const loadMarkdownFiles = async () => {
      try {
        const modules = import.meta.glob('../content/blog/*.md', { eager: true, as: 'string' });
        const parsedPosts = Object.values(modules).map((content: string) => 
          parseMarkdownContent(content)
        );
        setPosts(parsedPosts);
      } catch (error) {
        console.error("Error loading markdown files:", error);
      }
    };

    loadMarkdownFiles();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-aquilonis-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Aquilonis AI Insights</h1>
            <p className="text-xl text-blue-100 mb-8 reveal">
              Explore articles, case studies, and industry trends powered by AI.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-aquilonis-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 hover:text-aquilonis-blue transition-colors duration-300">
                    <a href="#">{post.title}</a>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => {/* Implement view post logic */}}
                    className="inline-flex items-center font-medium text-aquilonis-blue hover:underline"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 p-10 bg-gray-50 rounded-2xl border border-gray-100 max-w-4xl mx-auto reveal">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600">Stay updated with the latest AI insights and industry news.</p>
            </div>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-aquilonis-blue focus:border-transparent"
                required
              />
              <button 
                type="submit"
                className="button-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
