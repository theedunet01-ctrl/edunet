
import React from 'react';
import Layout from '../components/Layout';
import { BookOpen, Users, Award, Clock, CheckCircle } from 'lucide-react';

const IELTS = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#d32f2f]" />,
      title: 'Small Batch Size',
      description: 'Maximum 10 students per batch for personalized attention'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#d32f2f]" />,
      title: 'Expert Trainers',
      description: 'Certified IELTS trainers with years of experience'
    },
    {
      icon: <Award className="w-8 h-8 text-[#d32f2f]" />,
      title: 'Score Guarantee',
      description: 'We guarantee score improvement or money back'
    },
    {
      icon: <Clock className="w-8 h-8 text-[#d32f2f]" />,
      title: 'Flexible Timing',
      description: 'Morning, afternoon, and weekend batches available'
    }
  ];

  const modules = [
    {
      title: 'Listening',
      skills: ['Note-taking strategies', 'Prediction techniques', 'Multiple choice strategies', 'Form completion']
    },
    {
      title: 'Reading',
      skills: ['Skimming and scanning', 'Time management', 'Question types practice', 'Vocabulary building']
    },
    {
      title: 'Writing',
      skills: ['Task 1 & Task 2 structure', 'Grammar improvement', 'Coherence and cohesion', 'Vocabulary enhancement']
    },
    {
      title: 'Speaking',
      skills: ['Fluency development', 'Pronunciation practice', 'Confidence building', 'Mock interviews']
    }
  ];

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="bg-[#0165b6] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">IELTS Coaching</h1>
            <p className="text-xl">Expert trainers, small batches—score your best</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0165b6] text-center mb-12">Why Choose Our IELTS Coaching?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0165b6] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0165b6] text-center mb-12">IELTS Modules We Cover</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modules.map((module, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#0165b6] mb-4 text-center">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-[#d32f2f] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#0165b6] mb-6">Course Details</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Duration:</h4>
                    <p className="text-gray-600">6-8 weeks intensive course</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Class Schedule:</h4>
                    <p className="text-gray-600">3 days per week, 2 hours per class</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Batch Size:</h4>
                    <p className="text-gray-600">Maximum 10 students per batch</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Materials Included:</h4>
                    <p className="text-gray-600">Books, practice tests, online resources</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-[#0165b6] mb-6">What You'll Get</h2>
                <ul className="space-y-3">
                  {[
                    'Comprehensive study materials',
                    'Weekly mock tests',
                    'Individual feedback sessions',
                    'Speaking practice with native speakers',
                    'Writing task correction',
                    'Online practice platform access',
                    'Score improvement guarantee',
                    'Post-course support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#d32f2f] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0165b6] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Achieve Your Target Score?</h2>
            <p className="text-xl mb-8">Join our next IELTS batch and unlock your abroad journey</p>
            <a
              href="/contact"
              className="inline-block bg-[#d32f2f] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Enroll Now
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IELTS;
