export default function RotatingBanner({ item }) {
  return (
    <div>
      <Banner item={item[0]} />
      <PrevButton />
      <Indicators count={item.length} />
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

function Indicators({ count }) {
  console.log(count);
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
