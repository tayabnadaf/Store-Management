import React, { useState } from "react"; 

function CashManagement({ addTransaction }) {

  const [transaction, setTransaction] = useState({
    type: "",
    product: "",
    amount: "",
    customerName: ""
  });

  const handleTransaction = event => {
    event.preventDefault();

    console.log('addTransaction:', addTransaction);

    const amount = parseFloat(transaction.amount);

    if (isNaN(amount)) {
      alert("Please enter a valid amount.");
      return;
    }

    addTransaction({
      name: transaction.customerName,
      type: transaction.type,
      amount: amount
    });
    console.log(addTransaction);
    

    setTransaction({
      type: "",
      product: "",
      amount: "",
      customerName: ""
    });
  };

  return (
    <div>
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
    </div>
  );
}
export default CashManagement;



