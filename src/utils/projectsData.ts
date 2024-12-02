import { Layout } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
  imageUrl: string;
  status: string;
  githubUrl: string;
  link?: string;  
}

export const projects: Project[] = [
  {
    title: "Le Petit Café",
    description: "Création d'un site vitrine pour un petit café fictif.",
    icon: Layout,
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "Vite", "PostCSS", "Lucide Icons"],
    imageUrl: "https://i.postimg.cc/FHnPkNnP/image.png",
    status: "En Ligne",
    githubUrl: "https://github.com/GregorySpro/LePetitCafe",
    link: "https://gregproject1.netlify.app/"
  }
];