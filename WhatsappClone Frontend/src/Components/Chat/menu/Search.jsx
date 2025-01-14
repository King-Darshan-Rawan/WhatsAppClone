import React, { useState } from "react";
import { styled, TextField } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
import { Box } from "@mui/material";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdArrowBack } from "react-icons/io";

const Constiner = styled(Box)`
display:flex;
justify-content: space-around;
    align-items: center;
`;
const Left = styled(Box)`
    border-right: 1px solid black;
    height: 7.5vh;
    width:10%;
    font-size:5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Right = styled(Box)`
    border-left: 1px solid black;
    height: 7.5vh;
    width:10%;
    font-size:5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const TextVar = styled(TextField)`
width: 80%
`

const Search = () => {
    const [input,setInput] = useState("")
    const handleChange = (e)=>{
        setInput(e.target.value);
        console.log(e.target.value);
    }

  return (
    <>
      <Constiner>
        <Left>
            {!input ? 
            <IoMdSearch />
        :
        <IoMdArrowBack />    
        }
        </Left>
        <TextVar id="outlined-basic" label="Search" variant="outlined" onChange={handleChange}/>
        <Right>
          <HiOutlineMenuAlt3 />
        </Right>
      </Constiner>
    </>
  );
};

export default Search;
