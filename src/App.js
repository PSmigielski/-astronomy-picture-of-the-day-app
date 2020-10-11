import React from 'react';
import './style/App.css';
//import components
import Logo from './components/Logo';
import BlobLeft from './components/BlobLeft';
import BlobRight from './components/BlobRight';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Logo />
      <BlobLeft /> 
      <BlobRight /> 
      <Hero/>
    </div>
  );
}
export default App;
