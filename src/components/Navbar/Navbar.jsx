import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/Tab2Score.png" alt="Logo" className="navbar-logo" />
        <span className="navbar-title">Tab2Score</span>
      </div>

      <div className="navbar-right">
        <a href="mailto:adrianpolenta777@gmail.com" className="navbar-contact">
          Quejas Anon.
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
