import React from 'react';
import '../dist/css/App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Knowledge from './components/knowledge/Knowledge';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Knowledge />
    </div>
  );
}
export default App;
