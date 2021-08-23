import React from "react";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { NavLink } from "react-router-dom";

import "./index.scss";

const Header = () => {
  return (
    <div className="navBar__container">
      <div className="navBar">
        <div className="navBar__brand">
          <NavLink className="brand__link" to="/"> Acistie.h</NavLink>
        </div>
        <div className="navBar__navigation">
          <NavLink className="navigation__link" activeClassName="selected" to="/">HomePage</NavLink>
          <NavLink className="navigation__link" to="/shop" activeClassName="selected">Shop</NavLink>
          <NavLink className="navigation__link" to="/Blog" activeClassName="selected">Blog</NavLink>
          <NavLink className="navigation__link" to="/Contact" activeClassName="selected">Contact</NavLink>
        </div>
        <div className="navBar__logo">
          <LocalMallOutlinedIcon fontSize="small" />
          <SearchOutlinedIcon />
          <MenuOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
