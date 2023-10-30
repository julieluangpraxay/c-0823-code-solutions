import { useState } from 'react';

export default function RotatingBanner({ item }) {
  const [currentIndex, setCurrentIndex] = useState(3);

  return (
    <div>
      <Banner item={item[currentIndex]} />
      <PrevButton />
      <Indicators count={item.length} current={setCurrentIndex} />
      <NextButton />
    </div>
  );
}

function Banner({ item }) {
  return <h1>{item}</h1>;
}

function PrevButton() {
  return <button>Prev</button>;
}

function NextButton() {
  return <button>Next</button>;
}

function Indicators({ count, current }) {
  console.log(count);
  console.log(current);
  return (
    <>
      <li>
        <button>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </li>
    </>
  );
}
