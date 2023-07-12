import React, { useState } from 'react';
import '../../../dist/css/hamburger.css';
import SideDrawer from '../drawer/SideDrawer';
import { TlinksList } from '../../utils/types';

type Tprops = { linksList: TlinksList };

function Hamburger({ linksList }: Tprops) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const activeHamburgerClass = isOpenDrawer ? 'is-active' : '';
  return (
    <>
      <SideDrawer
        linksList={linksList}
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
      />
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
    </>
  );
}

export default Hamburger;
