import React from "react";
import dekanlik from "../../content/İdari/dekanlik";

const Dekanlik = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dekanlık</h2>
      <div>
        <h3 className="font-semibold">Dekan</h3>
        <p>
          {dekanlik.dekan.name} - {dekanlik.dekan.title}
        </p>
        <p>
          Email:{" "}
          <a href={`mailto:${dekanlik.dekan.email}`}>{dekanlik.dekan.email}</a>
        </p>
        <p>Tel: {dekanlik.dekan.phone}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Dekan Yardımcıları</h3>
        {dekanlik.dekanYardimcisi.map((yardimci, index) => (
          <div key={index} className="mb-4">
            <p>
              {yardimci.name} - {yardimci.title}
            </p>
            <p>
              Email: <a href={`mailto:${yardimci.email}`}>{yardimci.email}</a>
            </p>
            <p>Tel: {yardimci.phone}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Fakülte Sekreteri</h3>
        <p>
          {dekanlik.fakulteSekreteri.name} - {dekanlik.fakulteSekreteri.title}
        </p>
        <p>
          Email:{" "}
          <a href={`mailto:${dekanlik.fakulteSekreteri.email}`}>
            {dekanlik.fakulteSekreteri.email}
          </a>
        </p>
        <p>Tel: {dekanlik.fakulteSekreteri.phone}</p>
      </div>
    </div>
  );
};

export default Dekanlik;
