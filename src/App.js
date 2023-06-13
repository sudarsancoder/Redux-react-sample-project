import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import Header from "./containers/Header";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}
