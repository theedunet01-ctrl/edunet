import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle, GraduationCap, Users, Globe, Heart } from 'lucide-react';
import swedenHero from '../assets/sweden-hero.jpg';
const StudyAbroadSweden = () => {
  const whySweden = ['An international and multicultural environment', 'Affordable study costs', 'Innovative teaching methods', 'Affordable living expenses', 'A wide range of degrees taught in English', 'Excellent opportunities for travel', 'Internationally recognized degrees'];
  const benefits = ['Excellent and welcoming place to live', 'Excellent health care system', 'Internationally recognized degrees', 'Scholarships', 'Learn or improve another language!', 'Sweden is a peaceful, politically stable, and safe country', 'A multicultural country', 'Course study works facilities and Permanent Residency opportunity'];
  const universities = ['Lund University', 'Malmo University', 'Mid Sweden University', 'Malardalen University', 'Stockholm University', 'Sodertom University', 'University of Boras', 'University of Gothenburg', 'Blekinge Institute of Technology', 'Chalmers University of Technology', 'Dalama University', 'Halmstad University', 'Jonkoping University', 'KTH Royal Institute of Technology', 'Karlstad University', 'Linnaeus University', 'Karokinska University'];
  const requiredDocs = ['Bachelor main certificate and mark sheet with subject name', 'Passport', 'IELTS Certificate (Academic) or Medium of Instruction', 'Birth Certificate (In English)', 'C.V. (with 2 references)', 'Job Experience Certificate', 'Photo (Passport size)', 'Testimonial (for HSC Passed)', 'Recommendation Letter (for Bachelor or Masters)', 'Motivation letter'];
  const edunetFacilities = ['Student will get all kind of Support from our agent', 'Airport Pickup', 'Accommodation Support', 'Job Support', 'Processing through immigration expert', 'Career Counseling'];
  return <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${swedenHero})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">STUDY IN → SWEDEN</h1>
                <p className="text-xl opacity-90">Innovative teaching methods with excellent living standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Sweden Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">About Sweden</h2>
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Sweden officially the Kingdom of Sweden, is a Scandinavian country in Northern Europe. It borders Norway to the west and north and Finland to the east, and is connected to Denmark in the southwest by a bridge-tunnel across the Öresund. Sweden is the third-largest country in the European Union by area. The capital city is Stockholm, which is also the most populous city in the country. There are a number of different universities and colleges in Sweden, the oldest and largest of which are situated in Uppsala, Lund, Gothenburg and Stockholm.
              </p>
            </div>
          </div>
        </section>

        {/* Why Study in Sweden */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Should Study in Sweden</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Globe className="w-6 h-6 text-yellow-600 mr-2" />
                  Why Choose Sweden
                </h3>
                <ul className="space-y-3">
                  {whySweden.map((reason, index) => <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{reason}</span>
                    </li>)}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-yellow-600 mr-2" />
                  Benefits of Studying in Sweden
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Working in Sweden */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Working in Sweden</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Work During Your Studies</h3>
                <p className="text-gray-700 leading-relaxed">
                  As an international student in Sweden, you're allowed to work alongside your studies there's no official limitation for how many hours you can work. However, it's important to keep your studies as your first priority - even when you don't have many classroom hours, you're expected to spend the equivalent of a 40-hour work week reading and working on assignments. Most universities have careers services that can help you with finding a part-time job during your studies.
                </p>
              </div>

              <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Work After Your Studies</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sweden is a great place to start your career, and innovative, international companies are found throughout the country. You can apply to extend your residence permit for up to six months to search for a job or start a company, and if you receive a job offer meeting certain conditions you can then apply for a work permit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Universities in Sweden</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.map((uni, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-lg border border-yellow-200 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2" />
                    <h3 className="text-sm font-semibold text-gray-900">{uni}</h3>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-white">
          
        </section>

        {/* Required Documents */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Required Documents</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Academic Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocs.map((doc, index) => <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* EDUNET Facilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Facilities of EDUNET</h2>
            
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {edunetFacilities.map((facility, index) => <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{facility}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Study in Sweden?</h2>
            <p className="text-xl mb-8">Get expert guidance for your Sweden study abroad journey</p>
            <a href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Start Your Application
            </a>
          </div>
        </section>
      </div>
    </Layout>;
};
export default StudyAbroadSweden;