import React from "react";
import generalInfo from "../../content/Fakülte/generalInfo.js";

const Bilgi = () => {
  if (!generalInfo) {
    return <div>Loading...</div>; // Eğer generalInfo yoksa, yükleniyor mesajı göster
  }
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{generalInfo.title}</h1>
      <p className="mb-4">{generalInfo.description}</p>

      {/* General details list */}
      <ul className="list-disc pl-5 space-y-2">
        {generalInfo.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>

      {/* Introduction Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">
          {generalInfo.introduction.title} {/* Başlık */}
        </h2>
        <p>{generalInfo.introduction.content}</p> {/* İçerik */}
      </div>

      {/* Technology Faculty Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">
          {generalInfo.techFaculty.title} {/* Başlık */}
        </h2>
        <p>{generalInfo.techFaculty.content}</p> {/* İçerik */}
      </div>
    </div>
  );
};

export default Bilgi;
