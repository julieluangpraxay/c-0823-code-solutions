import './App.css';
import './index.css';
import { useState } from 'react';

function ToggleSwitch() {
  const [isOff, setIsOff] = useState(true);
  const toggled = isOff ? 'toggle-switch' : 'toggle-switch is-on';

  return (
    <div onClick={() => setIsOff(!isOff)} className={toggled}>
      <div className="slider">
        <div className="switch"></div>
      </div>

      <span className="state-label"></span>
    </div>
  );
}

function App() {
  return (
    <>
      <ToggleSwitch />
    </>
  );
}

export default App;
