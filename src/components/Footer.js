import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import logo from "../assets/logo.svg";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="text-center p-10">
        <h2 className="md:text-4xl text-3xl  font-semibold my-4 text-white">
          Subscribe
        </h2>
        <p className="text-lg text-white">
          Subscribe to get exclusive news & offer
        </p>
        <div className="flex justify-center gap-2 m-8">
          <input
            type="text"
            placeholder="Email address"
            className="p-2 w-72 rounded-md"
          />
          <ButtonPrimary>Subscribe</ButtonPrimary>
        </div>
      </div>

      <div className="border-t border-[hsl(0,0%,40%)] ">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-4 items-center py-8 ">
            <div>
              <div className="flex items-center gap-4 font-semibold text-2xl text-white">
                <img src={logo} alt="" />
                <h3>Gear</h3>
              </div>

              <div className="flex gap-4 text-secondary text-xl my-7">
                <div className="bg-myBg1 p-1 rounded-full">
                  <FaFacebook></FaFacebook>
                </div>
                <div className="bg-myBg1 p-1 rounded-full">
                  <FaInstagramSquare></FaInstagramSquare>
                </div>
                <div className="bg-myBg1 p-1 rounded-full">
                  <FaTwitter></FaTwitter>
                </div>
              </div>
            </div>

            <div className="text-white">
              <h3 className="text-xl font-medium my-2">Resource</h3>
              <p>About Us</p>
              <p>Blog</p>
              <p> Contact</p>
              <p>FAQ</p>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-medium my-2">Legal Stuff</h3>
              <p>About Us</p>
              <p>Blog</p>
              <p> Contact</p>
              <p>FAQ</p>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-medium my-2">Office</h3>
              <p>About Us</p>
              <p>Blog</p>
              <p> Contact</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#1D292F] text-center text-white">
        Made With Love By Gear All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
