import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { GraduationCap, Globe, Users, Award } from 'lucide-react';

const StudyAbroad = () => {
  const countries = [
    {
      name: 'Study in UK',
      flag: '🇬🇧',
      path: '/study-abroad/uk',
      description: 'World-class education with globally recognized degrees'
    },
    {
      name: 'Study in USA',
      flag: '🇺🇸', 
      path: '/study-abroad/usa',
      description: 'Leading universities and diverse academic opportunities'
    },
    {
      name: 'Study in Canada',
      flag: '🇨🇦',
      path: '/study-abroad/canada', 
      description: 'Quality education with excellent post-study work options'
    },
    {
      name: 'Study in Australia',
      flag: '🇦🇺',
      path: '/study-abroad/australia',
      description: 'Innovation-focused education in a multicultural environment'
    },
    {
      name: 'Study in New Zealand',
      flag: '🇳🇿',
      path: '/study-abroad/new-zealand',
      description: 'High-quality education with stunning natural landscapes'
    },
    {
      name: 'Study in Malta',
      flag: '🇲🇹',
      path: '/study-abroad/malta',
      description: 'English-taught programs in the heart of the Mediterranean'
    },
    {
      name: 'Study in Denmark',
      flag: '🇩🇰',
      path: '/study-abroad/denmark',
      description: 'Innovative education system promoting creativity and critical thinking'
    },
    {
      name: 'Study in Cyprus',
      flag: '🇨🇾',
      path: '/study-abroad/cyprus',
      description: 'Accessible European education with simplified visa procedures'
    },
    {
      name: 'Study in Malaysia',
      flag: '🇲🇾',
      path: '/study-abroad/malaysia',
      description: 'Quality education in a vibrant multicultural environment'
    },
    {
      name: 'Study in China',
      flag: '🇨🇳',
      path: '/study-abroad/china',
      description: 'Affordable education with extensive scholarship opportunities'
    },
    {
      name: 'Study in Sweden',
      flag: '🇸🇪',
      path: '/study-abroad/sweden',
      description: 'Innovative teaching methods with excellent living standards'
    },
    {
      name: 'Study in South Korea',
      flag: '🇰🇷',
      path: '/study-abroad/south-korea',
      description: 'Dynamic blend of tradition and innovation with excellent scholarships'
    },
    {
      name: 'Study in Russia',
      flag: '🇷🇺',
      path: '/study-abroad/russia',
      description: 'Globally recognized degrees with affordable education and no IELTS required'
    }
  ];

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-yellow-600" />,
      title: 'World-Class Education',
      description: 'Access to top-ranked universities and cutting-edge academic programs'
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-600" />,
      title: 'Global Opportunities',
      description: 'International exposure and networking opportunities worldwide'
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      title: 'Cultural Diversity',
      description: 'Experience diverse cultures and build lifelong international connections'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: 'Career Advancement',
      description: 'Enhanced career prospects with internationally recognized qualifications'
    }
  ];

  return (
    <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="bg-yellow-500 text-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Study Abroad - Countries</h1>
            <p className="text-xl">Explore world-class education opportunities across the globe</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Study Abroad?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Choose Your Destination</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countries.map((country, index) => (
                <Link 
                  key={index} 
                  to={country.path}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-yellow-200 group"
                >
                  <div className="text-center mb-4">
                    <span 
                      className="inline-block text-6xl mb-2"
                      role="img"
                      aria-label={`${country.name} flag`}
                      style={{
                        fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Android Emoji", "EmojiSymbols", sans-serif',
                        fontSize: '4rem',
                        lineHeight: '1',
                        display: 'inline-block',
                        textRendering: 'auto',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    >
                      {country.flag}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      {country.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-center">{country.description}</p>
                  <div className="text-yellow-600 font-semibold group-hover:underline text-center">
                    Learn More →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8">Get personalized guidance for your study abroad goals</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StudyAbroad;
