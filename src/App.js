import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SectionOne from './components/SectionOne/SectionOne'; 
import SectionTwo from './components/SectionTwo/SectionTwo'; 
import SectionThree from './components/SectionThree/SectionThree';

function App() {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo/>
      <SectionThree/>

    </div>
  );
}

export default App;
