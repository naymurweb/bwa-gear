import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import ButtonSecondary from "./ButtonSecondary";
import { FaBars, FaTimes } from "react-icons/fa";
import '../stylesheet/navbar.css'

const Navbar = () => {
  const [mobilemenu, setMobilemenu] = useState(false);

  const navItems = (
    <React.Fragment>
      <li>
        <NavLink to="/home">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/popular">POPULAR</NavLink>
      </li>
      <li>
        <NavLink to="/new-comer">NEW COMER</NavLink>
      </li>
      <li>
        <NavLink to="/about">ABOUT</NavLink>
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
        {/* desktop menu */}
        <div className="text-myWhite list-none md:flex hidden gap-20 text-lg">
          {navItems}
        </div>
        {/* mobile menu */}
        <div
          className={`text-myWhite list-none md:hidden text-lg flex flex-col gap-4 text-center absolute bg-primary transition-all duration-700 ease-in-out py-10 w-11/12  ${
            mobilemenu ? "translate-y-52" : "translate-y-[-13rem]"
          }`}
        >
          {navItems}
          <ButtonSecondary color={"bg-secondary"}>Login</ButtonSecondary>
        </div>

        <div className="hidden md:block">
          <ButtonSecondary color={"bg-secondary"}>Login</ButtonSecondary>
        </div>

        <div className="md:hidden block text-white text-2xl">
          {mobilemenu ? (
            <FaTimes onClick={() => setMobilemenu(!mobilemenu)}></FaTimes>
          ) : (
            <FaBars onClick={() => setMobilemenu(!mobilemenu)}></FaBars>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
