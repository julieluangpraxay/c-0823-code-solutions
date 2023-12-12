import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [currentColor, setCurrentColor] = useState('cold');
  // allows for state to automatically update the count before the loop ends ?

  useEffect(() => {
    if (count === 3) {
      setCurrentColor('cool');
    } else if (count === 6) {
      setCurrentColor('tepid');
    } else if (count === 9) {
      setCurrentColor('warm');
    } else if (count === 12) {
      setCurrentColor('hot');
    } else if (count === 15) {
      setCurrentColor('nuclear');
    }
  }, [count]);

  function handleCounterClick() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <button
        onClick={() => handleCounterClick()}
        className={`hot-button ${currentColor}`}>
        Hot Button
      </button>
      <div>
        <p>Count is: {count}</p>
      </div>
      <div>
        <p>Current color is: {currentColor}</p>
      </div>
    </>
  );
}

export default App;
