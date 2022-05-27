import React from "react";
import { NavLink } from "react-router-dom";
import cart from "./Images/cart.jpg";
import "./css/Background.css";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItem=useSelector((state)=>state.cart);
  return (
    <div className="header">
      <div className="menu"> <label htmlFor="check"> <i className="fas fa-bars"></i></label></div>
      <div className="nav">
        <div className="nav-item flex">
          <NavLink to="/home"><img  src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"height="50px"alt=""/></NavLink>
          <div className="hflex">
            <div><NavLink to="/home" style={({ isActive }) => {  return {color: isActive ? "red" : "Black", textDecoration: "none"}}}> Home</NavLink></div>
            <div>Favorites</div>
            <div>Orders</div>
            <div>Contact</div>
          </div>
          <div className="hd2">Profile </div>
          <button className="carticon">
            <NavLink to="/cart"><img src={cart} height="40px" alt="" /></NavLink>
            <span className="itemNunm">{cartItem>0?cartItem:""}</span>
          </button>
        </div>
      </div>
      <hr style={{ marginTop: "0.1%" }} />
    </div>
  );
};

export default Header;
