import './App.css';
import AppDrawer from './AppDrawer';

const menuItems = ['Shop', 'Sale', 'About Us', 'Contact'];

function App() {
  return (
    <>
      <AppDrawer items={menuItems} />
    </>
  );
}

export default App;
