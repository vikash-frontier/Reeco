import React from "react";
import "./OrderHeader.css";
import {
  WiDayCloudyGusts,
  WiDayCloudyHigh,
  WiFire,
  WiHail,
} from "react-icons/wi";

const OrderHeader = ({ total }) => {
  const dateInfo = () => {
    const date = new Date();

    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };

    let d = date.toLocaleString("en-IN", options);

    return d;
  };

  return (
    <div className="order-header">
      <div className="order-header-item">
        Supplier
        <br />
        <br />
        <span className="text">East coast fruits and vegitables</span>
      </div>
      <div className="order-header-item">
        Shipping Date
        <br />
        <br />
        <span className="text">{dateInfo()}</span>
      </div>
      <div className="order-header-item">
        Total:
        <br />
        <br />
        <span className="text">${total.toFixed(2)}</span>
      </div>
      <div className="order-header-item">
        Category
        <br />
        <br />
        <span className="text">
          <WiDayCloudyGusts />
          <WiDayCloudyHigh />
          <WiFire />
          <WiHail />
        </span>
      </div>
      <div className="order-header-item">
        Department
        <br />
        <br />
        <span className="text">{"300-400-202"}</span>
      </div>
      <div className="order-header-item">
        Status
        <br />
        <br />
        <span className="text">{"Awaiting for approvals"}</span>
      </div>
    </div>
  );
};

export default OrderHeader;
