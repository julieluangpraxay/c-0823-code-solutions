import { useState } from 'react';

export default function RotatingBanner({ item }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick() {
    const nextItem = (currentIndex + 1) % item.length;
    setCurrentIndex(nextItem);
  }

  return (
    <div>
      <Banner item={item[currentIndex]} />
      <PrevButton />
      <Indicators count={item.length} current={currentIndex} />
      <NextButton onClick={handleNextClick} />
    </div>
  );
}

function Banner({ item }) {
  return <h1>{item}</h1>;
}

function PrevButton() {
  return <button>Prev</button>;
}

type OnClickType = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function NextButton({ onClick }: OnClickType) {
  return <button onClick={onClick}>Next</button>;
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
