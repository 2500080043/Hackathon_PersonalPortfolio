import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../data';
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><Link className="brand" to="/"><span className="brand-mark">K.</span><span>KEERTHI<span className="accent">.</span></span></Link><p>Designed & built with curiosity.</p><div className="footer-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail/></a><a href="#top" aria-label="Back to top"><ArrowUp/></a></div><small>© {new Date().getFullYear()} {profile.name}. All rights reserved.</small></div></footer>;
}
