import RotatingBanner from './RotatingBanner';
import './App.css';
import React from 'react';

function App() {
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];

  return <RotatingBanner item={items} />;
}

export default App;
