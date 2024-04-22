import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCustomer, deleteCustomer } from './actions/customerActions';
import "../Style/CustomerManagement.css"

function CustomerManagement({ customers, addCustomer, deleteCustomer }) {
  const [name, setName] = useState('');
  const [funds, setFunds] = useState('');

  const handleAddCustomer = (event) => {
    event.preventDefault();

    const newCustomer = {
      name,
      funds: parseFloat(funds)
    };

    addCustomer(newCustomer);

    setName('');
    setFunds('');
  };

  const handleDeleteCustomer = (index) => {
    deleteCustomer(index);
  };

  return (
    <div className="customer-management-container">
      <h1>Customer Management</h1>
      <form onSubmit={handleAddCustomer}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Funds:
          <input
            type="number"
            value={funds}
            onChange={(e) => setFunds(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Customer</button>
      </form>

      {customers.length > 0 && (
        <div>
          <h2>Customer List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Funds</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>${customer.funds.toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleDeleteCustomer(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  customers: state.customers.customers
});

const mapDispatchToProps = {
  addCustomer,
  deleteCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerManagement);
