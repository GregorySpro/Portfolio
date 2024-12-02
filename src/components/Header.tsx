import React, { useState } from 'react';
import { Menu, Github, Linkedin, Mail, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Grégory</h1>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">À propos</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projets</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Compétences</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/grégory-sergent-3239a7293/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:gregorysergentpro@gmail.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-100 px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </a>
              <a 
                href="#projects" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projets
              </a>
              <a 
                href="#skills" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Compétences
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}