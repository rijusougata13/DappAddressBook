import React from "react";
import styled from "styled-components";


const Welcome=()=>{
    return(
        <WelcomeWrapper>
            <h3>Welcome to the AddressBook!</h3>
            <p>Do you face problem finding others eth address? Do you want to transfer token or others to your parents,colleague,friends's wallet address?</p>
            <p>You have no time to ask them.Don't worry you can find anyone here with their email address and view their ethereum Address.</p>
            <p>Register yourself to the book so that others can find you here.</p>
        </WelcomeWrapper>
    )
}

const WelcomeWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    flex-direction:column;
    padding:30px 0;
`;

export default Welcome;