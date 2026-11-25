import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const links = [['Home', '/'], ['About', '/about'], ['Skills', '/skills'], ['Projects', '/projects'], ['Contact', '/contact']];
  return <header className="site-header">
    <nav className="navbar navbar-expand-lg container py-3" aria-label="Main navigation">
      <Link className="navbar-brand brand" to="/" onClick={close}><span className="brand-mark">K.</span><span>KEERTHI<span className="accent">.</span></span></Link>
      <button className="navbar-toggler custom-toggler" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
          {links.map(([label, path]) => <li className="nav-item" key={path}><NavLink end={path === '/'} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to={path} onClick={close}>{label}</NavLink></li>)}
          <li className="nav-item ms-lg-2"><Link className="btn btn-accent btn-sm px-3" to="/contact" onClick={close}>Let's talk <ArrowUpRight size={15}/></Link></li>
        </ul>
      </div>
    </nav>
  </header>;
}
