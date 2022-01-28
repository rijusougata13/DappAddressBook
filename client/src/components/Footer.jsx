import React from "react";
import styled from "styled-components";

const Footer=()=>{
    return(
        <FooterWrapper>
            <div>
            Email: <a href="mailto:rijusougata13@gmail.com">rijusougata13@gmail.com</a>
            </div>
            <div>
            Github: <a href="https://github.com/rijusougata13">rijusougata13</a>
            </div>
        </FooterWrapper>
    );
};

const FooterWrapper=styled.div`
    width:100%;
    height:20px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:10px 0;
    bottom:0rem;
    background:#f2f2f2;

    a{
        color:black;
        text-decoration:none;
    }
`;
export default Footer;
