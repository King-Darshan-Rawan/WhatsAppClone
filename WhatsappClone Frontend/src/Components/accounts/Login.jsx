import { React, useContext, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import { IoMdArrowForward } from "react-icons/io";
import { AccountContext } from "../../context/AccountProvider";
import { MdCloudUpload } from "react-icons/md";

//url's

import { addUser } from "../../Services/api";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
import {
  List,
  ListItem,
  styled,
  Typography,
  TextField,
  Button,
} from "@mui/material";

//cloudinary api = curl https://api.cloudinary.com/v1_1/<CLOUD_NAME>/image/upload -X POST --data 'file=<FILE>&timestamp=<TIMESTAMP>&api_key=<API_KEY>&signature=<SIGNATURE>'

const dialogStyle = {
  height: "65%",
  width: "60%",
  color: "black",
  marginTop: "0%",
  maxWidth: "100%",
  maxHeight: "100%",
  baxShadow: "none",
  overflow: "hidden",
};

const Component = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  align-item: inline;
`;
const Container = styled(Box)`
  padding-top: 6%;
`;
const TitelTest = styled(Typography)`
  font-size: xx-large;
  color: #525252;
  font-weight: 500;
  font-family: inherit;
  margin-bottom: 40px;
`;
const StyledList = styled(List)`
  & > li {
    padding: 10px;
    font-size: 20px;
    color: #4a4a4a;
  }
`;

const QRCode = styled("img")({
  height: "264px",
  width: "auto",
});
const Login = () => {
  const { setAccount } = useContext(AccountContext);
  const [credentials, setCredentials] = useState({ userId: "", password: "", profile_url: "" });
  const onLoginSuccess = async () => {
    localStorage.setItem("credentials", JSON.stringify(credentials));
    setAccount(credentials);
    // Add any additional logic for successful login

    //sendToAPI

    await addUser(JSON.stringify(credentials))
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "UserTry");

    const res = await fetch("https://api.cloudinary.com/v1_1/dznkzfvdw/image/upload", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    console.log(result.url);
    setCredentials((prev) => ({ ...prev, profile_url: result.url }));
  };
  const onLoginFail = () => {};

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
        <Component>
          <Container>
            <TitelTest>Log into WhatsApp Web</TitelTest>
            <StyledList>
              <ListItem>1. "Open WhatsApp on your phone"</ListItem>
              <ListItem>2. "Tap on Android or iphone "</ListItem>
              <ListItem>
                3. "Point your phone at this screen to scan the QR code:"
              </ListItem>
            </StyledList>
          </Container>
          <Container>
            <QRCode
              src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg"
              alt="barcode"
            />
          </Container>
        </Component>
        <Component
          style={{
            width: "80%",
            margin: "0 10% 0 10% ",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <TextField
            id="standard-basic"
            label="UserId"
            variant="standard"
            name="userId"
            value={credentials.userId}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <Button
            component="label"
            role={undefined}
            color="success"
            variant="contained"
            tabIndex={-1}
            startIcon={<MdCloudUpload />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={handleFileUpload}
              multiple
            />
          </Button>
          <Button variant="contained" color="success" onClick={onLoginSuccess}>
            Login <IoMdArrowForward />
          </Button>
        </Component>
      </Dialog>
    </>
  );
};

export default Login;
