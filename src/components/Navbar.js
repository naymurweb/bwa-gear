import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import ButtonSecondary from "./ButtonSecondary";
const Navbar = () => {
  const navItems = (
    <React.Fragment>
      <li>
        <Link to="/home">HOME</Link>
      </li>
      <li>
        <Link to="/popular">POPULAR</Link>
      </li>
      <li>
        <Link to="/new-comer">NEW COMER</Link>
      </li>
      <li>
        <Link to="/about">ABOUT</Link>
      </li>
    </React.Fragment>
  );
  return (
    <nav className="bg-primary">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="text-myWhite list-none flex gap-20 text-lg hidden">
          {navItems}
        </div>
        <div>
          <ButtonSecondary color={"bg-secondary"}>Login</ButtonSecondary>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
