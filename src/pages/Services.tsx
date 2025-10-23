
import React from 'react';
import Layout from '../components/Layout';
import { 
  GraduationCap, 
  FileText, 
  Users, 
  Globe, 
  Award, 
  BookOpen,
  MapPin,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <FileText className="w-12 h-12 text-yellow-600" />,
      title: 'Visa Consultation',
      description: 'Complete visa guidance for UK, USA, Canada, Australia, and other destinations.',
      features: ['Document preparation', 'Application assistance', 'Interview preparation', 'Follow-up support']
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-yellow-600" />,
      title: 'University Selection',
      description: 'Personalized university shortlisting based on your academic profile and preferences.',
      features: ['Profile assessment', 'University matching', 'Course guidance', 'Admission strategy']
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-600" />,
      title: 'Application Assistance',
      description: 'Complete support for university applications and documentation.',
      features: ['Essay editing', 'SOP writing', 'Document verification', 'Application tracking']
    }
  ];

  const additionalServices = [
    {
      icon: <Globe className="w-8 h-8 text-gray-800" />,
      title: 'Pre-departure Guidance',
      description: 'Essential information for your journey abroad'
    },
    {
      icon: <Award className="w-8 h-8 text-gray-800" />,
      title: 'Scholarship Assistance',
      description: 'Help finding and applying for scholarships'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gray-800" />,
      title: 'Career Counseling',
      description: 'Professional guidance for your career path'
    },
    {
      icon: <MapPin className="w-8 h-8 text-gray-800" />,
      title: 'Accommodation Support',
      description: 'Help finding suitable housing options'
    }
  ];

  return (
    <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="bg-yellow-500 text-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">Comprehensive support for your study abroad journey</p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Services</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-yellow-200 hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Support</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Edunet?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Star className="w-8 h-8 text-yellow-600" />,
                  title: 'Expert Guidance',
                  description: 'Years of experience in international education consulting'
                },
                {
                  icon: <Users className="w-8 h-8 text-yellow-600" />,
                  title: 'Personalized Service',
                  description: 'Tailored solutions for each student\'s unique needs'
                },
                {
                  icon: <Award className="w-8 h-8 text-yellow-600" />,
                  title: 'Proven Success',
                  description: 'High success rate in visa approvals and admissions'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8">Get in touch with our experts today</p>
            <a
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
