import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  return <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="bg-yellow-500 text-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact EDUNET CONSULTANCY</h1>
            <p className="text-xl">Have questions? Reach out to us and we'll help you unlock your abroad journey!</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-yellow-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Assesment Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Qualifications</label>
                    <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-yellow-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        System Imperial Complex, 3rd Floor<br />
                        153 Kapasgola Road, Chattogram 4203
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <div className="space-y-1">
                        <a href="tel:+8801304113368" className="block text-green-600 hover:underline">+8801701650650</a>
                        <a href="tel:+8801958484850" className="block text-green-600 hover:underline">+8801959484853</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:info@edunetconsultancy.com" className="text-green-600 hover:underline">info@theedunet.com</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                      <p className="text-gray-600">
                        Saturday - Thursday: 10:00 AM - 6:30 PM<br />
                        Friday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Find Us</h3>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14758.489764!2d91.8312346!3d22.3456789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64d4f8f8f%3A0x123456789abcdef0!2sSystem%20Imperial%20Complex!5e0!3m2!1sen!2sbd!4v1649876543210!5m2!1sen!2sbd" width="100%" height="300" style={{
                    border: 0
                  }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-64 md:h-80"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>;
};
export default Contact;