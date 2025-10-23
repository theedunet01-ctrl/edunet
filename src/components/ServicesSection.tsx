
import React from 'react';
import { FileText, GraduationCap, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="w-12 h-12 text-yellow-600 drop-shadow-[0_1px_2px_rgba(202,138,4,0.11)]" />,
      title: 'Visa Consultation',
      description: 'Official visa guidance for UK, USA, Canada, Australia.'
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-yellow-600 drop-shadow-[0_1px_2px_rgba(202,138,4,0.11)]" />,
      title: 'University Selection',
      description: 'Personalized shortlists based on your profile.'
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-600 drop-shadow-[0_1px_2px_rgba(202,138,4,0.11)]" />,
      title: 'Application Assistance',
      description: 'Essay editing, document processing, interview prep.'
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-transparent ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 drop-shadow">Our Services</h2>
          <p className="text-green-700 max-w-2xl mx-auto">
            Comprehensive support for your study abroad journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}
                 className="bg-gradient-to-b from-yellow-50 to-white/80 p-7 rounded-2xl shadow-xl border border-yellow-200 hover:scale-105 transition-all duration-400 
                 hover:-translate-y-1 relative after:absolute after:inset-0 after:rounded-2xl after:opacity-70 after:z-0 after:bg-[radial-gradient(ellipse_at_70%_0%,rgba(34,197,94,0.03)_40%,transparent_100%)]">
              <div className="flex justify-center mb-4 z-10 relative">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-3 z-10 relative">
                {service.title}
              </h3>
              <p className="text-green-700 z-10 relative">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
