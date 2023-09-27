import React, { useState, useEffect } from "react";
import "./OrderCart.css";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from "react-redux";

import { FaSearch, FaSave, FaTrash, FaEdit } from "react-icons/fa";
import {
  addItem,
  updateItem,
  removeItem,
  updateStatus,
} from "../../store/cartSlice";
import OrderHeader from "../OrderHeader/OrderHeader";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const OrderCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCart, setFilteredCart] = useState([]);
  const [editItem, setEditItem] = useState(null);

  console.log(cart);

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

  const handleEdit = (item) => {
    setEditItem(item);
    setIsModalOpen(true);
  };

  const handleSave = (item) => {
    console.log(item);
    dispatch(updateItem(item));
    const message = `Approved`;
    dispatch(updateStatus({ id: item.id, message }));
    setIsModalOpen(false);
    setEditItem(null);
  };

  const handleRemove = (item) => {
    console.log(item);

    dispatch(updateItem(item));
    const message = `Missing`;
    dispatch(updateStatus({ id: item.id, message }));

    // dispatch(removeItem(item.id));
  };

  const addItemToCart = (item) => {
    dispatch(addItem(item));
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <OrderHeader total={calculateTotal()} />
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
                    {item.status !== "" && (
                      <span
                        className={`${
                          item.status === "Approved" ? "approved" : "missing"
                        }`}
                      >
                        {item.status}
                      </span>
                    )}

                    <button
                      className="btn"
                      onClick={() => {
                        console.log(item, "Item");
                        handleSave(item);
                      }}
                    >
                      <AiOutlineCheck />
                    </button>
                    <button className="btn" onClick={() => handleRemove(item)}>
                      <AiOutlineClose />
                    </button>
                    <button className="btn" onClick={() => handleEdit(item)}>
                      edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={addItemToCart}
        />
      </div>
    </>
  );
};

export default OrderCart;
