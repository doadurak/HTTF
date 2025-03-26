import React from "react";
import "./Kulüpler.css";

const Kulüpler = () => {
  return (
    <div className="main">
      <h1 className="header">Kulüpler</h1>

      <div className="kulüp-div">
        <div className="kulüp">
          <h3 className="isim">Proje ve İnovasyon Kulübü</h3>
          <h4>
            <span>Kulüp Başkanı </span>: Ceyda Nur ÖNCEL
          </h4>
          <h4>
            <span>Kulüp Danışmanı </span>: Dr. Öğr. Üyesi Ali Uysal
          </h4>
        </div>
        <div className="kulüp">
          <h3 className="isim">Bilim ve Teknoloji Kulübü</h3>
          <h4>
            <span>Kulüp Başkanı </span>: Kazım AKDEMİR
          </h4>
          <h4>
            <span>Kulüp Danışmanı </span>: Dr. Öğr. Üyesi Özgür SOLMAZ
          </h4>
        </div>
        <div className="kulüp">
          <h3 className="isim">
            Google Developer Student Clubs Kulübü (Geliştirici Öğrenci Kulübü)
          </h3>
          <h4>
            <span>Kulüp Başkanı </span>: Baran ABAY
          </h4>
          <h4>
            <span>Kulüp Danışmanı </span>: Dr. Öğr. Üyesi Yusuf ÖZÇEVİK
          </h4>
        </div>
        <div className="kulüp">
          <h3 className="isim">Özgür Bisiklet Kulübü</h3>
          <h4>
            <span>Kulüp Başkanı </span>: Emin BAĞÇELİ
          </h4>
          <h4>
            <span>Kulüp Danışmanı </span>: Dr. Öğr. Üyesi Emin BORANDAĞ
          </h4>
        </div>
        <div className="kulüp">
          <h3 className="isim">
            Makine Tasarımı ve Makine İmalat Kulübü (MAKİMA)
          </h3>
          <h4>
            <span>Kulüp Başkanı </span>: Yiğit BAHAR
          </h4>
          <h4>
            <span>Kulüp Danışmanı </span>: Dr. Öğr. Üyesi Hamza TAŞ
          </h4>
        </div>
        <div className="kulüp">
          <h3 className="isim">Mekatronik Kulübü</h3>
          <h4>
            <span>Kulüp Başkanı </span>: İrem Sıla ASLANTÜRK
          </h4>
          <h4>
            <span>Kulüp Danışmanı </span>: Arş. Gör. Dr. Ethem KELEKÇİ
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Kulüpler;
