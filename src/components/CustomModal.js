import React from "react";

const CustomModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        {/* Kapatma butonu */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          İletişim Bilgileri
        </h2>

        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">Adres</h3>
            <p>
              Manisa Celal Bayar Üniversitesi Hasan Ferdi Turgutlu Teknoloji Fakültesi <br />
              Acarlar Mah. Şehit Ali Karakuzu Sk. No:10 <br />
              Turgutlu / MANİSA
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Telefon</h3>
            <p>0 (236) 314 10 10</p>
          </div>

          <div>
            <h3 className="font-semibold">Faks</h3>
            <p>0 (236) 314 20 20</p>
          </div>

          <div>
            <h3 className="font-semibold">E-Posta</h3>
            <p>Genel: <a href="mailto:teknoloji@cbu.edu.tr" className="text-blue-600 hover:underline">teknoloji@cbu.edu.tr</a></p>
            <p>Öğrenci: <a href="mailto:teknoloji.ogrenci@cbu.edu.tr" className="text-blue-600 hover:underline">teknoloji.ogrenci@cbu.edu.tr</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
