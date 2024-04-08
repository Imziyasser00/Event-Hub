import React from "react";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/linkedIn.png";

const Footer = () => {
  return (
    <div className="bg-HeroBanner h-64">
      <div>
        <div className="text-4xl font-bold text-white w-full text-center pt-8">
          Event <span className="text-primary">Hub</span>
        </div>
        <div className="w-full text-center mt-8">
          <input
            type="email"
            className="h-11 rounded-sm w-1/5 mr-2 px-3"
            placeholder="Enter your email"
          />
          <button className="bg-primary text-white py-2 px-4 text-xl rounded-sm">
            Subscribe
          </button>
        </div>
        <div className="h-0.5 bg-white mt-12 w-[90%] mx-auto"></div>
        <div className="flex  gap-6 mt-4 justify-center">
          <a href="https://www.linkedin.com/in/yassir-imzi/">
            <img src={LinkedIn} alt="LinkedIn" target="_blank"/>
          </a>
          <a href="https://www.instagram.com/yass_sir__/" target="_blank">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://yassirimzi.com/" target="_blank">
            <img src={Facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
