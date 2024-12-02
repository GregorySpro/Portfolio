import React from 'react';
import { Container } from './UI/Container';
import { SectionTitle } from './UI/SectionTitle';
import { skills } from '../utils/skillsData';

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <Container>
        <SectionTitle>Mes Compétences</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-md border border-gray-100 hover:border-gray-200 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-gray-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-50 px-3 py-1 rounded-md text-sm text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}