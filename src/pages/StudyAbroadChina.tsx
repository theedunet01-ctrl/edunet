
import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle, GraduationCap, Award, DollarSign, Globe } from 'lucide-react';
import chinaHero from '../assets/china-hero.jpg';

const StudyAbroadChina = () => {
  const scholarships = [
    'Chinese Government Scholarship (CSC)',
    'Belt and Road Initiative Scholarship',
    'Confucius Institute Scholarship',
    'Silk Road Scholarship',
    'University-Specific Scholarships (Tsinghua, Peking, Zhejiang, Fudan)',
    'Provincial & Local Government Scholarships',
    'Great Wall Scholarship',
    'Corporate Fellowships'
  ];

  const universities = [
    'China University of Petroleum, Beijing (CUPB)',
    'China University of Petroleum, East China',
    'Harbin Institute of Technology, Shenzhen City',
    'Northwestern Polytechnical University, Xi\'an City',
    'South China University of Technology, Guangzhou City',
    'Yunnan University, Kunming City',
    'Guizhou University, Guiyang City',
    'Fuzhou University of International Studies and Trade',
    'Civil Aviation University of China, Tianjin City',
    'Tianjin University, Tianjin City',
    'Zhongnan University of Economics and Law, Wuhan City',
    'Sichuan University, Chengdu City',
    'Beijing University of Technology, Beijing City',
    'Nanjing Tech University, Nanjing City',
    'Nanjing Normal University, Nanjing City',
    'Zhengzhou University, Zhengzhou City',
    'Shanghai Business School, Shanghai City',
    'Shanghai University of Technology',
    'Shanghai Polytechnic University, Shanghai',
    'WUCHANG UNIVERSITY OF TECHNOLOGY, Wuhan City',
    '& others'
  ];

  const bachelorDocs = [
    'Passport',
    'Photo with white Background',
    'SSC Certificate & Transcript',
    'HSC/Diploma Certificate & Transcript (Diploma 1-8 semester transcript)',
    'English Proficiency Certificate (6 month course certificate/IELTS5.5/Duolingo 90)',
    'Parents NID Card',
    'Police Clearance (we will assist you)',
    'Medical (we will assist you)',
    'Bank Statement (we will assist you)',
    'Study Plan (we will assist you)'
  ];

  const mastersDocs = [
    'Passport',
    'Photo with white Background',
    'Bachelor\'s Certificate & Transcript',
    'Study Plan (we will assist you)',
    'Two recommendation letters from two different Professors or Associate professors',
    'English Proficiency Certificate (6 month course certificate/IELTS5.5/Duolingo 90)',
    'Medical Report (we will assist you)',
    'Non-Criminal Certificate (we will assist you)',
    'Bank Statement (we will assist you)'
  ];

  const phdDocs = [
    'Passport',
    'Photo with white Background',
    'Master\'s Degree Certificate & Transcript',
    'IELTS 6.0 or TOEFL 80 or Equivalent English Proficiency Certificate',
    'Two recommendation letters from two different Professors or Associate professors',
    'Study plan/Research Plan (Minimum 1200 words)',
    'Health Checkup certificate',
    'Non-Criminal record/Police Clearance & translate copy (6 month validity)',
    'CV/Bio-data/Resume',
    'Valid ID card or passport photo page of the guardian',
    'Valid bank statement (more than 3000$; 6 month validity)',
    'Other supporting documents (Job Experience Publications, etc.)'
  ];

  const edunetServices = [
    'Help you choose the most favourable program and university',
    'Provide up-to-date information about admission to Chinese universities',
    '24/7 support through website, WhatsApp, Email or Facebook',
    'Speed and reliability in application process',
    'Partnership with 50+ TOP-200 QS world ranking universities',
    'Support until full admission and adaptation activities',
    'Help achieve success and fulfill dreams of quality education'
  ];

  return (
    <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${chinaHero})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">STUDY IN → CHINA</h1>
                <p className="text-xl opacity-90">Affordable education with extensive scholarship opportunities</p>
              </div>
            </div>
          </div>
        </section>

        {/* About China Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">About China</h2>
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                China excels through rapid innovation, global trade leadership, and robust infrastructure. As the world's second-largest economy, it's central to international business, manufacturing, and technological development. Government investment in education, AI, and green energy fuels long-term growth. Cities like Shanghai and Shenzhen attract global talent and startups, while the Belt and Road Initiative expands influence.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Its universities are climbing global rankings, offering competitive scholarships and programs. High-speed rail, 5G networks, and smart cities show futuristic ambition. Despite global challenges, China remains resilient, adaptable, and economically vital—making it an attractive choice for study, investment, and collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Why Study in China */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Should Study in China</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-yellow-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                China offers affordable, globally recognized education with increasing scholarship opportunities for Bangladeshi students. Its universities rank among the top in Asia, offering diverse programs—from medicine and engineering to business and technology—often taught in English. With strong diplomatic and trade ties between Bangladesh and China, students benefit from streamlined visa processes and cultural familiarity. China's innovation ecosystem, advanced infrastructure, and exposure to global industries open doors for career advancement. Living costs are relatively low, and the multicultural campuses foster networking with peers from across the world. Studying in China builds a competitive edge in the international job market.
              </p>
            </div>
          </div>
        </section>

        {/* Scholarship Opportunities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Scholarship Opportunities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 text-center">
                  <Award className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{scholarship}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employment Opportunities */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Employment Opportunities</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-yellow-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                When it comes to economics, China has been the world's fastest growing country for the past 30 years. Even during the financial crisis, China's economic growth has maintained a level of 8%, a pace unthinkable in other countries. China's GDP recently surpassed Japan's to become the world's second largest economy after the United States.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                The world's top 500 companies all do business in China, with many choosing to base their Asia-Pacific headquarters in the bustling Chinese cities of Hong Kong, Shanghai and Beijing. The current rise of China has made it very clear that people who can speak Chinese and have firsthand experience of living in China are going to have a great advantage in terms of employment.
              </p>
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Universities in China</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {universities.map((uni, index) => (
                <div key={index} className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{uni}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Required Documents</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Bachelor Program */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bachelor Program</h3>
                <ul className="space-y-2">
                  {bachelorDocs.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Master's Program */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Master's Program</h3>
                <ul className="space-y-2">
                  {mastersDocs.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PhD Program */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">PhD/Doctoral Degree</h3>
                <ul className="space-y-2">
                  {phdDocs.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
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
                {edunetServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Study in China?</h2>
            <p className="text-xl mb-8">Get expert guidance for your China study abroad journey</p>
            <a
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Application
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StudyAbroadChina;
