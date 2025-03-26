import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="main-link">
        <Link to={"/"}>Hasan Ferdi Turgutlu Teknoloji Fakültesi</Link>
      </div>
      <div className="links">
        <Link to ={"/"}>Fakülte</Link>
        <Link to={"/"}>İdari</Link>
        <Link to ={"/"}>Akademik</Link>
        <Link to ={"/"}>Öğrenci</Link>
        <Link to ={"/"}>Bölümler</Link>
        <Link to ={"/"}>İletişim</Link>
      </div>
    </nav>
  );
};

export default Navbar;
