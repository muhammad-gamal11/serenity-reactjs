import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  Checkout,
  Error,
  About,
  Cart,
  Private,
  Products,
  SingleProduct,
} from "./pages";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<SingleProduct />} />
        <Route
          exact
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route exact path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
