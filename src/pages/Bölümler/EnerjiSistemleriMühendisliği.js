import React from "react";

const EnerjiSistemleriMühendisliği = () => {
  const handleRedirect = () => {
    window.location.href = "https://enerjisistemlerimuh.mcbu.edu.tr/";
  };
  return (
    <div>
      <h1>Enerji Sistemleri Mühendisliği Bölümü</h1>
      <button onClick={handleRedirect}>
        Enerji Sistemleri Mühendisliği Sayfasına Git
      </button>
    </div>
  );
};

export default EnerjiSistemleriMühendisliği;
