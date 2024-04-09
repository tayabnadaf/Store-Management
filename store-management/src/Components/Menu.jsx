import React from "react";
import { Link } from "react-router-dom";
import '../Style/Menu.css'
const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/cashmanagement">Cash Management</Link>
        </li>
        <li>
          <Link to="/customerManagement">Customer Management</Link>
        </li>
        <li>
          <Link to="/inventoryManagement">Inventory Management</Link>
        </li>
        <li>
          <Link to="/transactionDetails">Transaction Details</Link>
        </li>
        <li>
          <Link to="/userProfile">User Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
