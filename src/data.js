import { Code2, BrainCircuit, Database, Palette, Globe, Terminal } from 'lucide-react';

export const profile = {
  name: 'Arshia Keerthana',
  role: 'AI & Data Science Student',
  tagline: 'Curious mind. Creative builder. Future technologist.',
  email: 'your.email@example.com',
  university: 'KL University',
  degree: 'B.Tech · Artificial Intelligence & Data Science',
  period: '2024 – Present',
  location: 'India',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile/',
  intro: 'I am an enthusiastic student exploring the intersection of technology, problem-solving and design. I enjoy turning ideas into useful digital experiences and learning by building.',
  about: 'My journey is about staying curious, experimenting with new technologies and creating projects that solve practical problems. I enjoy collaborating, learning from feedback and improving a little with every build.'
};

export const skillGroups = [
  { title: 'Frontend Development', icon: Globe, description: 'Creating responsive and engaging web experiences.', skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap 5'] },
  { title: 'Programming', icon: Code2, description: 'Building a strong foundation in programming and logic.', skills: ['Java', 'Python', 'C'] },
  { title: 'AI & Data', icon: BrainCircuit, description: 'Exploring data-driven thinking and intelligent systems.', skills: ['NumPy', 'Pandas', 'Data Analysis', 'Machine Learning'] },
  { title: 'Tools & Workflow', icon: Terminal, description: 'Tools that support building, testing and collaboration.', skills: ['Git', 'GitHub', 'VS Code', 'Figma'] }
];

export const projects = [
  { id: 1, title: 'WeatherSense', category: 'React App', description: 'A clean weather dashboard concept designed to make current conditions and forecasts easy to explore.', stack: ['React', 'CSS', 'JavaScript'], status: 'Featured project', link: 'https://github.com/your-username/weathersense', icon: Database },
  { id: 2, title: 'Student Productivity Hub', category: 'Web Design', description: 'A student-focused interface concept for organizing tasks, tracking goals and planning study sessions.', stack: ['HTML', 'CSS', 'JavaScript'], status: 'UI concept', link: 'https://github.com/your-username', icon: Palette },
  { id: 3, title: 'Data Exploration', category: 'Data Project', description: 'A learning project exploring datasets and presenting useful observations through data summaries.', stack: ['Python', 'Pandas', 'Charts'], status: 'Learning project', link: 'https://github.com/your-username', icon: BrainCircuit }
];
