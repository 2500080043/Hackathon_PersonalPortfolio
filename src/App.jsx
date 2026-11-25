import * as React from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function ScrollToTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});},[pathname]);return null;}
function AnimatedRoutes(){const location=useLocation();return <AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:.2}}><Routes location={location}><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/skills" element={<Skills/>}/><Route path="/projects" element={<Projects/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<main className="container page-container"><h1>Page not found</h1><p>That page doesn't exist.</p></main>}/></Routes></motion.div></AnimatePresence>}
export default function App(){return <BrowserRouter><ScrollToTop/><div className="app-shell"><div className="ambient ambient-a"/><div className="ambient ambient-b"/><Navbar/><AnimatedRoutes/><Footer/></div></BrowserRouter>}
