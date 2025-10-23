
import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle, GraduationCap, DollarSign, Globe, Users, FileText } from 'lucide-react';
import malaysiaHero from '../assets/malaysia-hero.jpg';

const StudyAbroadMalaysia = () => {
  const whyMalaysia = [
    { icon: '💰', title: 'Affordable Education', description: 'Tuition fees and living costs are significantly lower than in Western countries.' },
    { icon: '🗣️', title: 'English-Medium Programs', description: 'Most courses are taught in English, easing academic and visa processes.' },
    { icon: '📚', title: 'No IELTS Needed', description: 'Some universities waive English proficiency tests for Bangladeshi applicants.' },
    { icon: '🤝', title: 'Cultural Familiarity', description: 'Shared values, halal food, and a large Bangladeshi community create a welcoming environment.' },
    { icon: '🎓', title: 'Top-Ranked Universities', description: 'Access to world-class institutions with globally recognized degrees.' },
    { icon: '🏆', title: 'Scholarship Opportunities', description: 'Merit-based and need-based scholarships reduce financial burden.' },
    { icon: '💼', title: 'Work While Studying', description: 'Students can work up to 20 hours/week during semesters.' },
    { icon: '📋', title: 'Fast Visa Processing', description: 'Streamlined student visa system with high approval rates.' },
    { icon: '✈️', title: 'Proximity & Connectivity', description: 'Short flight distance and minimal time difference with Bangladesh.' },
    { icon: '🚀', title: 'Career Pathways', description: 'Post-study work options and regional job opportunities in Asia-Pacific.' }
  ];

  const publicUniversities = [
    { name: 'Universiti Malaya (UM)', location: 'Kuala Lumpur' },
    { name: 'Universiti Sains Malaysia (USM)', location: 'Penang' },
    { name: 'Universiti Kebangsaan Malaysia (UKM)', location: 'Selangor' },
    { name: 'Universiti Putra Malaysia (UPM)', location: 'Selangor' },
    { name: 'Universiti Teknologi Malaysia (UTM)', location: 'Johor' },
    { name: 'Universiti Teknologi MARA (UiTM)', location: 'Selangor' },
    { name: 'Universiti Islam Antarabangsa Malaysia (UIAM)', location: 'Selangor' },
    { name: 'Universiti Utara Malaysia (UUM)', location: 'Kedah' },
    { name: 'Universiti Malaysia Sarawak (UNIMAS)', location: 'Sarawak' },
    { name: 'Universiti Malaysia Sabah (UMS)', location: 'Sabah' },
    { name: 'Universiti Pendidikan Sultan Idris (UPSI)', location: 'Perak' },
    { name: 'Universiti Sains Islam Malaysia (USIM)', location: 'Negeri Sembilan' },
    { name: 'Universiti Malaysia Terengganu (UMT)', location: 'Terengganu' },
    { name: 'Universiti Tun Hussein Onn Malaysia (UTHM)', location: 'Johor' }
  ];

  const govtLinkedUniversities = [
    { name: 'UNITEN: University of Tenaga Nasional (The National Energy University Malaysia)', location: 'Selangor, Malaysia' },
    { name: 'UNIKL: University of Kuala Lumpur', location: 'Kuala Lumpur, Malaysia' },
    { name: 'MMU: Multimedia University', location: 'Cyberjaya, Malaysia' },
    { name: 'UTP: University Technology Petronas', location: 'Malaysia' }
  ];

  const whyUsFeatures = [
    '100% VISA ASSURANCE',
    'JOB SUPPORT',
    'AIRPORT PICKUP',
    'CREDIT TRANSFER SUPPORT',
    'SPOUSE VISA',
    'ACCOMMODATION'
  ];

  const requirements = [
    'ACADEMICS',
    'PASSPORT',
    'PICTURE'
  ];

  return (
    <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${malaysiaHero})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">STUDY IN → MALAYSIA</h1>
                <p className="text-xl opacity-90">Quality education in a vibrant multicultural environment</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Malaysia Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">About Malaysia</h2>
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Malaysia is a vibrant tapestry of cultures, blending Malay, Chinese, Indian, and indigenous traditions into a uniquely harmonious society. Its people are known for their warmth, hospitality, and deep-rooted respect for diversity. From colorful festivals like Hari Raya and Thaipusam to traditional arts and crafts, culture thrives in every corner.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                For international students, Malaysia offers high-quality education at affordable costs, with English widely used in universities. Institutions like Universiti Malaya and Monash Malaysia attract students from over 150 countries, offering globally recognized degrees and multicultural campus life.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Food is a national obsession—expect bold flavors and endless variety. Signature dishes include nasi lemak, char kway teow, and roti canai, often enjoyed at bustling hawker stalls. Whether you're exploring heritage sites or sipping teh tarik at a local café, Malaysia promises a rich, immersive experience that's both academically rewarding and culturally unforgettable.
              </p>
            </div>
          </div>
        </section>

        {/* Why Malaysia */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Bangladeshi Students Choose Malaysia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyMalaysia.map((reason, index) => (
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🎓 DEGREE/CREDIT TRANSFER PROGRAM</h4>
                  <p className="text-gray-600">Flexible transfer options available</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🏆 DUAL DEGREE</h4>
                  <p className="text-gray-600">Earn degrees from multiple institutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Universities in Malaysia</h2>
            
            {/* Public Universities */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Public Universities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {publicUniversities.map((uni, index) => (
                  <div key={index} className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-start">
                      <GraduationCap className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <span className="text-gray-900 font-medium block">{uni.name}</span>
                        <span className="text-gray-600 text-sm">{uni.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Government Linked Universities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Government Linked Universities</h3>
              <div className="grid grid-cols-1 gap-4">
                {govtLinkedUniversities.map((uni, index) => (
                  <div key={index} className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-start">
                      <GraduationCap className="w-5 h-5 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <span className="text-gray-900 font-medium block">{uni.name}</span>
                        <span className="text-gray-600 text-sm">{uni.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose EDUNET</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-yellow-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {whyUsFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Required Documents</h2>
            
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700 font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Study in Malaysia?</h2>
            <p className="text-xl mb-8">Get expert guidance for your Malaysia study abroad journey</p>
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

export default StudyAbroadMalaysia;
