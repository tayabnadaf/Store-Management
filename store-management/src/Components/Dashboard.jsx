import React from "react";
import CashManagement from "./CashManagement";
import '../Style/Dashboard.css'
function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <CashManagement />
    </div>
  );
}

export default Dashboard;
