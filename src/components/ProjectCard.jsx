import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
export default function ProjectCard({ project }) {
  const Icon = project.icon;
  return <motion.article className="project-card h-100" layout initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.35}}>
    <div className="project-art"><span className="project-number">0{project.id}</span><div className="project-art-icon"><Icon size={42}/></div><span className="art-orbit"/></div>
    <div className="p-4"><div className="d-flex justify-content-between gap-2 align-items-center mb-2"><span className="project-category">{project.category}</span><span className="project-status">{project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="d-flex flex-wrap gap-2 mb-4">{project.stack.map(tag=><span className="tech-tag" key={tag}>{tag}</span>)}</div><a className="project-open" href={project.link} target="_blank" rel="noreferrer">View project <ArrowUpRight size={17}/></a></div>
  </motion.article>;
}
