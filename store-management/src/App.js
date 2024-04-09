import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import CashManagement from "./Components/CashManagement";
import CustomerManagement from "./Components/CustomerManagement";
import InventoryManagement from "./Components/InventoryManagement";
import TransactionDetails from "./Components/TransactionDetails";
import UserProfile from "./Components/UserProfile";
import Menu from "./Components/Menu";

function App() {
  return (
    <>
    <Router>
      <div className="container">
        <Menu/>
      </div>
      <div className="AppContent">
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route exact path="/cashmanagement" element={<CashManagement/>}/>
          <Route exact path="/customerManagement" element={<CustomerManagement/>}/>
          <Route exact path="/inventoryManagement" element={<InventoryManagement/>}/>
          <Route exact path="/transactionDetails" element={<TransactionDetails/>}/>
          <Route exact path="/userProfile" element={<UserProfile/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
