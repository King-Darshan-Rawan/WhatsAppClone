import {React, useContext} from 'react'
import { Box,styled, Typography } from '@mui/material';
import {AccountContext} from "./../../context/AccountProvider";
import { RiPencilFill } from "react-icons/ri";

const ProfileContainer = styled(Box)`
height: 33vh;
display:flex;
align-items: center;
justify-items: center;
justify-content: space-around;
`;

const Photo = styled(Box)`
height: 26vh;
width: 26vh;
background-color:white;
border-radius:50%;
overflow: hidden;
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
`
const NameContainer = styled(Box)`
background-color: #ffffff;
margin-left: 2%;
margin-right:2%;
height: auto;
padding:3vh;
border-radius: 2px; 
`
const DisplayTypography = styled(Typography)`
color: green;
font-size: 1.5vh;
`
const UserIdTypography = styled(Typography)`
font-size: 2.5vh;
height: 4vh;
padding: 1.5vh;
display:flex;
justify-content: space-between;
`



const Profile = () => {
    const {account} = useContext(AccountContext);
    const profileUrl = account?.profile_url || JSON.parse(localStorage.getItem('credentials'))?.profile_url;
    const userId = account?.userId || JSON.parse(localStorage.getItem('credentials'))?.userId
  return (

    <>
    <ProfileContainer><Photo>
        <img src={`${profileUrl}`} alt="" /></Photo></ProfileContainer>
          <NameContainer>
            <DisplayTypography>
                Your Name
            </DisplayTypography>
            <UserIdTypography>
                {userId}
                <RiPencilFill/>
            </UserIdTypography>
          </NameContainer>
                
          <DisplayTypography style={{height: "5vh", padding: "1vh"}}>
          The info displaied here is Personal please dont use it on public
            </DisplayTypography>

          <NameContainer>
            <DisplayTypography>
                About
            </DisplayTypography>
            <UserIdTypography>
                Broom!Broom!
                <RiPencilFill/>
            </UserIdTypography>
          </NameContainer>
    </>
  )
}

export default Profile