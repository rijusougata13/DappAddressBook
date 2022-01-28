import React from "react";
import styled from "styled-components";
import { TransactionContext } from "../context/TransactionContext";

const Register=()=>{
    
    const usernameRef = React.useRef();
    const emailRef = React.useRef();
    const addressRef = React.useRef();
    const {transactions,currentAccount,chainId,handleChange,sendTransaction,isLoading}=React.useContext(TransactionContext);
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      function validateInputAddresses(address) {
        return (/^(0x){1}[0-9a-fA-F]{40}$/i.test(address));
}
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!currentAccount)return alert("Connect To Web3 Ropsten Network First");
        if(chainId!=3)return alert("Connect To Ropsten Network First");
        if(!validateEmail(emailRef.current.value))return alert("Enter Valid Email");
        if(!validateInputAddresses(addressRef.current.value))return alert("Enter Valid Address");
        const arr=transactions.filter((val)=>{
            return (val.email===emailRef.current.value && val.ethAddress===addressRef.current.value);
        });
        // console.log("arr",arr);
        if(arr.length>0)return alert("User Already Exists");
        console.log(usernameRef.current.value, emailRef.current.value,addressRef.current.value);
        sendTransaction(usernameRef.current.value, emailRef.current.value,addressRef.current.value);
      };
    

    return(
        < RegisterWrapper>
        <Form onSubmit={handleSubmit}>
            <Input required ref={usernameRef} placeholder="name" name="name" onChange={handleChange}/>
            <Input required ref={emailRef} placeholder="email" email='email' onChange={handleChange}/>
            <Input required ref={addressRef} placeholder="eth address" address='address' onChange={handleChange}/>
            {isLoading && <div>Loading..</div>}
            {!isLoading && <Button type="submit">Submit</Button>}
        </Form>
        </RegisterWrapper>
    )
}

const RegisterWrapper=styled.div`
    height:90vh;
    display:flex;
    background:#F2F0EF;
`;

const Form=styled.form`
    margin:auto auto;
    display:flex;
    flex-direction:column;
    padding:20px;
    justify-content:space-around;
    min-height:30rem;
    box-sizing:content;
    align-items:center;
`;

const Button=styled.button`
    padding:10px;
    width:10rem;
`;

const Input=styled.input`
    border-radius:28px;
    width:25rem;
    padding:10px;
    outline:none;
    font-size:20px;
    height:2rem;

    @media(max-width:600px){
        width:15rem;
        height:2rem;
    }
`;
export default Register;