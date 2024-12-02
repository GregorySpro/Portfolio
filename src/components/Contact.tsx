import { Mail, MapPin, Phone } from 'lucide-react';
import { Container } from './UI/Container';
import { SectionTitle } from './UI/SectionTitle';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <Container>
        <SectionTitle>Me Contacter</SectionTitle>
        <div className="bg-gray-50 rounded-md p-8 max-w-2xl mx-auto border border-gray-100">
          <p className="text-gray-600 text-center mb-8 leading-relaxed">
            Je suis à la recherche d'une alternance en développement mobile pour 2025-2026.
            N'hésitez pas à me contacter pour échanger sur les opportunités.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-gray-700" />
              <a href="mailto:gregorysergentpro@gmail.com" className="text-gray-600 hover:text-gray-900">
                gregorysergentpro@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gray-700" />
              <a href="tel:+33635150212" className="text-gray-600 hover:text-gray-900">
                06 34 16 92 75
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-gray-700" />
              <span className="text-gray-600">France</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}