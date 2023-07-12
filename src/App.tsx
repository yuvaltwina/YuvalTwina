import React from 'react';
import { Toaster } from 'react-hot-toast';
import '../dist/css/App.css';
import Main from './pages/main/Main';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
// import Knowledge from './components/knowledge/Knowledge';
import Projects from './pages/projects/Projects';
import Footer from './pages/footer/Footer';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      {/* <Knowledge /> */}
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
export default App;
