
import React from 'react';
import Layout from '../components/layout/Layout';
import { LineChart, Users, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/home/CTA';

const useCases = [
  {
    icon: LineChart,
    title: 'Finance Automation',
    description: 'AI automates financial workflows, reducing processing time and improving accuracy.',
    challenges: [
      'Manual data entry and processing',
      'Error-prone financial calculations',
      'Time-consuming reporting procedures',
      'Delayed insights for decision-making'
    ],
    solutions: [
      'Automated data extraction and entry',
      'AI-powered financial analysis',
      'Real-time reporting dashboards',
      'Predictive financial modeling'
    ],
    results: [
      '65% reduction in processing time',
      '98% accuracy in financial calculations',
      'Near real-time financial insights',
      '40% increase in financial team productivity'
    ],
    color: 'border-blue-200 bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-aquilonis-blue'
  },
  {
    icon: Users,
    title: 'Customer Support Agents',
    description: 'AI agents provide 24/7 support, enhancing customer experience and reducing costs.',
    challenges: [
      'Limited support hours',
      'High volume of repetitive queries',
      'Long response times',
      'Inconsistent service quality'
    ],
    solutions: [
      '24/7 AI support agent deployment',
      'Natural language understanding',
      'Seamless human handoff for complex issues',
      'Multi-channel integration'
    ],
    results: [
      '80% of queries resolved automatically',
      '24/7 availability for customer support',
      '3-minute average response time',
      '45% reduction in support costs'
    ],
    color: 'border-purple-200 bg-purple-50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    icon: Database,
    title: 'Data Analysis & Insights',
    description: 'Custom AI SaaS products analyze large datasets to extract valuable insights and predictions.',
    challenges: [
      'Overwhelming volume of unstructured data',
      'Inability to identify patterns manually',
      'Time-consuming analysis processes',
      'Difficulty making data-driven decisions'
    ],
    solutions: [
      'AI-powered data processing platform',
      'Automated pattern recognition',
      'Predictive analytics models',
      'Interactive visualization dashboards'
    ],
    results: [
      '85% faster data processing',
      'Previously hidden insights discovered',
      '60% improvement in predictive accuracy',
      '35% increase in data-driven decisions'
    ],
    color: 'border-orange-200 bg-orange-50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-aquilonis-orange'
  }
];

const UseCases = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-aquilonis-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">AI-Powered Use Cases for Maximum Impact</h1>
            <p className="text-xl text-blue-100 mb-8 reveal">
              Explore how our AI solutions solve real-world business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="rounded-2xl border p-0 overflow-hidden shadow-lg reveal">
                <div className={`flex flex-col md:flex-row ${useCase.color}`}>
                  {/* Use Case Header */}
                  <div className="p-8 md:p-12 md:w-1/3">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${useCase.iconBg} ${useCase.iconColor} mb-6`}>
                      <useCase.icon size={28} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{useCase.title}</h2>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center font-medium text-aquilonis-blue hover:underline"
                    >
                      Discuss this use case
                      <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Use Case Details */}
                  <div className="bg-white p-8 md:p-12 md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-4">Challenges</h3>
                        <ul className="space-y-2">
                          {useCase.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                              <span className="mr-2 text-red-500">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 mb-4">Solutions</h3>
                        <ul className="space-y-2">
                          {useCase.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                              <span className="mr-2 text-aquilonis-blue">•</span>
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 mb-4">Results</h3>
                        <ul className="space-y-2">
                          {useCase.results.map((result, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                              <span className="mr-2 text-green-500">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default UseCases;
