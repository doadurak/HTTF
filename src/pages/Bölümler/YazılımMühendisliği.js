import React from "react";

const YazılımMühendisliği = () => {
  const handleRedirect = () => {
    window.location.href = "https://yazilimmuh.mcbu.edu.tr/";
  };
  return (
    <div>
      <h1>Yazılım Mühendisliği Bölümü</h1>
      <button onClick={handleRedirect}>
        Yazılım Mühendisliği Sayfasına Git
      </button>
    </div>
  );
};

export default YazılımMühendisliği;
