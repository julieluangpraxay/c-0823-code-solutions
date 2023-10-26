import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // const updateColor = count / 3;
  // const backgroundColor = ['#351C75', '#674EA7'];

  return (
    <>
      <div className="threeClicks">
        <button onClick={() => setCount((count) => count + 1)}>
          Hot Button
        </button>
        <p>{count} clicks</p>
      </div>
    </>
  );
}

export default App;
