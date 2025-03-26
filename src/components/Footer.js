import React from "react";
import "./Footer.css";
import HttfLogo from "../content/logo/HttfLogo.svg";
import { FaArrowUp } from "react-icons/fa"; // ok için FontAwesome

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={HttfLogo} alt="Fakülte Logosu" />
        </div>

        <div className="footer-center">
          <p>
            Hasan Ferdi Turgutlu Teknoloji Fakültesi <br />
            Üniversite Caddesi No:XX, Turgutlu / Manisa <br />
            Tel: +90 (236) 000 00 00
          </p>
        </div>

        <div className="footer-right">
          <a href="#">Bilgi Edinme</a>
          <a href="#">KVKK</a>
          <a href="#">S.S.S.</a>
          <a href="#">İletişim</a>
          <button className="scroll-top-btn" onClick={scrollToTop} title="Yukarı Çık">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
