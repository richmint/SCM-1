import React,{useContext} from 'react';

import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { factoryColumns, factoryRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Factorytable = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    factoryRows().then(result => {
      //console.log("Data Table Reuslt = ", result);
      setData(result);
    })
  }, []);

  const { dispatch,metaMask,factoryContract } = useContext(DarkModeContext);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const [allFactory, setallFactory] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  
  const getFactoryHandler = async (event) => {
    //event.preventDefault();
    if(factoryContract!==null){
      //console.log(factoryContract);
      //console.log('sending ' + event.target.setText.value + ' to the contract');
      console.log(await factoryContract.getFactory());
      setallFactory(await factoryContract.getFactory());

    }
  }
  useEffect(() => {
    // Update the document title using the browser API
    getFactoryHandler();
  });
  const alllist = []
  if (allFactory) {
    allFactory.forEach((allF) => {
      alllist.push(
        <><tr>
          <td>{allF}</td>
          <td>Remove</td>
        </tr></>
      )
    })
  } else {
    alllist.push(
      <><tr>
        <td colSpan="2">No Record Found</td>
      </tr></>
    )
  }
  return (
    <>
    <div className="new">
      <div className="newContainer">
        <div className="top">
        <div className="datatableTitle">
        <button style={{float:"right"}}>
        <Link to="/factory/new" className="link">
          Add New
        </Link>
        </button>
      </div>
        </div>
        <div className="bottom">
          <div className="right">
            <table>
              <tr>
                <th>Factory Address</th>
                <th>Action</th>
              </tr>
              {alllist}
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Factorytable;


