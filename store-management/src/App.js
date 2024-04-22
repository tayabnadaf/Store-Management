import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import CashManagement from "./Components/CashManagement";
import CustomerManagement from "./Components/CustomerManagement";
import InventoryManagement from "./Components/InventoryManagement";
import UserProfile from "./Components/UserProfile";
import Menu from "./Components/Menu";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Components/reducers';

const store = createStore(rootReducer);
function App() {
  return (
    <Provider store={store}>
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
          <Route exact path="/userProfile" element={<UserProfile/>}/>
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
