// import React from 'react';

// import "./datatable.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { factoryColumns, factoryRows } from "../../datatablesource";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// const Factorytable = () => {
//   const [data, setData] = useState([]);

//   useEffect(()=>{
//     factoryRows().then(result=>{
//       setData(result); 
//     })
//   },[]);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         Factory
//         <Link to="/factory/new" className="link">
//           Add New
//         </Link>
//       </div>
//       {
//         data.length > 0 && 
//           <DataGrid
//             className="datagrid"
//             rows={data}
//             columns={factoryColumns.concat(actionColumn)}
//             pageSize={9}
//             getRowId={(row) => row._id}
//             rowsPerPageOptions={[9]}
//             checkboxSelection
//           />
//         }
//     </div>
//   );
// };

// export default Factorytable;







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
            <h3>Address: {defaultAccount}</h3>
            {/*<button onClick={connectWalletHandler}>Connect Metamask</button>*/}
            <button onClick={getFactoryHandler}>Get Factory List</button>
            <br></br>
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


