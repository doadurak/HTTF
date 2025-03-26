import React from "react";
import fakulteKurulu from "../../content/İdari/fakulteKurulu";

const FakulteKurulu = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Fakülte Kurulu Üyeleri</h2>
      <h3 className="font-semibold">Başkan</h3>
      <p>
        {fakulteKurulu.baskan.name} - {fakulteKurulu.baskan.title}
      </p>

      <h3 className="font-semibold mt-4">Üyeler</h3>
      {fakulteKurulu.uyeler.map((uye, index) => (
        <p key={index}>
          {uye.name} - {uye.title}
        </p>
      ))}

      <h3 className="font-semibold mt-4">Raportör</h3>
      <p>
        {fakulteKurulu.raportor.name} - {fakulteKurulu.raportor.title}
      </p>
    </div>
  );
};

export default FakulteKurulu;
