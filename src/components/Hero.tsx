import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from './UI/Container';

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Développeur <br />
              <span className="text-gray-700">en recherche d'alternance</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Étudiant en BTS CIEL passionné par le développement mobile et web.
              À la recherche d'une alternance pour 2025-2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:gregorysergentpro@gmail.com" 
                className="bg-gray-900 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
              >
                Me contacter
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#skills" 
                className="border border-gray-300 px-6 py-3 rounded-md text-gray-700 hover:bg-gray-50 transition-colors text-center"
              >
                Voir mes compétences
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
              alt="Développement"
              className="rounded-md shadow-lg w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}