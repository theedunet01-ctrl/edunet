
import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle, GraduationCap, Globe, Users, Award, DollarSign, MapPin, Sun, Shield } from 'lucide-react';
import maltaHero from '../assets/malta-hero.jpg';

const StudyAbroadMalta = () => {
  const whyMalta = [
    { icon: '🗣️', title: 'English-Friendly Education', description: 'English is an official language, making academic and daily life smoother.' },
    { icon: '🎓', title: 'Recognized Institutions', description: 'Universities like the University of Malta offer globally accepted degrees.' },
    { icon: '💸', title: 'Affordable Living & Tuition', description: 'Costs are lower than in many Western European countries.' },
    { icon: '🎫', title: 'High Visa Success Rate', description: 'Streamlined processes and favorable policies support Bangladeshi applicants.' },
    { icon: '💼', title: 'Work While Studying', description: 'Legal part-time work options provide extra income and experience.' },
    { icon: '🚍', title: 'Free Student Transport', description: 'All students get access to Malta\'s free public transport system.' },
    { icon: '🌞', title: 'Safe & Comfortable Lifestyle', description: 'Sunny climate, low crime, and relaxed environment ideal for students.' },
    { icon: '🌐', title: 'Gateway to Europe', description: 'Strategic location with access to travel and career opportunities across the EU.' },
    { icon: '🧑‍🤝‍🧑', title: 'Multicultural Society', description: 'Friendly, inclusive environment with active international student communities.' },
    { icon: '🧭', title: 'Career Pathways', description: 'Post-study work options make Malta attractive for long-term prospects.' }
  ];

  const universities = [
    { icon: '🇺🇸', name: 'American University of Malta (AUM)', description: 'Career-focused programs in business, engineering, and technology; follows a U.S. liberal arts model.' },
    { icon: '🏫', name: 'Malta College of Arts, Science & Technology (MCAST)', description: 'Known for vocational and technical education; ideal for diploma and applied programs.' },
    { icon: '🌍', name: 'Global College Malta', description: 'Offers business and management degrees with international recognition.' },
    { icon: '🧠', name: 'St. Martin\'s Institute of Higher Education', description: 'UK-affiliated degrees in computing and business; popular for flexible entry options.' },
    { icon: '🏛️', name: 'London School of Commerce Malta', description: 'Offers British business degrees at competitive tuition rates.' },
    { icon: '🧪', name: 'Queen Mary University of London (Malta Campus)', description: 'Specializes in medicine; highly selective and globally respected.' },
    { icon: '🎨', name: 'European Graduate School (EGS)', description: 'Focuses on arts, media, and philosophy; attracts creative and research-oriented students.' },
    { icon: '🎓', name: 'University of Malta', description: 'Oldest and most prestigious public university; offers a wide range of undergraduate and postgraduate programs.' }
  ];

  const admissionDocs = [
    'Completed Application Form – Filled accurately with personal and academic details.',
    'Academic Transcripts & Certificates – SSC, HSC, Bachelor\'s (if applying for Master\'s); must be translated into English.',
    'English Proficiency Certificate – IELTS (typically 6.0 overall), TOEFL, or equivalent.',
    'Statement of Purpose (SOP) – Explains your academic goals and reasons for choosing Malta.',
    'Letters of Recommendation (LOR) – Usually 2–3 from academic or professional referees.',
    'Curriculum Vitae (CV) – Highlights education, work experience, and relevant skills.',
    'Valid Passport – Must be valid for the entire study duration.',
    'Proof of Financial Means – Bank statements or sponsor letter showing ability to cover tuition and living costs.',
    'Medical Certificate – Confirms good health, issued by a registered doctor.',
    'Passport-Sized Photos – Typically two, with white background.'
  ];

  const visaDocs = [
    'Acceptance Letter from Maltese University – Official proof of admission.',
    'Visa Application Form – Completed and signed.',
    'Visa Fee Payment Receipt',
    'Biometric Data Submission – Fingerprints and photo at the embassy.',
    'Health Insurance',
    'Police Clearance Certificate – Confirms no criminal record.'
  ];

  return (
    <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${maltaHero})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">STUDY IN → MALTA</h1>
                <p className="text-xl opacity-90">English-taught programs in the heart of the Mediterranean</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Malta Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">About Malta</h2>
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Malta offers a compelling mix of affordability, academic quality, and lifestyle appeal for international students. With English as an official language and a British-influenced education system, students enjoy smooth academic integration. Tuition fees and living costs are lower than in many EU countries, and students can work part-time during studies.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                The country's high visa success rate and post-study work options make it attractive for long-term planning. Malta's universities—like the University of Malta and MCAST—offer globally recognized degrees across diverse fields.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Beyond academics, Malta boasts a safe, sunny Mediterranean environment, free public transport for students, and a vibrant multicultural community. Its strategic location also opens doors to travel and career opportunities across Europe.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Whether you're pursuing undergraduate, postgraduate, or vocational studies, Malta provides a well-rounded, enriching experience that balances education with quality of life.
              </p>
            </div>
          </div>
        </section>

        {/* Why Study in Malta */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Should Consider Studying in Malta</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyMalta.map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
                  <div className="flex items-start mb-3">
                    <span className="text-2xl mr-3">{reason.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{reason.title}</h3>
                  </div>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Universities in Malta</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {universities.map((uni, index) => (
                <div key={index} className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <div className="flex items-start mb-3">
                    <span className="text-2xl mr-3">{uni.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{uni.name}</h3>
                  </div>
                  <p className="text-gray-600">{uni.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Required Section */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Documents Required for Bangladeshi Students</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* University Admission Documents */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">📚</span>
                  University Admission Documents
                </h3>
                <ul className="space-y-3">
                  {admissionDocs.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Student Visa Documents */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🛫</span>
                  Student Visa Documents
                </h3>
                <ul className="space-y-3">
                  {visaDocs.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Study in Malta?</h2>
            <p className="text-xl mb-8">Get expert guidance for your Malta study abroad journey</p>
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

export default StudyAbroadMalta;
