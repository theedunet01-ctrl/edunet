import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/uploads/078a2161-032d-4155-a1c2-c1ada46b89fd.png"
                alt="Edunet Education Consultancy Logo"
                className="h-20 w-auto min-h-20"
              />
            </div>
            <p className="text-gray-800 mb-4">
              Your trusted gateway to global education and IELTS success. We
              guide you every step of the way to your abroad journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-gray-700" />
                <span className="text-gray-800 text-sm">
                  System Imperial Complex, 3rd Floor
                  <br />
                  153 Kapasgola Road, Chattogram 4203
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-700" />
                <div className="text-gray-800">
                  <a
                    href="tel:+8801701650650"
                    className="hover:text-gray-600 transition-colors block"
                  >
                    +8801701650650
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-700" />
                <a
                  href="mailto:info@theedunet.com"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  info@theedunet.com
                </a>
              </div>
            </div>

            {/* Follow Us */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-gray-900">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-800 text-sm">
            Edunet Education Consultancy
            <br />
            Chase Your Dream
            <br />© 2025 Edunet Education Consultancy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
