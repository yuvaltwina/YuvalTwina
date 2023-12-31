import React from 'react';
import '../../utils/css/sideDrawer.min.css';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { TlinksList, TrefList } from '../../utils/types';

type Tprops = {
  linksList: TlinksList;
  isOpenDrawer: boolean;
  setIsOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

function SideDrawer({ linksList, isOpenDrawer, setIsOpenDrawer }: Tprops) {
  const closeDrawer = () => {
    setIsOpenDrawer(false);
  };
  const displayLinks = linksList.map(({ text, clickHandler }) => {
    return (
      <ListItem
        key={text}
        button
        onClick={() => {
          closeDrawer();
          setTimeout(() => {
            clickHandler(text as keyof TrefList);
          }, 0);
        }}
        className="drawer-item"
      >
        <ListItemText className="drawer-item-text" primary={text} />
      </ListItem>
    );
  });
  return (
    <Drawer open={isOpenDrawer} onClose={closeDrawer} className="drawer">
      <List>{displayLinks}</List>
    </Drawer>
  );
}

export default SideDrawer;
