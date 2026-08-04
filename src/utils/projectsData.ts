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
    title: "Socrate",
    description: "Socrate est un site d'apprentissage basé sur une méthode qu'à inventé Socrate. On donne un document et un contexte, l'ia génère une question. Si notre réposne n'est pas satisfaisante, l'ia pousse la question plus loin, toujours dans le but d'enrichir nos connaissance sur le sujet donné.",
    icon: Layout,
    technologies: ["NextJS","React","TypeScript","Tailwind CSS","Groq SDK","PDF Parse","Mammoth","ESLint","PostCSS","Node.js"],
    imageUrl: "https://i.postimg.cc/4xPfjVk5/image.png",
    status: "En Ligne",
    githubUrl: "https://github.com/GregorySPro/socrate",
    link: "https://socrate.greg-studio.dev/"
  },
  {
    title: "Greg News",
    description: "Greg News est un blog actif contennt les dernières actualités IA/DEV/TECH/WEB ainsi que les veilles technologiques, tenu à jour de manière hebdomadaire.",
    icon: Layout,
    technologies: ["NextJS","React","TypeScript","Tailwind CSS","Supabase","PostgreSQL","Lucide React","Next Themes","ESLint","PostCSS"],
     imageUrl: "https://i.postimg.cc/13Q0vhs6/image.png",
    status: "En Ligne",
    githubUrl: "",
    link: "https://news.greg-studio.dev/"
  },
  {
    title: "Gestion de stock",
    description: "Création d'une application interne de gestion de stock pour SNCF Réseau (Alternance 2025-2026)",
    icon: Layout,
    technologies: ["ReactJS", "Expresse", "Supabase", "NodeJS", "TypeScript"],
    imageUrl: "https://i.postimg.cc/P5YDmTQD/sncf-logo.png",
    status: "En développement",
    githubUrl: "",
    link: ""
  },
  {
    title: "Smart Hotel",
    description: "Création d'une application mobile de commande de boissons à l'aide de Qr Code connecté pour un hotel en espagne. Réalisé entièrement en anglais. (Projet BTS 2025-2026)",
    icon: Layout,
    technologies: ["ReactNative","Node","ReactJS","Expo","Javascript","Docker"],
    imageUrl: "https://i.postimg.cc/Z57rw6Mq/image.png",
    status: "Terminé - Note à l'examen : 19/20",
    githubUrl: "https://github.com/alexwauquier/smart-hotel-mobile-app",
    link: ""
  },
  {
    title: "SecureScan",
    description: "Création d'un site de scan de repo GitHub pour détecter les vulnérabilités de sécurité OWASP, et les corriger automatiquement à l'aide de pull request, corrigé par IA. (Projet Hackaton IPSSI 2026)",
    icon: Layout,
    technologies: ["NextJS","TypeScript","GitHub API", "Gemini Flash 2.5", "Tailwind CSS"],
    imageUrl: "https://i.postimg.cc/Y9DhTdwB/radar-icon.png",
    status: "En Ligne",
    githubUrl: "https://github.com/Nowalityy/SecureScan",
    link: "https://securescangregory.netlify.app/"
  },
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