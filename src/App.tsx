import React, { useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import './utils/css/App.min.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Footer from './pages/footer/Footer';
import Contact from './pages/contact/Contact';
import { TrefList } from './utils/types';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const refList: TrefList = {
    Home: homeRef,
    About: aboutRef,
    Projects: projectsRef,
    Contact: contactRef,
    Navbar: navbarRef,
  };
  return (
    <div className="app">
      <Navbar refList={refList} />
      <div ref={homeRef} />
      <Home />
      <div ref={aboutRef} />
      <About />
      <div ref={projectsRef} />
      <Projects />
      <div ref={contactRef} />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
export default App;
