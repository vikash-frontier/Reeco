import React, { useState, useEffect } from "react";
import "./Modal.css";

const initialState = {
  itemName: "",
  itemBrand: "",
  itemPrice: "",
  itemQuantity: "",
  errorMessage: "",
};

const Modal = ({ isOpen, onClose, onSubmit, editItem }) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (editItem) {
      setFormData({
        itemName: editItem.productName,
        itemBrand: editItem.brand,
        itemPrice: String(editItem.price),
        itemQuantity: String(editItem.quantity),
        errorMessage: "",
      });
    } else {
      setFormData(initialState);
    }
  }, [editItem]);

  const handleSubmit = () => {
    const { itemName, itemBrand, itemPrice, itemQuantity } = formData;

    if (!itemName || !itemBrand || !itemPrice || !itemQuantity) {
      setFormData({ ...formData, errorMessage: "Please fill in all fields." });
      return;
    }

    if (editItem) {
      editItem.productName = itemName;
      editItem.brand = itemBrand;
      editItem.price = parseFloat(itemPrice);
      editItem.quantity = parseInt(itemQuantity);

      onSubmit(editItem);
    } else {
      const newItem = {
        id: Math.random(),
        productName: itemName,
        brand: itemBrand,
        price: parseFloat(itemPrice),
        quantity: parseInt(itemQuantity),
      };

      onSubmit(newItem);
    }

    setFormData(initialState);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Add Item</h2>
        {formData.errorMessage && (
          <p className="error-message">{formData.errorMessage}</p>
        )}
        <label>
          Product Name:
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            name="itemBrand"
            value={formData.itemBrand}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="itemPrice"
            value={formData.itemPrice}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="itemQuantity"
            value={formData.itemQuantity}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>{editItem ? "Update" : "Add"}</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
