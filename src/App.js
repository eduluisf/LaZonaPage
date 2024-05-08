import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SectionOne from './components/SectionOne/SectionOne'; 
import SectionTwo from './components/SectionTwo/SectionTwo'; 
import SectionThree from './components/SectionThree/SectionThree';
import SectionFour from './components/SectionFour/SectionFour';

function App() {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>

    </div>
  );
}

export default App;
