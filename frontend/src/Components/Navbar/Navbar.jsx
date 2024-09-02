import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">
          FlavorFly<span>.</span>
        </Link>
      </h1>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search_icon" />
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img
              src={assets.basket_icon}
              alt="basket_icon"
              className="cart-icon"
            />
          </Link>

          <div className={getTotalCartAmount() ? "dot" : ""}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
