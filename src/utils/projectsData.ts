import { Layout, Mail, Globe, FileCode } from 'lucide-react';
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
    title: "Email Verify API",
    description: "API REST open source de vérification d'email : syntaxe, enregistrements MX DNS et détection des adresses jetables. Aucune clé requise, auto-hébergeable.",
    icon: Mail,
    technologies: ["Python", "FastAPI", "dnspython", "Uvicorn", "Render"],
    imageUrl: "https://placehold.co/800x500/1e293b/6366f1?text=Email+Verify+API&font=montserrat",
    status: "En Ligne",
    githubUrl: "https://github.com/GregorySpro/email-verify-api",
    link: "https://email-verify-api.greg-studio.dev/"
  },
  {
    title: "IP Geolocation API",
    description: "API REST open source de géolocalisation d'adresses IP. Retourne pays, ville, fuseau horaire et coordonnées via la base MaxMind GeoLite2, sans appel externe.",
    icon: Globe,
    technologies: ["Python", "FastAPI", "GeoIP2", "MaxMind GeoLite2", "Render"],
    imageUrl: "https://placehold.co/800x500/1e293b/10b981?text=IP+Geolocation+API&font=montserrat",
    status: "En Ligne",
    githubUrl: "https://github.com/GregorySpro/ip-geolocation-api",
    link: "https://ip-geolocation-api.greg-studio.dev/"
  },
  {
    title: "File Conversion API",
    description: "API REST open source de conversion de fichiers : formats image (PNG, JPG, WebP…), redimensionnement, compression, extraction de texte PDF et métadonnées. Traitement 100% en mémoire.",
    icon: FileCode,
    technologies: ["Python", "FastAPI", "Pillow", "pypdf", "pdf2image", "Render"],
    imageUrl: "https://placehold.co/800x500/1e293b/f59e0b?text=File+Conversion+API&font=montserrat",
    status: "En Ligne",
    githubUrl: "https://github.com/GregorySpro/file-conversion-api",
    link: "https://file-conversion-api.greg-studio.dev/"
  }
];