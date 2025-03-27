
import React from 'react';
import Layout from '../components/layout/Layout';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'The Future of AI in Business Automation',
    excerpt: 'Explore how AI is revolutionizing business automation and what it means for the future of work.',
    author: 'Alex Johnson',
    date: 'June 15, 2023',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    category: 'Automation'
  },
  {
    title: 'Building Effective AI Agents for Customer Support',
    excerpt: 'Learn the key components of designing AI agents that deliver exceptional customer service experiences.',
    author: 'Sarah Williams',
    date: 'July 22, 2023',
    image: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    category: 'AI Agents'
  },
  {
    title: 'Case Study: Financial Services Transformation with AI',
    excerpt: 'How a leading financial institution achieved 200% ROI by implementing AI-powered automation solutions.',
    author: 'Michael Chen',
    date: 'August 5, 2023',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    category: 'Case Study'
  },
  {
    title: 'Ethical Considerations in AI Development',
    excerpt: 'An in-depth look at the ethical challenges and best practices in developing responsible AI solutions.',
    author: 'Elena Rodriguez',
    date: 'September 10, 2023',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    category: 'Ethics'
  },
  {
    title: 'The ROI of Custom AI SaaS Solutions',
    excerpt: 'A data-driven analysis of the return on investment for businesses implementing custom AI SaaS products.',
    author: 'David Park',
    date: 'October 18, 2023',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    category: 'Business'
  },
  {
    title: 'AI Integration: Bridging Legacy Systems with Modern Solutions',
    excerpt: 'How businesses can successfully integrate AI capabilities with their existing legacy infrastructure.',
    author: 'Jennifer Lee',
    date: 'November 3, 2023',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    category: 'Integration'
  }
];

const Blog = () => {
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
            {blogPosts.map((post, index) => (
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
                  <a 
                    href="#"
                    className="inline-flex items-center font-medium text-aquilonis-blue hover:underline"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
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
