import React,{useContext} from 'react';

import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { warehouseColumns, warehouseRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


import Sidebar from "../../components/sidebar/Sidebar";
//import Navbar from "../../components/navbar/Navbar";
import Warehouse_abi from '../../artifacts/contracts/Roles/Warehouse.sol/Warehouse.json'
import { ethers } from 'ethers';

const Warehousetable = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Trigger = ")
    warehouseRows().then(result => {
      //console.log("Data Table Reuslt = ", result);
      setData(result);
      console.log("Trigger inside method ")
      getWarehouseHandler();
    })
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
 // let contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  
  const { dispatch,metaMask,myContract } = useContext(DarkModeContext);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const [allWarehouse, setAllWarehouse] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  // const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  // const [currentContractVal, setCurrentContractVal] = useState(null);

  // const [provider, setProvider] = useState(null);
  // const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(myContract);
  console.log("contract",contract);
  // const connectWalletHandler = () => {
  //   if (window.ethereum && window.ethereum.isMetaMask) {

  //     window.ethereum.request({ method: 'eth_requestAccounts' })
  //       .then(result => {
  //         accountChangedHandler(result[0]);
  //         setConnButtonText('Wallet Connected');
  //       })
  //       .catch(error => {
  //         setErrorMessage(error.message);

  //       });

  //   } else {
  //     console.log('Need to install MetaMask');
  //     setErrorMessage('Please install MetaMask browser extension to interact');
  //   }
  // }

  // const accountChangedHandler = (newAccount) => {
  //   setDefaultAccount(newAccount);

  //   console.log('accountChangedHandler called ', newAccount);
  //   updateEthers();
  // }
  // const chainChangedHandler = () => {
  //   // reload the page to avoid any errors with chain change mid use of application
  //   window.location.reload();
  // }
  // // listen for account changes
  // window.ethereum.on('accountsChanged', accountChangedHandler);

  // window.ethereum.on('chainChanged', chainChangedHandler);
  // const updateEthers = () => {
  //   let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
  //   setProvider(tempProvider);

  //   let tempSigner = tempProvider.getSigner();
  //   setSigner(tempSigner);

  //   let tempContract = new ethers.Contract(contractAddress, Warehouse_abi.abi, tempSigner);
  //   setContract(tempContract);

  // }
  const getWarehouseHandler = async (event) => {
    //event.preventDefault();
    console.log("Calling outer method")
    if(myContract!==null){
      console.log("Calling inside method")
      console.log(myContract);
      //console.log('sending ' + event.target.setText.value + ' to the contract');
      console.log(await myContract.getWarehouse());
      setAllWarehouse(await myContract.getWarehouse());

    }
  }

  useEffect(() => {
    //alert("Hello");
    //connectWalletHandler();
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



  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //       <div className="new">
  //       <Sidebar />
  //       <div className="newContainer">
  //         <Navbar />
  //         <div className="top">

  //         </div>
  //         <div className="bottom">
  //           <div className="right">
  //           <h3>Address: {defaultAccount}</h3>
  //           <button onClick={connectWalletHandler}>Connect Metamask</button>
  //           <button onClick={getWarehouseHandler}>Get Warehouse List</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //       );
  //     },
  //   },
  // ];






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
  // return (
  //   <div className="datatable">
  //     <div className="datatableTitle">
  //       Warehouse
  //       <Link to="/warehouse/new" className="link">
  //         Add New
  //       </Link>
  //     </div>
  //     {
  //       data.length > 0 && 
  //         <DataGrid
  //           className="datagrid"
  //           rows={data}
  //           columns={warehouseColumns.concat(actionColumn)}
  //           pageSize={9}
  //           getRowId={(row) => row._id}
  //           rowsPerPageOptions={[9]}
  //           checkboxSelection
  //         />
  //       }
  //   </div>
  // );
};

export default Warehousetable;

