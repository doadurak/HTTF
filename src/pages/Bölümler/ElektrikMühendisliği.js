import React from "react";

const ElektrikMühendisliği = () => {
  const handleRedirect = () => {
    window.location.href = "https://elektrikmuh.mcbu.edu.tr/default.aspx";
  };
  return (
    <div>
      <h1>Elektrik Mühendisliği Bölümü</h1>
      <button onClick={handleRedirect}>
        Elektirk Mühendisliği Sayfasına Git
      </button>
    </div>
  );
};

export default ElektrikMühendisliği;
