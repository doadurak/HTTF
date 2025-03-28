import React from "react";
import yonetimKurulu from "../../content/İdari/yonetimKurulu";

const YonetimKurulu = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Yönetim Kurulu Üyeleri</h2>
      <h3 className="font-semibold">Başkan</h3>
      <p>
        {yonetimKurulu.baskan.name} - {yonetimKurulu.baskan.title}
      </p>

      <h3 className="font-semibold mt-4">Üyeler</h3>
      {yonetimKurulu.uyeler.map((uye, index) => (
        <p key={index}>
          {uye.name} - {uye.title}
        </p>
      ))}

      <h3 className="font-semibold mt-4">Raportör</h3>
      <p>
        {yonetimKurulu.raportor.name} - {yonetimKurulu.raportor.title}
      </p>
    </div>
  );
};

export default YonetimKurulu;
