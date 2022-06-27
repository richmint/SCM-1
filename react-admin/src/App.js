import React from 'react';

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import WarehouseList from "./pages/list/warehouseList";
import FactoryList from "./pages/list/factoryList"; 
import ProductApproverList from "./pages/list/ProductApproverList";
import DistributerList from "./pages/list/DistributerList";
import RetailerList from "./pages/list/RetailerList";   
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs, warehouseInputs, factoryInputs, productApproverInputs, distributerInputs, retailerInputs} from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Warehouseform from "./pages/new/Warehuseform";
import Factoryform from "./pages/new/Factoryform";

function App() {  
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="warehouse">
              <Route index element={<WarehouseList />} />
              <Route path=":warehouseId" element={<Single />} />
              <Route
                path="new"
                element={<Warehouseform inputs={warehouseInputs} title="Add New Warehouse" />}
              />
            </Route>
            <Route path="factory">
              <Route index element={<FactoryList />} />
              <Route path=":factoryId" element={<Single />} />
              <Route
                path="new"
                element={<Factoryform inputs={factoryInputs} title="Add New Factory" />}
              />
            </Route>
            <Route path="product-approver">
              <Route index element={<ProductApproverList />} />
              <Route path=":productApproverId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productApproverInputs} title="Add New Product Approver" />}
              />
            </Route>
            <Route path="distributer">
              <Route index element={<DistributerList />} />
              <Route path=":distributerId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={distributerInputs} title="Add New Distributer" />}
              />
            </Route>
            <Route path="retailer">
              <Route index element={<RetailerList />} />
              <Route path=":retailerId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={retailerInputs} title="Add New Retailer" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


//import logo from './logo.svg';
//import './App.css';
// import SimpleStorage from './SimpleStorage';

// function App() {
//   return (
//     <div className="App">
//       <SimpleStorage/>
//     </div>
//   );
// }

// export default App;
