
import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle, GraduationCap, Lightbulb, Users, Award, DollarSign } from 'lucide-react';
import denmarkHero from '../assets/denmark-hero.jpg';

const StudyAbroadDenmark = () => {
  const universities = [
    'NIELS BROCK COPENHAGEN BUSINESS COLLEGE',
    'VIA UNIVERSITY COLLEGE', 
    'ROSKILDE UNIVERSITY',
    'Aalborg University',
    'University of Southern Denmark',
    'University of Copenhagen',
    'And Many More...'
  ];

  const studentDocs = [
    'Updated Curriculum-vitae (C.V.)',
    'Academic transcripts & certificates',
    'IELTS test report',
    'Passport certified copy',
    'Case order fee payment receipt',
    'Statement of Purpose (SOP)',
    'Police clearance certificate original (If available)',
    'Work Experience certificate (If applicable)',
    'Photograph 4 copy (35-45 mm size)',
    'Letter of recommendation (If applicable)',
    'Study continue certificate (If applicable)'
  ];

  const entryRequirements = [
    { program: 'AP degree', requirement: 'HSC+1-2 years\' education/A Level', ielts: '6.0 overall' },
    { program: 'Bachelor', requirement: 'min HSC/HSC+1-2 years (depend on institutions)', ielts: '6.0/6.5' },
    { program: 'Top-up bachelor', requirement: '3-4 years\' bachelor/equivalent study', ielts: '6.0/6.5' },
    { program: 'Pre-master\'s', requirement: 'min bachelor from different field of study/UK 3rd class', ielts: '5.0 in each component' },
    { program: 'Master program', requirement: 'min 4 Years bachelor/1 Year master degree', ielts: '6.5' }
  ];

  const studyCosts = [
    { program: 'AP program', cost: '€7,000 - €9,000' },
    { program: 'Bachelor program', cost: '€8,000 - €15,000' },
    { program: 'Top-up bachelor program', cost: '€7,000 - €11,500' },
    { program: 'Pre-master program', cost: '€10,000 - €12,200' },
    { program: 'Master\'s program', cost: '€8,000 - €15,000' }
  ];

  return (
    <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${denmarkHero})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">STUDY IN → DENMARK</h1>
                <p className="text-xl opacity-90">Innovative education system promoting creativity and critical thinking</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Study in Denmark Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Study in Denmark</h2>
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The Danish educational system is designed to promote creativity, innovation, analytical and critical thinking. As a student in Denmark, students will be met by an up-to-date learning environment where they can learn from industry experts and undertake internships in internationally recognized organizations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Furthermore, global partnerships between higher education institutions, businesses, science parks and public research institutes ensure that study and research in Denmark reflect the latest knowledge and meet the needs of a global labor market.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                In Denmark, higher education is focused on bringing about solutions for the real-world. Thus, traditional lectures are combined with industrial collaborations and teaching methods that promote students' ability to use what they have learned and to turn new knowledge into innovative solutions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                This way of studying requires a high degree of personal initiative and independent thinking. Thus, for some studying in Denmark can be challenging and different from what they are used to. We feel confident that it will inspire you and help you succeed in whatever you decide to do in life.
              </p>
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Denmark Institutes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.map((uni, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <GraduationCap className="w-8 h-8 text-yellow-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">{uni}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Visa Checklist */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Denmark Student Visa Check-list</h2>
            
            <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Student documents check-list:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studentDocs.map((doc, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Entry Requirements */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Minimum Entry Requirements</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg border border-yellow-200">
                <thead className="bg-yellow-500 text-gray-900">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Program</th>
                    <th className="px-6 py-4 text-left font-semibold">Academic Requirement</th>
                    <th className="px-6 py-4 text-left font-semibold">IELTS Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {entryRequirements.map((req, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{req.program}</td>
                      <td className="px-6 py-4 text-gray-700">{req.requirement}</td>
                      <td className="px-6 py-4 text-gray-700">{req.ielts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 bg-white p-6 rounded-lg border border-yellow-200">
              <p className="text-sm text-gray-600">
                <strong>NB:</strong> English proficiency test certificate may be waived if the applicant completes their bachelor from native English speaking countries such as UK, USA, Australia, Canada & New Zealand.
              </p>
            </div>
          </div>
        </section>

        {/* Study Costs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Study Cost in Denmark</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyCosts.map((cost, index) => (
                <div key={index} className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 text-center">
                  <DollarSign className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cost.program}</h3>
                  <p className="text-xl font-bold text-yellow-600">{cost.cost}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Cost</h3>
              <p className="text-gray-700 leading-relaxed">
                First of all, students need to pay tuition fees to the university to get ST1 Application Form. Normally most of the universities take about 50% to 100% of tuition fees in advance for year one. Beside this student need to pay the Case Order ID fee in advance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Study in Denmark?</h2>
            <p className="text-xl mb-8">Get expert guidance for your Denmark study abroad journey</p>
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

export default StudyAbroadDenmark;
