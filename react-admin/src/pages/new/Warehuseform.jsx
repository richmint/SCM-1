import React,{useContext} from 'react';

import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Warehouse_abi from '../../artifacts/contracts/Roles/Warehouse.sol/Warehouse.json'
import { useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { ethers } from 'ethers'; 


const Warehouseform = ({ inputs, title, value }) => {
  const { dispatch,metaMask,myContract } = useContext(DarkModeContext);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const [allWarehouse, setAllWarehouse] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);

  const [contract, setContract] = useState(myContract);
  console.log("contract",contract);

    // const connectWalletHandler = () => {
	// 	if (window.ethereum && window.ethereum.isMetaMask) {

	// 		window.ethereum.request({ method: 'eth_requestAccounts'})
	// 		.then(result => {
	// 			accountChangedHandler(result[0]);
	// 			setConnButtonText('Wallet Connected');
	// 		})
	// 		.catch(error => {
	// 			setErrorMessage(error.message);
			
	// 		});

	// 	} else {
	// 		console.log('Need to install MetaMask');
	// 		setErrorMessage('Please install MetaMask browser extension to interact');
	// 	}
	// }
    // const accountChangedHandler = (newAccount) => {
	// 	setDefaultAccount(newAccount);
		
	// 	console.log('accountChangedHandler called ',newAccount);
	// 	updateEthers();
	// }
    // const chainChangedHandler = () => {
	// 	// reload the page to avoid any errors with chain change mid use of application
	// 	window.location.reload();
	// }
    // // listen for account changes
	// window.ethereum.on('accountsChanged', accountChangedHandler);

	// window.ethereum.on('chainChanged', chainChangedHandler);
    // const updateEthers = () => {
	// 	let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
	// 	setProvider(tempProvider);

	// 	let tempSigner = tempProvider.getSigner();
	// 	setSigner(tempSigner);

	// 	let tempContract = new ethers.Contract(contractAddress, Warehouse_abi.abi, tempSigner);
	// 	setContract(tempContract);
			
	// }
	const addWarehouseHandler = (event) => {
		event.preventDefault();		
        // console.log(contract);
		// console.log('sending ' + event.target.setText.value + ' to the contract');
		 myContract.addWarehouse(event.target.setText.value);
	}

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">          
            <form onSubmit={addWarehouseHandler}>
            <input id="setText" type="text"/>
            <button type={"submit"}> Add Warehouse </button>
          </form>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warehouseform;
