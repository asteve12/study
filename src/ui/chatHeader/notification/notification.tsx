import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IoMdNotificationsOutline } from 'react-icons/io';
import {Link} from "react-router-dom"
import style from "./notification.module.css"

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='fade-button'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={style.notBtn}
      >
        <IoMdNotificationsOutline
          className={style.comBellIcon}
        ></IoMdNotificationsOutline>
      </Button>
      <Menu
        id='fade-menu'
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{
          position: 'absolute',
          left: '-5%',
          width: '400px',
        }}
      >
        <Link to='/' className={style.notifItems}>
          <b>Reply</b>:stehen will be going home soon hello hello stehen will be
          going home soon hello hello
        </Link>
        <Link to='/' className={style.notifItems}>
          <b>Reply</b>:stehen will be going home soon hello hello stehen will be
          going home soon hello hello
        </Link>
        <Link to='/' className={style.notifItems}>
          <b>Reply</b>:stehen will be going home soon hello hello stehen will be
          going home soon hello hello
        </Link>
      </Menu>
    </div>
  );
}
