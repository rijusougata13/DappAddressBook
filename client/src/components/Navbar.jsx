import React from "react";
import {
	Link
} from "react-router-dom";
import logo from "../assets/signature.png";
import styled from "styled-components";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <Nav>
      <LogoWrapper>
      <Link className="linkItem" to="/">  <Logo src={logo} alt="logo" className="w-32 cursor-pointer" /> </Link>
      </LogoWrapper>
      <List >
      <ListItem >
          User Guide
        </ListItem>      
        <ListItem >
          <Link className="linkItem" to="/register">Register Yourself</Link>
        </ListItem>
      </List>
     
    </Nav>
  );
};

const Nav=styled.div`
    display:flex;
    justify-content:space-between;
    height:100px;
    width:100%;
    background-image:linear-gradient(#a8ccff,#F2F0EF);

   
`;
const LogoWrapper=styled.div`
    display:flex;
    justify-content:center;
    @media(max-width:600px){
        width:150px;
    }
`;

const Logo=styled.img`
    height:100px;
    @media(max-width:600px){
        width:250px;
    }
`;

const List=styled.ul`
    color:black;
    display:flex;
    width:30%;
    align-items:center;
    list-style:none;
    flex-wrap:wrap;
    align-content:center;
    justify-content:space-around;
`;
const ListItem=styled.li`
    font-size:1.3rem;
    .linkItem{
      text-decoration:none;
      color:black;
    }
    @media(max-width:600px){
        font-size:15px;
    }
`;
export default Navbar;