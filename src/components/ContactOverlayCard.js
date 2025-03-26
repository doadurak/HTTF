import React from "react";

const ContactOverlayCard = () => {
  return (
    <div className="absolute top-6 left-6 bg-[#002147] text-white p-6 rounded-lg shadow-lg max-w-md w-[90%] sm:w-[400px] z-10">
      <h2 className="text-xl font-bold mb-4">
        Hasan Ferdi Turgutlu Teknoloji Fakültesi
      </h2>
      <p className="mb-2">
        Acarlar Mah. Şehit Ali Karakuzu Sk. No:10<br />
        Turgutlu / MANİSA
      </p>
      <p className="mb-2">Telefon: 0 (236) 314 10 10</p>
      <p>Faks: 0 (236) 314 20 20</p>
    </div>
  );
};

export default ContactOverlayCard;
