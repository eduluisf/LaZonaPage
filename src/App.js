import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import SectionOne from './components/SectionOne/SectionOne'; 
import SectionTwo from './components/SectionTwo/SectionTwo'; 
import SectionThree from './components/SectionThree/SectionThree';
import SectionFour from './components/SectionFour/SectionFour';
import SectionFive from './components/SectionFive/SectionFive';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';


function App() {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>

      <WhatsAppButton phoneNumber="+573155355980" />

    </div>
  );
}

export default App;
