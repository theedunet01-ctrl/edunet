import React from "react";
import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";

const About = () => {
  return (
    <Layout>
      <div className="pt-8 bg-white">
        {/* Hero Section */}
        <section className="bg-yellow-500 text-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About EDUNET CONSULTANCY
            </h1>
            <p className="text-xl">Edunet Education Consultancy</p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Leadership Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
              <ProfileCard
                avatarUrl="/uploads/68c367dd-fdec-46b4-b7a8-2d04d67cc00c.png"
                name="MD Mayen Uddin"
                title="Chief Executive Officer"
                designation=""
                details="Visionary leader driving Edunet's mission to connect students with global education opportunities and helping them chase their dreams."
                handle="ceo.edunet"
                status="Available"
                contactText="Contact CEO"
                showUserInfo={false}
                onContactClick={() => console.log("Contact MD Mayen Uddin")}
              />

              <ProfileCard
                avatarUrl="/uploads/cd5a7225-ef45-45da-aaf4-3e07ff70f994.png"
                name="Kazi Md Ayub"
                title="Assistant Director"
                designation=""
                details="Dedicated to student success, providing personalized support and expert counseling to help students achieve their academic goals abroad."
                handle="director.edunet"
                status="Available"
                contactText="Contact Director"
                showUserInfo={false}
                onContactClick={() => console.log("Contact Kazi Md Ayub")}
              />
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  Edunet Education Consultancy is committed to empowering
                  Bangladeshi students to study at top global universities. We
                  guide you every step of the way to unlock your abroad journey.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be the leading study abroad consultancy in Bangladesh,
                  recognized for our excellence in student guidance, IELTS
                  coaching, and visa consultation services.
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Values
                </h3>
                <p className="text-gray-600">
                  Integrity, Excellence, Student-Centric Approach, Innovation,
                  and Commitment to helping students achieve their international
                  education goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Established with a vision to bridge the gap between Bangladeshi
                students and international education opportunities, EDUNET
                CONSULTANCY has grown to become a trusted name in study abroad
                consulting. Our experienced team has successfully guided
                hundreds of students to prestigious universities across the
                globe, helping them unlock their potential and achieve their
                academic dreams.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
