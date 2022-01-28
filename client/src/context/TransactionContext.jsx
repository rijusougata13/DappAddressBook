import React,{useState,useEffect} from "react";
import {ethers} from 'ethers';
import { contractABI,contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();
const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    return transactionContract;
}

export const TransactionProvider=({children})=>{
    const [currentAccount,setCurrentAccount] = useState(null);
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        address:"",
    });
    const [isLoading,setIsLoading] = useState(false);
    const [transactionCount,setTransactionCount] = useState(0);
    const [transactions,setTransactions] = useState([]);
    const [chainId,setChainId]=useState(1);
    
    const checkNetwork = async () => {
        const network = await ethereum.request({ method: 'net_version' });
        setChainId(network);
        console.log("network",network);
        if(network!=3)return false;
        return true;
    };
    
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const getAllTransactions = async () => {
        try{
            const transactionContract=getEthereumContract();
            const availableTransactions = await transactionContract.getAllData();
            console.log("availableTransactions",availableTransactions);
            const structuredTransactions = availableTransactions.map(transaction => {
                return {
                    ...transaction,
                    addressFrom:transaction.sender,
                    timestamp:new Date(transaction.date),
                }
            })
            console.log('structuredTransactions',structuredTransactions);
            setTransactions(structuredTransactions);
            const transactionCount=await transactionContract.getTransactionCount();
         setTransactionCount(transactionCount.toNumber());
        }

        catch(e){
            console.log(e);
        }
    }
    const sendTransaction=async(name,email,address)=>{
        try{
            if(!ethereum)return alert("please install metamask");
            // const { name, email, address } = formData;
            console.log("formData",name,email,address);
            const ethAddress=address;
           const transactionContract= getEthereumContract();
           console.log('transactionContract',transactionContract);
           
         const transactionHash=await  transactionContract.addToBlockChain(name,email,ethAddress);
          setIsLoading(true);
          console.log('loading',transactionHash);
          await transactionHash.wait();
          setIsLoading(false);
          const transactionCount=await transactionContract.getTransactionCount();
         setTransactionCount(transactionCount.toNumber());
        }
        catch(e){
            console.log(e);
            throw new Error("no eth obj");
        }
    }
    const connectWallet = async () => {
        try{
            if(!ethereum)return alert("Please install Metamask");
            const accounts=await ethereum.request({method:'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        }catch(error){
            console.log(error);
            throw new Error("No ethereum object");
        }
    }

    const countTransaction=async()=>{
        const transactionContract=getEthereumContract();
        const count=await transactionContract.getTransactionCount();
        setTransactionCount(count);
    }
    const checkIfWalletIsConnected=async()=>{
        try{
         if(!ethereum)return alert("Please install Metamask");
         const accounts=await ethereum.request({method:'eth_accounts'});
         if(accounts.length){
             setCurrentAccount(accounts[0]);
             getAllTransactions();
         }
         else {
             console.log('no account found');
         }
         console.log("accounts",accounts);
         }
         catch(e){
             console.log("No ethereum object");
         }
     }

    useEffect(()=>{
        checkIfWalletIsConnected();
    },[])
    useEffect(()=>{
       const connectwallet=async()=>{
        await   connectWallet();
       };
       const checknetwork=async()=>{
        await   checkNetwork();
       };
       connectwallet();
       checknetwork();
    },[]);
    useEffect(()=>{
        const getalltransactions=async()=>{
            await getAllTransactions();
        };
        getalltransactions();
    },[currentAccount]);
    
    return(
        <TransactionContext.Provider value={{
            getAllTransactions,
            transactionCount,
            transactions,
            currentAccount,
            connectWallet,
            checkNetwork,
            chainId,
            handleChange,
            sendTransaction,
            isLoading
        }}
        >{children}
        </TransactionContext.Provider>
        )
}

