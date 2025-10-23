
import React from 'react';

const AnimatedEarthMap = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-yellow-50 via-green-50 to-yellow-100">
      {/* Educational Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="education-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Graduation Cap */}
              <g transform="translate(30, 30)">
                <path d="M30 15 L45 10 L60 15 L45 20 Z" fill="#15803d" opacity="0.3"/>
                <rect x="42" y="15" width="6" height="15" fill="#15803d" opacity="0.3"/>
                <circle cx="48" cy="32" r="3" fill="#15803d" opacity="0.3"/>
              </g>
              
              {/* Book */}
              <g transform="translate(70, 20)">
                <rect x="0" y="0" width="20" height="25" fill="#eab308" opacity="0.3"/>
                <rect x="2" y="5" width="16" height="2" fill="#15803d" opacity="0.2"/>
                <rect x="2" y="10" width="16" height="2" fill="#15803d" opacity="0.2"/>
                <rect x="2" y="15" width="16" height="2" fill="#15803d" opacity="0.2"/>
              </g>
              
              {/* Globe */}
              <g transform="translate(10, 70)">
                <circle cx="15" cy="15" r="12" fill="none" stroke="#15803d" strokeWidth="2" opacity="0.3"/>
                <path d="M3 15 Q15 5 27 15 Q15 25 3 15" fill="none" stroke="#15803d" strokeWidth="1" opacity="0.3"/>
                <path d="M15 3 Q20 15 15 27 Q10 15 15 3" fill="none" stroke="#15803d" strokeWidth="1" opacity="0.3"/>
              </g>
              
              {/* Airplane */}
              <g transform="translate(60, 80)">
                <path d="M15 10 L25 8 L30 10 L25 12 L20 15 L15 12 Z" fill="#eab308" opacity="0.4"/>
                <path d="M10 10 L15 8 L20 10 L15 12 Z" fill="#eab308" opacity="0.3"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#education-pattern)"/>
        </svg>
      </div>

      {/* Educational Themed Floating Elements */}
      <div className="absolute inset-0">
        {/* Study Books */}
        <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-8 h-10 bg-yellow-500 opacity-30 rounded-sm transform rotate-12 shadow-lg"></div>
        </div>
        
        {/* Graduation Cap */}
        <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-8 bg-green-700 opacity-35 rounded-t-full transform -rotate-6"></div>
        </div>
        
        {/* Globe */}
        <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 border-4 border-green-600 opacity-30 rounded-full"></div>
        </div>
        
        {/* Certificate */}
        <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: '3s' }}>
          <div className="w-12 h-9 bg-yellow-400 opacity-35 rounded border-2 border-green-500 transform rotate-3"></div>
        </div>
        
        {/* Pen */}
        <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-2 h-12 bg-green-800 opacity-40 rounded-full transform rotate-45"></div>
        </div>
        
        {/* Students/Education Icons */}
        <div className="absolute top-1/3 left-1/3 animate-float" style={{ animationDelay: '5s' }}>
          <div className="w-10 h-6 bg-yellow-600 opacity-25 rounded transform rotate-12"></div>
        </div>
      </div>

      {/* Realistic Airplane Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-12 h-12 z-10 opacity-60"
          style={{
            animation: 'flyPath 20s linear infinite',
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-45">
            <g fill="#15803d" opacity="0.7">
              <ellipse cx="50" cy="30" rx="8" ry="25" />
              <ellipse cx="30" cy="45" rx="20" ry="6" />
              <ellipse cx="70" cy="45" rx="20" ry="6" />
              <ellipse cx="50" cy="75" rx="6" ry="8" />
              <circle cx="50" cy="35" r="3" fill="#eab308" />
            </g>
          </svg>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          
          @keyframes flyPath {
            0% { 
              left: -5%; 
              top: 20%; 
              transform: rotate(-30deg) scale(0.8); 
            }
            25% { 
              left: 30%; 
              top: 15%; 
              transform: rotate(-15deg) scale(1); 
            }
            50% { 
              left: 60%; 
              top: 25%; 
              transform: rotate(0deg) scale(1.1); 
            }
            75% { 
              left: 85%; 
              top: 10%; 
              transform: rotate(15deg) scale(1); 
            }
            100% { 
              left: 110%; 
              top: 5%; 
              transform: rotate(30deg) scale(0.8); 
            }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `
      }} />
    </div>
  );
};

export default AnimatedEarthMap;
