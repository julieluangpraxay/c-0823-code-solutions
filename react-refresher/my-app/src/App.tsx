import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }

  function countDown() {
    setCount(count - 1);
  }

  return (
    <>
      <div className="buttons">
        <button onClick={countUp}>Up</button>
        <h1>{count}</h1>

        <button onClick={countDown}>Down</button>
      </div>
    </>
  );
}

export default App;
