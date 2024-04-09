import React, { useState } from "react";
import CashManagement from "./CashManagement";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Cash Management</h2>
      <CashManagement addTransaction={addTransaction} />

      <h2>Transaction Summary</h2>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              <strong>{transaction.name}</strong> {transaction.type === "in" ? "received" : "sent"} ${transaction.amount}
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions yet.</p>
      )}

    </div>
  );
}

export default Dashboard;
