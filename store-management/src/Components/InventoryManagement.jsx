import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from './actions/inventoryActions';
import '../Style/InventoryManagement.css'

function InventoryManagement({ products, addProduct }) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');

  const handleInventoryUpdate = (event) => {
    event.preventDefault();

    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      stock: parseInt(productStock)
    };

    addProduct(newProduct);

    setProductName('');
    setProductPrice('');
    setProductStock('');
  };

  return (
    <div className="inventory-management-container">
      <h1>Inventory Management</h1>
      <form onSubmit={handleInventoryUpdate}>
        <label>
          Product:
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
        <button type="submit" className='inventory_button'>Update Inventory</button>
      </form>

      {products.length > 0 && (
        <div className="product-inventory-container">
          <h2>Product Inventory</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
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

const mapStateToProps = state => ({
  products: state.inventory.products
});

const mapDispatchToProps = {
  addProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryManagement);
