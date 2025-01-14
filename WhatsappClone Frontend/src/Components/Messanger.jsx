import {React, useContext} from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Login from "./accounts/Login";
import { styled } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./Chat/ChatDialog";
const LoginHeader = styled(AppBar)`
  height: 220px;
  background: #00bf65;
  width:100vw;`;
const Header = styled(AppBar)`
  height: 150px;
  background: #00A884;
  width:100vw;`;
const Component = styled(Box)`
height: 100vh;
background: #dcdcdc;
width: 100%;
`;
const Messanger = () => {

    const {account} = useContext(AccountContext);
  return (
    <>
      <Component>
        { account ? 
        <>
        <Header>
          <Toolbar></Toolbar>
        </Header>
        <ChatDialog/> 
        </>
        :
        <>
        <LoginHeader>
          <Toolbar>Clone</Toolbar>
        </LoginHeader>
        <Login></Login>
        </>
        }
      </Component>
    </>
  );
};

export default Messanger;
