import React, { useState } from 'react';
import '../../../dist/css/hamburger.css';

function Hamburger() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const activeHamburgerClass = isOpenDrawer ? 'is-active' : '';
  return (
    <button
      className={`hamburger hamburger--emphatic ${activeHamburgerClass}`}
      type="button"
      onClick={() => {
        setIsOpenDrawer(!isOpenDrawer);
      }}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

export default Hamburger;
