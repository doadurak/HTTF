import React from "react";

const DarkCard = () => {
  const cardStyle = {
    backgroundColor: "#002147",
    color: "white",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "768px",
    margin: "0 auto", // margin-top kaldırıldı!
  };

  const headingStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    marginTop: "0.5rem",
  };

  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>İletişim Kutusu</h2>
      <p><strong>Telefon:</strong> 0 (236) 314 10 10</p>
      <p><strong>Faks:</strong> 0 (236) 314 20 20</p>
      <p style={paragraphStyle}><strong>E-posta:</strong> teknoloji@cbu.edu.tr</p>
      <p style={paragraphStyle}><strong>Öğrenci E-postası:</strong> teknoloji.ogrenci@cbu.edu.tr</p>
      <p style={paragraphStyle}><strong>Staj Birimi:</strong> teknoloji.staj@cbu.edu.tr</p>
    </div>
  );
};

export default DarkCard;
