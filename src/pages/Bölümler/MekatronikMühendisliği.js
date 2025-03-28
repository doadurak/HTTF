import React from "react";

const MekatronikMühendisliği = () => {
  const handleRedirect = () => {
    window.location.href = "https://mekatronikmuh.mcbu.edu.tr/";
  };
  return (
    <div>
      <h1>Mekatronik Mühendisliği Bölümü</h1>
      <button onClick={handleRedirect}>
        Mekatronik Mühendisliği Sayfasına Git
      </button>
    </div>
  );
};

export default MekatronikMühendisliği;
