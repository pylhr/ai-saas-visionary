
import React from 'react';
import Layout from '../components/layout/Layout';
import { FileText, Download, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const whitepapers = [
  {
    title: 'The State of AI in Business: 2023 Report',
    description: 'A comprehensive analysis of AI adoption trends, challenges, and opportunities across industries.',
    date: 'June 2023',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    pages: 42,
    fileSize: '3.8 MB'
  },
  {
    title: 'Building Autonomous AI Agents: Architecture and Best Practices',
    description: 'Technical insights into designing, implementing, and optimizing autonomous AI agents for business applications.',
    date: 'August 2023',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    pages: 36,
    fileSize: '4.2 MB'
  },
  {
    title: 'AI-Driven Workflow Optimization: Measurable Results',
    description: 'Case studies and data-based analysis of how AI-powered workflow optimization delivers measurable business outcomes.',
    date: 'September 2023',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    pages: 28,
    fileSize: '2.9 MB'
  },
  {
    title: 'Security Considerations for AI SaaS Products',
    description: 'A detailed examination of security challenges, regulatory compliance, and best practices for AI-powered SaaS solutions.',
    date: 'October 2023',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    pages: 34,
    fileSize: '3.5 MB'
  }
];

const Whitepapers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-aquilonis-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Technical Whitepapers & Insights</h1>
            <p className="text-xl text-blue-100 mb-8 reveal">
              In-depth reports on AI technology, strategies, and solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {whitepapers.map((whitepaper, index) => (
              <div key={index} className="flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal">
                <div className="md:w-2/5 h-60 md:h-auto">
                  <img 
                    src={whitepaper.image} 
                    alt={whitepaper.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span>{whitepaper.date}</span>
                    <span className="mx-2">•</span>
                    <FileText size={14} className="mr-1" />
                    <span>{whitepaper.pages} pages</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3">{whitepaper.title}</h2>
                  <p className="text-gray-600 mb-6 flex-grow">{whitepaper.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-500">{whitepaper.fileSize} PDF</span>
                    <button className="flex items-center space-x-2 button-primary py-2">
                      <Download size={16} />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Report Request */}
          <div className="mt-20 p-10 bg-gray-50 rounded-2xl border border-gray-100 max-w-4xl mx-auto reveal">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3">Request a Custom Whitepaper</h3>
              <p className="text-gray-600">Need specific information or research? We can create a tailored whitepaper for your organization.</p>
            </div>
            <div className="text-center">
              <Link to="/contact" className="button-accent inline-block">
                Request Custom Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Whitepapers;
