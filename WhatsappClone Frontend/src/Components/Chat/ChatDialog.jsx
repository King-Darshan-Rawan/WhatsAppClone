import React from "react";
import { Dialog, styled } from "@mui/material";
import EmptyChat from "./chat/EmptyChat";
import Menu from "./menu/Menu";
import { Box } from "@mui/material";
const dialogStyle = {
  height: "95%",
  width: "100%",
  color: "black",
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "hidden",
};

const Container = styled(Box)`
display: flex;
`;

const LeftComponent = styled(Box)`
height: 100%;
width: 27%;
border-right: 2px solid rgba(0,0,0,0.9)
`
const RightComponent = styled(Box)`
height: 100%;
width: 73%;
`



const ChatDialog = () => {
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
        <Container>
          <LeftComponent>
            <Menu />
          </LeftComponent>
          <RightComponent>
            <EmptyChat />
          </RightComponent>
        </Container>
      </Dialog>
    </>
  );
};

export default ChatDialog;
