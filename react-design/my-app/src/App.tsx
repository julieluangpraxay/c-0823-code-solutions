import RotatingBanner from './RotatingBanner';
import './App.css';

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
