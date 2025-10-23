
import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle, GraduationCap, DollarSign, Globe, Users, FileText } from 'lucide-react';
import russiaHero from '../assets/russia-hero.jpg';

const StudyAbroadRussia = () => {
  const whyRussia = [
    { icon: '🎓', title: 'Academic Advantages', description: 'Top universities like Moscow State and Saint Petersburg State with globally recognized degrees.' },
    { icon: '💰', title: 'Financial Benefits', description: 'Low living costs ($300-$800/month) and affordable flights (Tk 50,000-80,000).' },
    { icon: '🌍', title: 'Cultural Opportunities', description: 'Study alongside students from over 150 countries with international exposure.' },
    { icon: '📚', title: 'No IELTS Required', description: 'Free Russian language preparatory courses provided before academic studies.' },
    { icon: '💼', title: 'Work Opportunities', description: 'Part-time work options like tutoring, hospitality, or freelancing available.' },
  ];

  const universities = [
    'RUDN University in Moscow',
    'Moscow State Linguistic University',
    'Moscow State Moscow Polytechnic University',
    'State University of Land Use Planning Moscow',
    'HSE University',
    'Ryazan State Agriculture University',
    'Tula State University',
    'Yaroslavl State University',
    'Volgograd State Socio-Pedagogical University'
  ];

  const requirements = [
    'Passport',
    'SSC Certificate + Mark sheet',
    'HSC Certificate + Mark sheet',
    '2 Copy Passport size picture',
    'Bank statement',
    'SOP',
    'Police Clearance',
    'Medical Certificate'
  ];

  return (
    <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${russiaHero})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">STUDY IN → RUSSIA</h1>
                <p className="text-xl opacity-90">Globally recognized degrees with affordable education and no IELTS required</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Russia Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">About Russia</h2>
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Russia, the largest country in the world, spans 11 time zones across Eastern Europe and Northern Asia. It boasts a rich cultural heritage, with iconic contributions to literature, music, ballet, and science. The capital, Moscow, and historic Saint Petersburg are centers of politics, art, and architecture. Russia's geography is incredibly varied—ranging from tundra and taiga forests to mountains and lakes, including Lake Baikal, the deepest in the world.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                The country is a major global power with vast natural resources, especially oil and gas. Its economy blends industrial strength with agricultural production. Russia is home to over 140 million people, with more than 100 ethnic groups and languages. Despite political complexities, it remains influential in global affairs and is a permanent member of the UN Security Council. From its imperial past to its modern ambitions, Russia continues to shape history through resilience, innovation, and cultural depth.
              </p>
            </div>
          </div>
        </section>

        {/* Why Russia */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Russia Is a Smart Choice for Bangladeshi Students</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyRussia.map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
                  <div className="flex items-start mb-3">
                    <span className="text-2xl mr-3">{reason.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{reason.title}</h3>
                  </div>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Success Stories</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Graduates like Dr. Farhana Akter and Tahmid Hasan have built thriving careers in Bangladesh and abroad, showcasing the quality and recognition of Russian education worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Universities in Russia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {universities.map((uni, index) => (
                <div key={index} className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 text-yellow-600 mr-3" />
                    <span className="text-gray-900 font-medium">{uni}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Required Documents</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-yellow-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Study in Russia?</h2>
            <p className="text-xl mb-8">Get expert guidance for your Russia study abroad journey</p>
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

export default StudyAbroadRussia;
