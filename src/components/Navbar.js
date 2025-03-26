import React, { useState } from "react";
import "./Navbar.css";
import HttfLogo from "../content/logo/HttfLogo.svg";

const Navbar = () => {
  const [isFacultyOpen, setIsFacultyOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="/">
        <img
          className="nav-img"
          width={200}
          height={200}
          src={HttfLogo}
          alt="Hasan Ferdi Turgutlu Teknoloji Fakültesi"
        />
      </a>
      <div className="main-link">
        <a href="/">Hasan Ferdi Turgutlu Teknoloji Fakültesi</a>
      </div>
      <div className="links">
        <div
          className="dropdown"
          onMouseEnter={() => setIsFacultyOpen(true)}
          onMouseLeave={() => setIsFacultyOpen(false)}
        >
          <a to="/">Fakülte</a>
          {isFacultyOpen && (
            <div className="mega-menu">
              <div className="mega-column">
                <h4>Genel Bilgiler</h4>
                <a href="#">Tarihçe</a>
                <a href="#">Misyon & Vizyon</a>
                <a href="#">Kalite Politikası</a>
              </div>
              <div className="mega-column">
                <h4>Yönetim</h4>
                <a href="#">Dekan</a>
                <a href="#">Yönetim Kurulu</a>
                <a href="#">Akademik Kurul</a>
              </div>
              <div className="mega-column">
                <h4>Birimler</h4>
                <a href="#">Öğrenci İşleri</a>
                <a href="#">Personel Dairesi</a>
              </div>
            </div>
          )}
        </div>
        <a href="/">İdari</a>
        <a href="/">Akademik</a>
        <a href="/">Öğrenci</a>
        <a href="/">Bölümler</a>
        <a href="/">İletişim</a>
      </div>
    </nav>
  );
};

export default Navbar;
