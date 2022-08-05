import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductPage/productDetail";
import Header from "./components/HeaderPage/header";
import Footer from "./components/FooterPage/footer";
import Basket from "./components/CartPage/basket";
import Home from "./components/HomePage/home";
import LoginApp from "./components/SignInPage/LoginApp";
import ProductPage from "./components/ProductInformation/productPage";
import WomenProductList from "./components/ProductsItemPage/womenslist";
import MenProductList from "./components/ProductsItemPage/menProductsList";
import SmartGearProductList from "./components/ProductsItemPage/smartGearProductList";
import AccessoriesProductList from "./components/ProductsItemPage/accessoriesProductList";
import RegisterForm from "./components/RegisterPage/register";
import Hamburger from "./components/HeaderPage/hamburger";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <Header countCartItems={cartItems.length} />
        <Hamburger countCartItems={cartItems.length} />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginApp />} />
          <Route exact path="/registerForm" element={<RegisterForm />} />
          <Route exact path="/women" element={<WomenProductList />} />
          <Route exact path="/men" element={<MenProductList />} />
          <Route exact path="/smartGear" element={<SmartGearProductList />} />
          <Route
            exact
            path="/accessories"
            element={<AccessoriesProductList />}
          />
          <Route exact path="/products" element={<ProductPage />} />
          <Route
            exact
            path="/product/:productId"
            element={<ProductDetails onAdd={onAdd} />}
          />
          <Route
            exact
            path="/cart"
            element={
              <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            }
          />
          <Route>404 Not Found!</Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
