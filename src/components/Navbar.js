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
        <a className="header" href="/">
          Yeni Nesil Mühendislik
        </a>
      </div>
      <div className="links">
        <div className="dropdown">
          <button
            className="nav-btn"
            onClick={() => {
              setIsFacultyOpen(true);
            }}
          >
            Fakülte
          </button>
          {isFacultyOpen && (
            <div className="mega-menu">
              <div className="mega-column">
                <h4>Fakülte</h4>
                <a href="/fakulte/bilgi">Genel Bilgiler</a>
                <a href="/fakulte/vizyon">Vizyon</a>
                <a href="/fakulte/misyon">Misyon</a>
                <a href="/fakulte/dekanmesaji">Dekan Mesajı</a>
              </div>
              <div className="mega-column">
                <h4>İdari</h4>
                <a href="/idari/dekanlik">Dekanlık</a>
                <a href="/idari/yonetimkurulu">Yönetim Kurulu</a>
                <a href="/idari/fakultekurulu">Fakülte Kurulu</a>
              </div>
              <div className="mega-column">
                <h4>Akademik</h4>
                <a href="/akademik/akademikkadro">Akademik Kadro</a>
                <a href="/akademik/akademiktakvim">Akademik Takvim</a>
              </div>
              <div className="mega-column">
                <h4>Öğrenci</h4>
                <a href="/ogrenci/formlar">Formlar</a>
                <a href="/ogrenci/kulupler">Kulüpler</a>
              </div>
              <div className="mega-column">
                <h4>Bölümler</h4>
                <a href="/bolumler/yazilimmuhendisligi">Yazılım Mühendisliği</a>
                <a href="/bolumler/makinemuhendisligi">Makine Mühendisliği</a>
                <a href="/bolumler/elektrikmuhendisligi">
                  Elektrik Mühendisliği
                </a>
                <a href="/bolumler/enerjisistemlerimuhendisligi">
                  Enerji Sistemleri Mühendisliği
                </a>
                <a href="/bolumler/mekatronikmuhendisligi">
                  Mekatronik Mühendisliği
                </a>
              </div>
              <div className="mega-column">
                <h4>İletişim</h4>
                <a href="/iletisim">İletişim</a>
                <a href="/iletisim/dekanamesaj">Dekana Mesaj</a>
              </div>
              <button className="close" onClick={() => setIsFacultyOpen(false)}>
                X
              </button>
            </div>
          )}
        </div>
        <button
          className="nav-btn"
          onClick={() => {
            setIsFacultyOpen(true);
          }}
        >
          İdari
        </button>
        <button
          className="nav-btn"
          onClick={() => {
            setIsFacultyOpen(true);
          }}
        >
          Akademik
        </button>
        <button
          className="nav-btn"
          onClick={() => {
            setIsFacultyOpen(true);
          }}
        >
          Öğrenci
        </button>
        <button
          className="nav-btn"
          onClick={() => {
            setIsFacultyOpen(true);
          }}
        >
          Bölümler
        </button>
        <button
          className="nav-btn"
          onClick={() => {
            setIsFacultyOpen(true);
          }}
        >
          İletişim
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
