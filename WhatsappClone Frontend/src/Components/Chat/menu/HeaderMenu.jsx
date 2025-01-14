import {React, useState} from 'react';
import { HiDotsVertical } from "react-icons/hi";
import { Menu, MenuItem } from '@mui/material';
const HeaderMenu = ({setOpenDrawer}) => {

    const [open,setOpen] = useState(null);

    const handleClose = (e) =>{
        setOpen(null);
    }
    const handleClick = (e) =>{
        setOpen(e.currentTarget)
    }
    const handleMenuItemClick = () => {
      handleClose();
      setOpenDrawer(true);
    };
  return (
    <>
    <HiDotsVertical onClick={handleClick}/>
    <Menu
        id="basic-menu"
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchorE1 = {null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
      >
        <MenuItem onClick={handleMenuItemClick}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default HeaderMenu