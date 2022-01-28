import React, { useEffect, useState ,useContext} from "react";
import styled from 'styled-components';
import Card from "../components/Card";
import Welcome from "../components/Welcome";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenURL";

const Home = () => {
  const [data,setData]=useState([]);
  const [dataToShow,setDataToShow]=useState([]);
  const [searchVal,setSearchVal]=useState("");
  const [loading,setLoading]=useState(false);
  const {transactions,currentAccount,connectWallet,chainId,transactionCount}=useContext(TransactionContext);

  useEffect(()=>{
  console.log('data',transactions);
  },[])

  const handleSearch=async(e)=>{
    e.preventDefault();
    if(!currentAccount)return alert("Connect To Web3 Ropsten Network First");
    if(chainId!=3)return alert("Connect To Ropsten Network First");
    setLoading(true);
    setSearchVal(e.target.value);
    const arr=transactions.filter((val)=>{
      return val.email.startsWith(e.target.value);
    })
    setDataToShow(arr);
    setLoading(false);
  }
  return(
 <HomeWrapper >
   <Welcome/>
   <WalletConnect>
    <div>
     {!currentAccount?
    <ConnectButton onClick={connectWallet}>Connect Wallet</ConnectButton>
    :<p><span>User: </span>{shortenAddress(currentAccount)}</p>
     }
     </div>
     <div>
      {currentAccount && <p><span>Total No of Transaction: </span>{transactionCount}</p>}
     </div>
    </WalletConnect>
    <SearchWrapper>
      <Search placeholder="Enter the email" value={searchVal} onChange={e=>handleSearch(e)}/>
    </SearchWrapper>
    <ViewWrapper>
      {
        searchVal && loading && (
          <div>Loading..</div>
        )
      }
      {
        searchVal && !loading && dataToShow.length==0 && (
          <div>No Search Result Found</div>
        )
      }
      {
        searchVal && !loading &&  dataToShow && dataToShow.map(val=>{
          return (
            <Card name={val.name} address={val.ethAddress} email={val.email}/>
          )
        })
      }
      {
        !searchVal && (
          <div>Please Start Typing Email Address</div>
        )
      }
    </ViewWrapper>
  </HomeWrapper>
  );
};

const WalletConnect=styled.div`
width:100%;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  box-sizing:content;

  
  
`;

const ConnectButton=styled.button`
  padding:10px;
  background:green;
  color:white;
  border:none;
  border-radius:5px;
  cursor:pointer;
  margin:auto auto;

`;

const HomeWrapper=styled.div`
  min-height:100vh;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  background:#F2F0EF;
`;

const Search=styled.input`
  padding:10px;
  border-radius:25px;
  border:none;
  height:50px;
  width:500px;
  outline:none;
  font-size:20px;
  box-shadow: 5px 3px 15px gray;

  @media(max-width:600px){
    width:300px;
  }
`;

const SearchWrapper=styled.div`
  width:100%;
  display:flex;
  padding:10px 0;
  align-content:center;
  align-items:center;
  focus:none;
  justify-content:center;
  flex:1;
`;

const ViewWrapper=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  flex:4;
  flex-wrap:wrap;
`;
export default Home;