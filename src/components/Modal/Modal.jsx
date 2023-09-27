import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [itemName, setItemName] = useState("");
  const [itemBrand, setItemBrand] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    setErrorMessage("");
    setItemName("");
    setItemBrand("");
    setItemPrice("");
    setItemQuantity("");

    if (!itemName || !itemBrand || !itemPrice || !itemQuantity) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setErrorMessage("");

    const newItem = {
      id: Math.random(),
      productName: itemName,
      brand: itemBrand,
      price: parseFloat(itemPrice),
      quantity: parseInt(itemQuantity),
    };

    onSubmit(newItem);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Add Item</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <label>
          Product Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            value={itemBrand}
            onChange={(e) => setItemBrand(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Add</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
