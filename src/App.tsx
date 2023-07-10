import React from 'react';
import '../dist/css/App.css';
import Main from './pages/main/Main';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
// import Knowledge from './components/knowledge/Knowledge';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <About />
      {/* <Knowledge /> */}
      <Projects />
    </div>
  );
}
export default App;
