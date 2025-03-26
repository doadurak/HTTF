import React from "react";

const AkademikTakvim = () => {
  return (
    <div className="content">
      <h1>Akademik Takvim</h1>
      <p>
        Akademik takvim, derslerin başlama ve bitiş tarihleri, sınav
        tarihlerinin yanı sıra tatil günlerini de içermektedir. Lütfen aşağıdaki
        bağlantıyı takip ederek detaylı takvimi görüntüleyin.
      </p>
      <a
        href="https://ogrenciisleri.mcbu.edu.tr/egitim-ogretim/akademik-takvim.5431.tr.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Akademik Takvim PDF
      </a>
    </div>
  );
};

export default AkademikTakvim;
