import './App.css';
import CustomButton from './CustomButton';

export default function App() {
  function handleCustomClick(text) {
    alert(`You clicked: ${text}`);
  }

  return (
    <div className="App">
      <CustomButton
        text="Red Fancy"
        color="red"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Blue Fancy"
        color="blue"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Pink Fancy"
        color="pink"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}
