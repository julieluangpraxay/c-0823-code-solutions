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
      <div className="header">
        <div className="menu-item">
          <FaBars onClick={openMenu} className={open ? 'hide-items' : null} />
        </div>
      </div>
      {/* when you click it will hide the bars */}
      <div className={open ? 'menu-drawer is-open' : 'hide-items'}>{nav}</div>
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
