import React, { useState, useEffect } from "react";
import "./OrderCart.css";
import Modal from "../Modal/Modal";
import { FaSearch, FaSave, FaTrash, FaEdit } from "react-icons/fa"; // Import icons

const mockData = [
  {
    id: 1,
    productName: "Product A",
    brand: "Brand X",
    price: 10.99,
    quantity: 2,
  },
  {
    id: 2,
    productName: "Product B",
    brand: "Brand Y",
    price: 19.99,
    quantity: 1,
  },
  {
    id: 3,
    productName: "Product C",
    brand: "Brand Z",
    price: 7.49,
    quantity: 3,
  },
];

const OrderCart = () => {
  const [cart, setCart] = useState(mockData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCart, setFilteredCart] = useState([]);

  useEffect(() => {
    const filteredItems = cart.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCart(filteredItems);
  }, [cart, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // const addItemToCart = () => {
  //   // You can add your logic to add an item to the cart here.
  //   // For simplicity, let's add a new item with a random name and price.
  //   const newItem = {
  //     id: Math.random(),
  //     productName: `New Product ${Math.floor(Math.random() * 100)}`,
  //     brand: "Brand New",
  //     price: Math.random() * 100,
  //     quantity: 1,
  //   };

  //   setCart([...cart, newItem]);
  // };

  const addItemToCart = (newItem) => {
    setCart([...cart, newItem]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="order-cart">
      <h1>Order Cart</h1>
      <div className="search-and-add">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <FaSearch className="search-icon" />
        </div>
        <button onClick={openModal}>Add Item</button>
      </div>
      <div className="cart-table">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCart.map((item) => (
              <tr key={item.id}>
                <td>{item.productName}</td>
                <td>{item.brand}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="status-button"
                    onClick={() => handleEdit(item)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="status-button"
                    onClick={() => handleSave(item)}
                  >
                    <FaSave />
                  </button>
                  <button
                    className="status-button"
                    onClick={() => handleRemove(item)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart-total">
        <p>Total: ${calculateTotal().toFixed(2)}</p>
        <button>Checkout</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={addItemToCart}
      />
    </div>
  );
};

export default OrderCart;
