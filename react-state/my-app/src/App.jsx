import './App.css';
import ToggleButton from './ToggleButton';

export default function App() {
  return (
    <div className="App">
      <ToggleButton text="Btn 1" color="red" />
      <ToggleButton text="Btn 2" color="green" />
      <ToggleButton text="Btn 3" color="blue" />
    </div>
  );
}
