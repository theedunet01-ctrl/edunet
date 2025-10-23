import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative flex items-center min-h-[500px] z-20 select-none text-base px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center h-full">
            <h1
              className="font-bold text-3xl md:text-5xl lg:text-6xl mb-6 text-green-800 leading-tight drop-shadow-sm"
              style={{ letterSpacing: ".02em" }}
            >
              Chase Your Dream with Edunet
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-8 text-green-700 leading-relaxed drop-shadow-sm">
              Your trusted gateway to global education and IELTS success
            </p>
            <div className="flex flex-col sm:flex-row gap-6 relative z-30">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-yellow-500 text-green-800 px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-yellow-600 hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-2 border-yellow-400 min-w-[200px]"
              >
                Start Your Journey
                <svg
                  className="ml-3 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-white-700 text-yellow-100 px-8 py-4 rounded-xl text-lg font-bold black-lg hover:shadow-xl hover:bg-green-800 transform hover:scale-105 transition-all duration-300 border-2 border-green-600 min-w-[200px]"
              >
                Explore Services
                <svg
                  className="ml-3 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center items-center h-full">
            <img
              src="/uploads/30ef84e6-efb8-46e8-8a51-c7c37d31ade3.png"
              alt="Study abroad illustration"
              className="w-full h-auto object-contain max-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
