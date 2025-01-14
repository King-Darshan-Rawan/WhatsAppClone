import React from "react";
import { Box, styled, Typography } from "@mui/material";

const Component = styled(Box)`
  bacground: #f8fafb;
  padding: 2%;
  text-align: center;
  height: 100%;
`;

const Container = styled(Box)`
  height: 100%;
  width: 100%;
  padding: 10% 0% 0 0%;
`;

const Titel = styled(Box)`
font-size: 4vh;
margin : 2vh 0 1vh 0;
font-family: Inherit;
font-weight: 300;
color: #41525d;
`


const SubTitel = styled(Typography)`
font-size: 2.5vh;
font-weight: 400;
font-family: Inherit;
`

const ImageStyle = styled('img')`
  width: 400px;
  
`;

const EmptyChat = () => {
  return (
    <>
      <Component>
        <Container>
          
          <ImageStyle src="https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg" alt="Image" />
          <Titel> WhatsApp Webs</Titel>
          <SubTitel>
            Now send and receive messages without keeping your phone online.
          </SubTitel>
          <SubTitel>
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </SubTitel>
        </Container>
      </Component>
    </>
  );
};

export default EmptyChat;
