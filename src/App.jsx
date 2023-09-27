import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Store from "./components/Store/Store";
import Analytics from "./components/Analytics/Analytics";
import OrderCart from "./components/OrderCart/OrderCart";
import Navbar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="/orders" element={<OrderCart />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/" element={<Navigate to="/orders" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
