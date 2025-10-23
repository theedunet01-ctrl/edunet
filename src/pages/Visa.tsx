import React from 'react';
import Layout from '../components/Layout';
import { FileText, CheckCircle, Clock, Users, Award, MapPin } from 'lucide-react';
const Visa = () => {
  const countries = [{
    name: 'United Kingdom',
    flag: '🇬🇧',
    visaTypes: ['Student Visa (Tier 4)', 'Graduate Route', 'Visitor Visa'],
    processingTime: '3-8 weeks',
    requirements: ['CAS from university', 'Financial proof', 'English proficiency', 'TB test']
  }, {
    name: 'United States',
    flag: '🇺🇸',
    visaTypes: ['F-1 Student Visa', 'J-1 Exchange Visa', 'B-2 Tourist Visa'],
    processingTime: '2-12 weeks',
    requirements: ['I-20 form', 'SEVIS fee payment', 'DS-160 form', 'Interview appointment']
  }, {
    name: 'Canada',
    flag: '🇨🇦',
    visaTypes: ['Study Permit', 'Visitor Visa', 'Work Permit'],
    processingTime: '4-12 weeks',
    requirements: ['Letter of acceptance', 'Financial support proof', 'Medical exam', 'Police clearance']
  }, {
    name: 'Australia',
    flag: '🇦🇺',
    visaTypes: ['Student Visa (500)', 'Tourist Visa', 'Graduate Visa'],
    processingTime: '4-8 weeks',
    requirements: ['COE from institution', 'GTE statement', 'Health insurance', 'Financial capacity']
  }];
  const services = [{
    icon: <FileText className="w-8 h-8 text-yellow-600" />,
    title: 'Document Preparation',
    description: 'Complete assistance with visa documentation and form filling'
  }, {
    icon: <Users className="w-8 h-8 text-yellow-600" />,
    title: 'Interview Preparation',
    description: 'Mock interviews and coaching for visa appointments'
  }, {
    icon: <Clock className="w-8 h-8 text-yellow-600" />,
    title: 'Application Tracking',
    description: 'Regular updates on your visa application status'
  }, {
    icon: <Award className="w-8 h-8 text-yellow-600" />,
    title: 'Success Guarantee',
    description: 'High success rate with expert guidance'
  }];
  return <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="bg-yellow-500 text-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Visa Consultation</h1>
            <p className="text-xl">Expert guidance for your visa application journey</p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Visa Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Countries Section */}
        

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[{
              step: '01',
              title: 'Consultation',
              description: 'Initial assessment of your profile and requirements'
            }, {
              step: '02',
              title: 'Documentation',
              description: 'Preparation and verification of all required documents'
            }, {
              step: '03',
              title: 'Application',
              description: 'Submission of visa application with expert review'
            }, {
              step: '04',
              title: 'Follow-up',
              description: 'Tracking and support until visa approval'
            }].map((item, index) => <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply for Your Visa?</h2>
            <p className="text-xl mb-8">Get expert assistance with your visa application today</p>
            <a href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Start Your Application
            </a>
          </div>
        </section>
      </div>
    </Layout>;
};
export default Visa;