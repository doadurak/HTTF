import React from "react";

const CustomCardInfo = () => {
  return (
    <div className="bg-gray-100 w-full py-12 px-4 flex justify-center">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          İletişim Bilgileri
        </h2>

        {/* Adres */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Adres</h3>
          <p className="text-gray-700">
            Manisa Celal Bayar Üniversitesi Hasan Ferdi Turgutlu Teknoloji Fakültesi <br />
            Acarlar Mah. Şehit Ali Karakuzu Sk. No:10 <br />
            Turgutlu / MANİSA
          </p>
        </div>

        {/* Telefon */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Telefon</h3>
          <p className="text-gray-700">0 (236) 314 10 10</p>
        </div>

        {/* Faks */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Faks</h3>
          <p className="text-gray-700">0 (236) 314 20 20</p>
        </div>

        {/* E-Posta */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">E-Posta</h3>
          <p className="text-gray-700">
            Genel:{" "}
            <a href="mailto:teknoloji@cbu.edu.tr" className="text-blue-600 hover:underline">
              teknoloji@cbu.edu.tr
            </a>
          </p>
          <p className="text-gray-700">
            Öğrenci:{" "}
            <a href="mailto:teknoloji.ogrenci@cbu.edu.tr" className="text-blue-600 hover:underline">
              teknoloji.ogrenci@cbu.edu.tr
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomCardInfo;
