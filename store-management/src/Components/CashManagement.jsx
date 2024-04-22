import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addTransaction} from './actions/cashActions';
import '../Style/CashManagement.css'

function CashManagement({ transactionsData, addTransaction }) {
  const [transaction, setTransaction] = useState({
    type: '',
    product: '',
    amount: '',
    customerName: ''
  });

  const handleTransaction = event => {
    event.preventDefault();

    const amount = parseFloat(transaction.amount);

    if (isNaN(amount)) {
      alert('Please enter a valid amount.');
      return; 
    }

    addTransaction({
      name: transaction.customerName,
      type: transaction.type,
      amount: amount
    });

    setTransaction({
      type: '',
      product: '',
      amount: '',
      customerName: ''
    });
  };

  return (
    <div className="cash-management-container">
      <h1>Cash Management</h1>
      <form onSubmit={handleTransaction}>
        <label>
          Customer Name:
          <input
            type="text"
            value={transaction.customerName}
            onChange={e =>
              setTransaction(prev => ({
                ...prev,
                customerName: e.target.value
              }))
            }
            required
          />
        </label>
        <label>
          Type:
          <select
            value={transaction.type}
            onChange={e =>
              setTransaction(prev => ({
                ...prev,
                type: e.target.value
              }))
            }
          >
            <option value="">Select Type</option>
            <option value="in">Cash In</option>
            <option value="out">Cash Out</option>
          </select>
        </label>
        <label>
          Product:
          <input
            type="text"
            value={transaction.product}
            onChange={e =>
              setTransaction(prev => ({
                ...prev,
                product: e.target.value
              }))
            }
          />
        </label>
        <label>
          Amount:
          <input
            type="text"
            value={transaction.amount}
            onChange={e =>
              setTransaction(prev => ({
                ...prev,
                amount: e.target.value
              }))
            }
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
      <div className="transaction-summary">
        <h2>Transaction Summary</h2>
        {transactionsData.length > 0 ? (
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactionsData.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.name}</td>
                  <td>{transaction.type === "in" ? "Received" : "Sent"}</td>
                  <td>${transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No transactions yet.</p>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  transactionsData: state.transactions.transactionsData 
});


const mapDispatchToProps ={
  addTransaction
};

export default connect(mapStateToProps, mapDispatchToProps)(CashManagement);
