import React,{useContext} from 'react';

import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Factoryform = ({ inputs, title, value }) => {
  const { dispatch,metaMask,factoryContract } = useContext(DarkModeContext);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const [allWarehouse, setAllWarehouse] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);

  const [fContract, setContract] = useState(factoryContract);
  //console.log("fContract",fContract);

	const addFactoryHandler = (event) => {
		event.preventDefault();		
         console.log(fContract);
		// console.log('sending ' + event.target.factoryhashaddress.value + ' to the fContract');
		factoryContract.addFactory(event.target.factoryhashaddress.value);
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
            <form onSubmit={addFactoryHandler}>
            <input id="factoryhashaddress" type="text"/>
            <button type={"submit"}> Add Factory </button>
          </form>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factoryform;
