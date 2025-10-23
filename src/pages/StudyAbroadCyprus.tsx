
import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle, GraduationCap, Briefcase, Users, MapPin } from 'lucide-react';
import cyprusHero from '../assets/cyprus-hero.jpg';

const StudyAbroadCyprus = () => {
  const whyCyprus = [
    { icon: '✅', title: 'Affordable Education', description: 'Tuition fees and living costs are lower than many Western countries.' },
    { icon: '📚', title: 'Study Gap', description: 'Accept study gap.' },
    { icon: '🌍', title: 'European Recognition', description: 'Degrees are EU-accredited, supporting global career mobility.' },
    { icon: '🗣️', title: 'English-Medium Programs', description: 'Most courses are taught in English, easing academic transition.' },
    { icon: '👨‍🎓', title: 'Favorable Visa Policies', description: 'Streamlined student visa process and post-study work options.' },
    { icon: '🤝', title: 'Welcoming Environment', description: 'Multicultural society with supportive communities for international students.' },
    { icon: '💼', title: 'Part-Time Work Opportunities', description: 'Students can work during studies for valuable experience.' },
    { icon: '🧭', title: 'Strategic Location', description: 'Positioned between Europe, Asia, and Africa — ideal for networking and travel.' },
    { icon: '🌞', title: 'Safe & Comfortable Living', description: 'Mediterranean climate, low crime rate, and relaxed lifestyle.' },
    { icon: '🎓', title: 'Variety of Programs', description: 'Options range from vocational to postgraduate across diverse fields.' }
  ];

  const universities = [
    '🎓 University of Nicosia',
    '🏛️ European University Cyprus',
    '🌐 University of Central Lancashire (UCLan) Cyprus',
    '🧠 Cyprus International University',
    '🏫 Near East University',
    '🧪 Cyprus University of Technology',
    '💼 Cyprus International Institute of Management (CIIM)',
    '🧮 Frederick University',
    '🎨 Alexander College'
  ];

  const edunetFacilities = [
    'Student will get all kind of Support from our agent',
    'Airport Pickup',
    'Accommodation Support',
    'Job Support',
    'Processing through immigration expert',
    'Career Counseling'
  ];

  return (
    <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${cyprusHero})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">STUDY IN → CYPRUS</h1>
                <p className="text-xl opacity-90">Accessible European education with simplified visa procedures</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Cyprus Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Cyprus</h2>
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Cyprus offers a smooth, accessible path for Bangladeshi students seeking quality European education without the complexity of larger EU countries. With simplified visa procedures, flexible admission policies, and no language test requirements in many institutions, entry is easier and faster. English-taught programs are widely available, especially in fields like business, IT, tourism, and healthcare. Tuition fees and living costs are comparatively lower than Western Europe, and part-time work rights help manage expenses.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Located at the crossroads of Europe, Asia, and Africa, Cyprus acts as a gateway to broader EU opportunities. Students can explore Schengen countries, participate in exchange programs, and gain access to European internships and job markets. The warm Mediterranean climate, multicultural society, and safe environment add to its appeal. Plus, many private universities offer scholarships and transfer options to other European universities—making Cyprus a strategic first step in an international academic journey.
              </p>
            </div>
          </div>
        </section>

        {/* Why Study in Cyprus */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Students Should Consider Studying in Cyprus</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyCyprus.map((reason, index) => (
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

        {/* Student Job Opportunities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Student Job Opportunities</h2>
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <div className="flex items-center mb-4">
                <Briefcase className="w-8 h-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Work Opportunities</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                International students in Cyprus can work part-time during academic semesters (up to 20 hours/week) and full-time during holidays (up to 38 hours/week). Common sectors include hospitality, retail, food service, caregiving, and delivery. Roles like waiters, kitchen assistants, cleaners, and retail staff are widely available, especially in cities like Limassol, Nicosia, and Paphos.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Jobs in agriculture, manufacturing, and domestic services also offer flexible hours. Students must hold a valid student permit, a signed employment contract, and proof of full-time enrollment. While wages may be modest compared to other EU countries, the experience helps students integrate into local culture, build networks, and manage living expenses. Cyprus's safe environment and EU labor standards ensure fair treatment and legal protections.
              </p>
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Universities in Cyprus</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.map((uni, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{uni}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUNET Facilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Facilities of EDUNET</h2>
            
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {edunetFacilities.map((facility, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Study in Cyprus?</h2>
            <p className="text-xl mb-8">Get expert guidance for your Cyprus study abroad journey</p>
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

export default StudyAbroadCyprus;
