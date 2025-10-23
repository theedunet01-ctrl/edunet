import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Study Abroad",
    href: "/study-abroad",
    hasDropdown: true,
    dropdownItems: [
      { name: "All Countries", href: "/study-abroad" },
      { name: "Study in Malta", href: "/study-abroad/malta" },
      { name: "Study in Denmark", href: "/study-abroad/denmark" },
      { name: "Study in Cyprus", href: "/study-abroad/cyprus" },
      { name: "Study in Malaysia", href: "/study-abroad/malaysia" },
      { name: "Study in China", href: "/study-abroad/china" },
      { name: "Study in Sweden", href: "/study-abroad/sweden" },
      { name: "Study in South Korea", href: "/study-abroad/south-korea" },
      { name: "Study in Russia", href: "/study-abroad/russia" },
    ],
  },
  {
    name: "Visa",
    href: "/visa",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header className="sticky top-0 z-30 shadow-sm bg-white/95 backdrop-blur-lg">
      {/* Top Bar */}
      <div className="bg-yellow-500 text-gray-900 text-xs md:text-sm py-1.5 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-3">
            <a
              href="tel:+8801701650650"
              className="inline-flex items-center gap-1 hover:text-gray-700 transition"
            >
              <Phone size={14} /> <span>+8801701650650</span>
            </a>
            <span className="hidden md:inline-block border-r border-gray-900/20 h-4 mx-2" />
            <a
              href="mailto:info@theedunet.com"
              className="inline-flex items-center gap-1 hover:text-gray-700 transition"
            >
              <Mail size={14} /> <span>info@theedunet.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1 mt-1 md:mt-0">
            <MapPin size={14} />
            <span>
              System Imperial Complex, 3rd Floor, 153 Kapasgola Road, Chattogram
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="relative shadow transition bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-2">
          {/* Logo & Tagline Inline */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/uploads/078a2161-032d-4155-a1c2-c1ada46b89fd.png"
                alt="Edunet Education Consultancy Logo"
                className="h-16 w-auto"
                style={{ background: "transparent" }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`px-4 py-2 rounded-md transition font-medium text-sm flex items-center gap-1 ${
                          isActive(item.href)
                            ? "bg-yellow-500/20 text-yellow-700 shadow"
                            : "text-gray-800 hover:text-yellow-600 hover:bg-yellow-500/10"
                        }`}
                      >
                        {item.name}
                        <ChevronDown size={16} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.dropdownItems?.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.href} asChild>
                          <Link to={dropdownItem.href}>
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-md transition font-medium text-sm ${
                      isActive(item.href)
                        ? "bg-yellow-500/20 text-yellow-700 shadow"
                        : "text-gray-800 hover:text-yellow-600 hover:bg-yellow-500/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="ml-3">
              <Button
                size="sm"
                className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-gray-900"
              >
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="md:hidden p-2 rounded focus:outline-none text-yellow-600 hover:text-yellow-700 transition ml-2"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b animate-fade-in shadow-lg">
          <div className="flex flex-col gap-1 px-5 py-3">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <Link
                      to={item.href}
                      className={`block text-base rounded-md px-3 py-2 transition font-semibold ${
                        isActive(item.href)
                          ? "bg-yellow-500/20 text-yellow-700"
                          : "text-gray-800 hover:text-yellow-600 hover:bg-yellow-500/10"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        to={dropdownItem.href}
                        className="block text-sm rounded-md px-6 py-2 transition text-gray-600 hover:text-yellow-600 hover:bg-yellow-500/10"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block text-base rounded-md px-3 py-2 transition font-semibold ${
                      isActive(item.href)
                        ? "bg-yellow-500/20 text-yellow-700"
                        : "text-gray-800 hover:text-yellow-600 hover:bg-yellow-500/10"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="mt-2">
              <Button
                size="sm"
                className="w-full rounded-full bg-yellow-500 hover:bg-yellow-600 text-gray-900"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
