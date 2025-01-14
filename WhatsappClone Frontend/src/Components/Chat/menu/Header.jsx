import React, { useContext, useState } from "react";
import { Box, styled } from "@mui/material";
import HeaderMenu from "./HeaderMenu";
import { MdOutlineMessage } from "react-icons/md";
import { MdLocationSearching } from "react-icons/md";
import { AccountContext } from "../../../context/AccountProvider";
import InfoDrawer from "../../Drawer/InfoDrawer";
const Container = styled(Box)`
  background-color: #ededed;
  height: 12vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Component1 = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  font-size: 4vh;
  width: 30%;
  color: rgba(0, 0, 0, 0.5);
`;
const Component = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  font-size: x-large;
  width: 70%;
`;

const ImageIcon = styled(Box)`
  height: 8vh;
  width: 10vh;
  margin: 2vh;
  border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Header = () => {
  const { account } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const togalDrawer = () => {
    setOpenDrawer(true);
  };

  const profileUrl =
    account?.profile_url ||
    JSON.parse(localStorage.getItem("credentials"))?.profile_url;

  console.log("profileUrl", profileUrl);

  return (
    <>
      <Container>
        <ImageIcon>
          <img src={`${profileUrl}`} alt="" onClick={togalDrawer} />
        </ImageIcon>
        <Component></Component>
        <Component1>
          <MdLocationSearching />

          <MdOutlineMessage />

          <HeaderMenu setOpenDrawer = {setOpenDrawer}/>
        </Component1>
      </Container>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
