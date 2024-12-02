import { Container } from './UI/Container';
import { SectionTitle } from './UI/SectionTitle';
import { projects } from '../utils/projectsData';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <Container>
        <SectionTitle>Mes Projets</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100 transition-all hover:shadow-md"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-gray-700" />
                    <h3 className="font-semibold text-xl text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-white px-3 py-1 rounded-md text-sm text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {project.status}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        Voir le projet
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}