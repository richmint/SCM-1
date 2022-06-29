import React from 'react';

import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Warehouse_abi from '../../artifacts/contracts/Roles/Warehouse.sol/Warehouse.json'
import { useState } from "react";
import { ethers } from 'ethers';
// let contractAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
const New = ({ inputs, title, value }) => {

	const [currentContractVal, setCurrentContractVal] = useState(null);

	const [contract, setContract] = useState(null);	

	const setHandler = () => {
		

		// let tempContract = new ethers.Contract(contractAddress, Warehouse_abi.abi, tempSigner);
		// setContract(tempContract);	

    // console.log(tempContract);
  
  
	}

	// const parentTempSigner = (data) => {
	// 	console.log(data)
	// }

	function parentTempSigner(data){
		console.log("hello : ", data)
	}

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar alert={parentTempSigner} />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">

            <form onSubmit={setHandler}>
            <input id="setText" type="text"/>
            <button type={"button"}> Add Warehouse </button>
          </form>
              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button> */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
