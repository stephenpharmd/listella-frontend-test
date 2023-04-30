import React from "react";
import { ReactComponent as Logo } from "../public/listella.svg";

function Navbar() {
  return (
    <nav className="navbar" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2%', gap: '10px'}}>
      <div className="navbar-logo">
        <Logo />
      </div>
      <span style={{fontFamily: 'helvetica', fontSize: '20px'}}>Image Uploader</span>
    </nav>
  );
}

export default Navbar;