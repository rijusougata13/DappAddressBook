import React from "react";

import logo from "../assets/signature.png";
import styled from "styled-components";
import {shortenAddress} from '../utils/shortenURL';
import {MdContentCopy} from 'react-icons/md';

const Card = (props,{children}) => {
  const handleCopy=()=>{
    navigator.clipboard.writeText(props.address);
    

  }
  return (
      <CardWrapper>
       <h3>  {props.name}</h3>
        <h5> {props.email}</h5>
        <CopySection> <MdContentCopy className="copyicon" onClick={e=>handleCopy()}/>{shortenAddress(props.address)} </CopySection>
      </CardWrapper>
  );
};

const CardWrapper=styled.div`
    min-height:150px;
    min-width:200px;
    box-shadow:5px 5px 20px gray;
    margin:20px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    background-image:linear-gradient(#51e4f7,white);
    padding:15px;
    h3{
      font-family: 'Roboto', sans-serif;
      font-size:30px;
      font-weight:900;
    }
    h5{
      font-family: 'Roboto', sans-serif;
      font-size:15px;
      font-weight:500;
    }
`;
const CopySection=styled.div`
  padding:5px 0;
  display:flex;
  justify-content:flex-start;
  box-sizing:content-box;
  align-items:flex-start;

  .copyicon{
    padding:0 5px 0 0;
  }

  .copyicon:active{
    transform:scale(1.1);
  }
`;
export default Card;