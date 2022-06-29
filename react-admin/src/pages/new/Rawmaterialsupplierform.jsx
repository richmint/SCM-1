import React, { useContext } from 'react';
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
const Factoryform = ({ inputs, title, value }) => {
  const { dispatch, metaMask, factoryContract } = useContext(DarkModeContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [allWarehouse, setAllWarehouse] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [fContract, setContract] = useState(factoryContract);
  //console.log("fContract",fContract);
  const addFactoryHandler = (event) => {
    event.preventDefault();
    console.log(fContract);
    // console.log('sending ' + event.target.rawmaterialsupplieraddress.value + ' to the fContract');
    factoryContract.addFactory(event.target.rawmaterialsupplieraddress.value);
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
              <div className="formInput">
                <label>Raw Material Supplier Hash Address</label>
                <input id="rawmaterialsupplieraddress" type="text" />
              </div>
              <div className="formInput">
                <label>Supplier Name</label>
                <input id="name" type="text" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input id="email" type="text" />
              </div>
              <div className="formInput">
                <label>Location</label>
                <input id="location" type="text" />
              </div>
              <button type={"submit"}> Submit </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Factoryform;
