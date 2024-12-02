import { Code2, Smartphone, Layout } from 'lucide-react';

export const projects = [
  {
    title: "Application Mobile de Gestion de Budget",
    description: "Application mobile développée avec React Native permettant aux utilisateurs de gérer leur budget mensuel, suivre leurs dépenses et définir des objectifs d'épargne.",
    icon: Smartphone,
    technologies: ["React Native", "TypeScript", "Redux", "API REST"],
    imageUrl: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80",
    status: "En développement",
    link: ""
  },
  {
    title: "Portfolio Personnel",
    description: "Site web personnel présentant mon parcours, mes compétences et mes projets. Développé avec React et Tailwind CSS.",
    icon: Layout,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&q=80",
    status: "En ligne",
    link: ""
  },
  {
    title: "API de Gestion de Stock",
    description: "API REST développée avec API Platform et Symfony pour gérer l'inventaire d'une boutique en ligne.",
    icon: Code2,
    technologies: ["PHP", "API Platform", "MySQL", "Symfony"],
    imageUrl: "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?auto=format&fit=crop&q=80",
    status: "En cours",
    link: ""
  }
];