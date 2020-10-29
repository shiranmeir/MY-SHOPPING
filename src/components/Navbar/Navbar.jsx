import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-title">myShop.</div>
      <div className="navbar-links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/received">
          Received
        </Link>
      </div>
    </header>
  );
}
