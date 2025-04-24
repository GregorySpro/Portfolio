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
  },
  {
    title: "Smart Hotel",
    description: "Création d'une application mobile de commande de boisson à l'aide de Qr Code connecté pour un hotel (Projet BTS 2025-2026)",
    icon: Layout,
    technologies: ["ReactNative","Node","ReactJS","Expo","Javascript","Docker",],
    imageUrl: "https://i.postimg.cc/Z57rw6Mq/image.png",
    status: "En développement",
    githubUrl: "https://github.com/alexwauquier/smart-hotel-mobile-app",
    link: ""
  }
];