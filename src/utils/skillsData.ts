import { Code2, Smartphone, Server, GitBranch, Database, Layout } from 'lucide-react';

export const skills = [
  {
    category: "Développement Mobile",
    icon: Smartphone,
    technologies: ["React Native", "ReactJS", "Expo"]
  },
  {
    category: "Développement Web",
    icon: Layout,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"]
  },
  {
    category: "Langages de Programmation",
    icon: Code2,
    technologies: ["C", "C++", "Python", "Java", "PHP", "Godot"]
  },
  {
    category: "Back-end & API",
    icon: Server,
    technologies: ["API Platform", "PHP", "Rest", "Postman", "Node"]
  },
  {
    category: "Outils & Versionning",
    icon: GitBranch,
    technologies: ["Git", "Pack Office", "Grafana","Merise"]
  },
  {
    category: "Base de données",
    icon: Database,
    technologies: ["SQL","Docker"]
  }
];