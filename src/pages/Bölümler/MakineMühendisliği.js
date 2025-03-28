import React from "react";

const MakineMühendisliği = () => {
  const handleRedirect = () => {
    window.location.href = "https://mimmuh.mcbu.edu.tr/";
  };
  return (
    <div>
      <h1>Mekine Mühendisliği Bölümü</h1>
      <button onClick={handleRedirect}>
        Mekine Mühendisliği Sayfasına Git
      </button>
    </div>
  );
};

export default MakineMühendisliği;
