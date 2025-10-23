
import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle, GraduationCap, DollarSign, Globe, Users, FileText } from 'lucide-react';
import southKoreaHero from '../assets/south-korea-hero.jpg';

const StudyAbroadSouthKorea = () => {
  const whySouthKorea = [
    { icon: '🎓', title: 'Academic Excellence', description: 'Home to top-ranked universities like Seoul National University, KAIST, and Yonsei with strong research programs.' },
    { icon: '💰', title: 'Affordable & Funded Opportunities', description: 'Global Korea Scholarship (GKS) covers tuition, airfare, stipend, and language training.' },
    { icon: '🌍', title: 'International Student Support', description: 'Dedicated international offices with housing, visa, and academic guidance support.' },
    { icon: '🧳', title: 'Visa & Work Benefits', description: 'D-2 student visa allows part-time work with post-study opportunities in tech and business.' },
    { icon: '🎉', title: 'Cultural & Personal Growth', description: 'Experience K-pop, K-dramas, and traditional Korean culture in a safe, modern environment.' },
  ];

  const universities = [
    'PUSAN NATIONAL UNIVERSITY, BUSAN',
    'KYUNGSUNG UNIVERSITY, BUSAN',
    'DONG-A UNIVERSITY, BUSAN',
    'TONGMYONG UNIVERSITY, BUSAN',
    'DONG EUI UNIVERSITY, BUSAN',
    'SEJONG UNIVERSITY, SEOUL',
    'JEONBUK NATIONAL UNIVERSITY, JEONJU',
    'NAMSEOUL UNIVERSITY, CHEONAN',
    'DONGSHIN UNIVERSITY, NAJU',
    'FAR EAST UNIVERSITY, EUMSEONG-GUN',
    'WOOSONG UNIVERSITY, DAEJEON',
    'HANYANG UNIVERSITY, SEOUL',
    'SILLA UNIVERSITY, BUSAN',
    'KYUNG HEE UNIVERSITY, SEOUL',
    'ASSIST UNIVERSITY, SEOUL',
    'SINGYEONGJU UNIVERSITY'
  ];

  const requirements = [
    'All certificates and Transcripts (SSC, HSC, Bachelor\'s)',
    'Proof of language proficiency (IELTS/TOEFL)',
    'Passport copy',
    'Photo with white background',
    'TIN Certificate',
    'TAX Certificate',
    'Birth certificate',
    'Family relation certificate',
    'Self NID, Parents NID',
    'Bank statement (20-25 LAC. Last 6 months.)',
    'Desired Major',
    'Phone number',
    'SOP'
  ];

  return (
    <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${southKoreaHero})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">STUDY IN → SOUTH KOREA</h1>
                <p className="text-xl opacity-90">Dynamic blend of tradition and innovation with excellent scholarships</p>
              </div>
            </div>
          </div>
        </section>

        {/* About South Korea Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">About South Korea</h2>
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                🇰🇷 South Korea is a dynamic blend of tradition and innovation, making it a top destination for international students. With world-class universities like Seoul National, Korea University, and Yonsei, the country offers high-quality education in fields ranging from engineering to arts. The government actively supports global learners through scholarships like the Global Korea Scholarship (GKS).
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                International students benefit from modern campus dormitories, often equipped with meal plans, study lounges, and fitness centers. Off-campus options include goshiwons (compact, affordable rooms), sharehouses, and studio apartments, catering to various budgets. Many universities assist with housing placement and offer language support services, student associations, and health insurance.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                South Korea's efficient public transport, vibrant culture, and safe cities enhance the student experience. From K-pop concerts to serene temples, life outside the classroom is equally enriching. With its welcoming atmosphere and academic excellence, South Korea continues to attract students from around the globe.
              </p>
            </div>
          </div>
        </section>

        {/* Why South Korea */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose South Korea</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whySouthKorea.map((reason, index) => (
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
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Special Note:</strong> A welcoming environment with over 1,200 Bangladeshi students enrolled in 2024, making it easier to adapt and build connections.
              </p>
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Universities in South Korea</h2>
            
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
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Requirements</h2>
            
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
            <h2 className="text-3xl font-bold mb-4">Ready to Study in South Korea?</h2>
            <p className="text-xl mb-8">Get expert guidance for your South Korea study abroad journey</p>
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

export default StudyAbroadSouthKorea;
