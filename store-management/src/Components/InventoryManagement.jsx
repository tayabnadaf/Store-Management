import React, { useState } from 'react';

function InventoryManagement() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');

  const handleInventoryUpdate = (event) => {
    event.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      stock: productStock
    };

    setProducts([...products, newProduct]);

    setProductName('');
    setProductPrice('');
    setProductStock('');
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      <form onSubmit={handleInventoryUpdate}>
        <label>
          Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Stock:
          <input
            type="number"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
            required
          />
        </label>
        <button type="submit">Update Inventory</button>
      </form>

      {products.length > 0 && (
        <div>
          <h2>Product Inventory</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default InventoryManagement;
