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
      //console.log("Data Table Reuslt = ", result);
      setData(result);
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
    if(warehouseContract!==null){
      //console.log(warehouseContract);
      //console.log('sending ' + event.target.setText.value + ' to the contract');
      console.log(await warehouseContract.getWarehouse());
      setAllWarehouse(await warehouseContract.getWarehouse());

    }
  }
  useEffect(() => {
    // Update the document title using the browser API
    getWarehouseHandler();
  });
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
