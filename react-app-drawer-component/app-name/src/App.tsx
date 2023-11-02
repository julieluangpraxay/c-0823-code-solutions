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

//solution

// import { useState } from 'react';
// import { AppDrawer, type MenuItem } from './AppDrawer';
// import './App.css';
// const menuItems: MenuItem[] = [
//   'The Legend of Zelda',
//   'A Link to the Past',
//   'Ocarina of Time',
//   'The Wind Waker',
//   'Breath of the Wild',
// ];
// export function App() {
//   const [item, setItem] = useState('');
//   return (
//     <div>
//       <AppDrawer
//         header="Choose a Game"
//         items={menuItems}
//         onSelect={(item) => setItem(item)}
//       />
//       <div
//         style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
//         <h1>{item}</h1>
//       </div>
//     </div>
//   );
// }
