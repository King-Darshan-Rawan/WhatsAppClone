import React from "react";
import { Drawer, Box, styled } from "@mui/material";
import { IoArrowBack } from "react-icons/io5";
import Profile from "./Profile";

const dialogStyle = {
  height: "95%",
  width: "26%",
  left: "2%",
  top: "2.4%",
  borderTopLeftRadius: "2px",
  borderBottomLeftRadius: "2px",
  boxShadow: "none",
};

const TopComp = styled(Box)`
  height: 9vh;
  width: 100%;
  display: flex;
  background-color: #008069;
  align-items: center;
  font-size: 3vh;
  justify-items: left;
`;
const TopCompNew = styled(Box)`
  height: 10vh;
  width: 100%;
  display: flex;
  background-color: #008069;
  align-items: center;
  font-size: 3vh;
  justify-items: left;
  color: #ffffff;
  & > svg {
    margin-left: 5%;
  }
`;

const ProfileTyle = styled(Box)`
  font-size: 4vh;
  margin-left: 10%;
`;

const Seperation = styled(Box)`
  background-color: #ededed;
  height: 100%;
`;

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: dialogStyle }}
        style={{ zIndex: 1500 }}
      >
        <Box>
          <TopComp></TopComp>
          <TopCompNew>
            <IoArrowBack onClick={handleClose} />{" "}
            <ProfileTyle>Profile</ProfileTyle>
          </TopCompNew>
          <Seperation>
            <Profile />
          </Seperation>
        </Box>
      </Drawer>
    </>
  );
};

export default InfoDrawer;
