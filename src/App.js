import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import Services from './pages/services/services';
import Home from './pages/home/home';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return  <Home/>;
      case 'services':
        return <Services />;
      case 'projects':
        return <div>Projects Page Content</div>;
      default:
        return <div>404 Not Found</div>;
    }
  };

  return (
    <div>
      <Navbar setCurrentView={setCurrentView} />
      {renderView()}
    </div>
  );
}

export default App;
