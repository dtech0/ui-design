import logo from '../assets/logo-text.png'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <div className="lg:col-span-2">
            <a href="#" className="inline-block">
              <img
                src={logo}
                alt="Dev Stack"
                className="h-7 w-auto object-contain"
              />
            </a>
            <p className="mt-4 text-sm text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-6 flex items-center space-x-6">
              <a
                href="https://github.com/dtech0"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-al-sayed-75635b334/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              PRODUCT
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              COMPANY
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              LEGAL
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
