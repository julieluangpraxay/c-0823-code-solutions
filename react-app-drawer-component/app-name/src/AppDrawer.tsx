import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

type prop = {
  items: string[];
};

type menuItemsProp = {
  item: string;
};

export default function AppDrawer({ items }: prop) {
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(!open);
  }
  function closeMenu() {
    setOpen(false);
  }

  const nav = items.map((items) => (
    <div onClick={closeMenu}>
      <MenuItems item={items} />
    </div>
  ));

  return (
    <>
      <div>
        q
        <FaBars className={'menu-icon'} onClick={openMenu} />
      </div>
      <div className={`menu-drawer ${open ? 'is-open' : ' '}`}>
        {/* when you click it will hide the bars */}
        <div className={open ? 'menu-drawer is-open' : 'hide-items'}>{nav}</div>
      </div>
      {/* if you click anywhere it will close the nav menu */}
      <div
        className={open ? 'menu-shade is-drawn is-open' : 'menu-shade'}
        onClick={closeMenu}></div>
    </>
  );
}

function MenuItems({ item }: menuItemsProp) {
  return <div className="menu-heading menu-icon menu-item">{item}</div>;
}

//solulu

// import { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
// import './AppDrawer.css';
// export type MenuItem = string;
// type Props = {
//   header: string;
//   items: MenuItem[];
//   onSelect: (menu: MenuItem) => void;
// };
// export function AppDrawer({ header, items, onSelect }: Props) {
//   const [isOpen, setIsOpen] = useState(false);
//   function handleSelect(item: MenuItem): void {
//     onSelect(item);
//     setIsOpen(false);
//   }
//   return (
//     <div>
//       <Menu
//         header={header}
//         items={items}
//         isOpen={isOpen}
//         onOpen={() => setIsOpen(true)}
//         onSelect={handleSelect}
//       />
//       <Shade isDrawn={isOpen} onClick={() => setIsOpen(false)} />
//     </div>
//   );
// }
// type MenuProps = {
//   header: string;
//   items: MenuItem[];
//   isOpen: boolean;
//   onOpen: () => void;
//   onSelect: (menu: MenuItem) => void;
// };
// function Menu({ header, items, isOpen, onOpen, onSelect }: MenuProps) {
//   return (
//     <>
//       <FaBars onClick={onOpen} className="menu-icon" />
//       <div className={`menu-drawer ${isOpen ? 'is-open' : ''}`}>
//         <h2 className="menu-heading">{header}</h2>
//         <ul className="menu-items">
//           {items.map((item, index) => (
//             <li
//               key={index}
//               onClick={() => onSelect(item)}
//               className="menu-item">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
// type ShadeProps = {
//   isDrawn: boolean;
//   onClick: () => void;
// };
// function Shade({ isDrawn, onClick }: ShadeProps) {
//   return (
//     <div
//       onClick={onClick}
//       className={`menu-shade ${isDrawn ? 'is-drawn' : ''}`}
//     />
//   );
// }
