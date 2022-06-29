import React,{useContext} from 'react';

import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { warehouseColumns, warehouseRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Warehousetable = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    warehouseRows().then(result => {
      setData(result);
      setTimeout(()=> getWarehouseHandler(),1000);
    })
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const { dispatch,metaMask,warehouseContract } = useContext(DarkModeContext);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const [allWarehouse, setAllWarehouse] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  
  const getWarehouseHandler = async (event) => {
    //event.preventDefault();
    if(warehouseContract !== null){
      setAllWarehouse(await warehouseContract.getWarehouse());
    }
  }

  const alllist = []
  if (allWarehouse) {
    allWarehouse.forEach((allW) => {
      alllist.push(
        <><tr>
          <td>{allW}</td>
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
        <Link to="/warehouse/new" className="link">
          Add New
        </Link>
        </button>
      </div>
        </div>
        <div className="bottom">
          <div className="right">
            <h3>Address: {defaultAccount}</h3>
            {/*<button onClick={connectWalletHandler}>Connect Metamask</button>*/}
            <button onClick={getWarehouseHandler}>Get Warehouse List</button>
            <br></br>
            <table>
              <tr>
                <th>Warehouse Address</th>
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
export default Warehousetable;
