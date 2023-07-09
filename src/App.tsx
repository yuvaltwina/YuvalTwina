import React from 'react';
import '../dist/css/App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Knowledge from './components/knowledge/Knowledge';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Knowledge />
      <Projects />
    </div>
  );
}
export default App;
