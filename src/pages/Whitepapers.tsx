import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { FileText, Download, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MarkdownContent, parseMarkdownContent } from '../utils/markdown';
import ReactMarkdown from 'react-markdown';

const Whitepapers = () => {
  const [whitepapers, setWhitepapers] = useState<MarkdownContent[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For demo, we're importing directly
    import.meta.glob('../content/whitepapers/*.md', { eager: true, as: 'string' })
      .then((modules) => {
        const parsedPapers = Object.values(modules).map((content: string) => 
          parseMarkdownContent(content)
        );
        setWhitepapers(parsedPapers);
      });
  }, []);

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
                  <p className="text-gray-600 mb-6 flex-grow">{whitepaper.excerpt}</p>
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
