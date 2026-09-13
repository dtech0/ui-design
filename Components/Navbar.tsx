import { useState } from 'react'
import logo from '../assets/logo-text.png'
import hamburgerIcon from '../ui/hamburger.png'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          <div className="flex items-center justify-between w-full md:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="p-2 -ml-2 text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle Navigation">
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <img
                  src={hamburgerIcon}
                  alt="Menu"
                  className="w-6 h-6 object-contain"
                />
              )}
            </button>

            <a href="#" className="flex items-center">
              <img
                src={logo}
                alt="Dev Stack"
                className="h-7 w-auto object-contain"
              />
            </a>

            <div className="flex items-center space-x-2">
              <button className="text-xs font-medium text-gray-700 hover:text-gray-900 px-2 py-1 transition-colors cursor-pointer">
                Sign In
              </button>
              <button className="text-xs font-medium text-white bg-[#e60067] hover:bg-[#c90059] px-3.5 py-1.5 rounded-full transition-all shadow-xs cursor-pointer">
                Sign Up
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <a href="#" className="flex items-center">
              <img
                src={logo}
                alt="Dev Stack"
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-[#e60067] font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 transition-colors cursor-pointer">
              Sign In
            </button>
            <button className="text-sm font-medium text-white bg-[#e60067] hover:bg-[#c90059] px-6 py-2.5 rounded-full transition-all duration-150 shadow-xs cursor-pointer">
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/98 px-4 pt-3 pb-5 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name)
                  setIsOpen(false)
                }}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[#e60067] bg-pink-50/60 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}