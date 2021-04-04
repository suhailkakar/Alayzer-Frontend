import React from "react";
import Logo from "../Images/logo.svg";
export default function Menu() {
  return (
    <ul>
      <li>
        <img src={Logo} className="mainlogo" />
      </li>
      <div className="space" />
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Contribute</li>
      <li>FAQ</li>
      <li></li>
      <li></li>
    </ul>
  );
}
