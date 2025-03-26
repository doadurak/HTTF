import React from "react";
import DarkCard from "../../components/DarkCard";
import LocationMap from "../../components/LocationMap";
import Footer from "../../components/Footer";

const Iletisim = () => {
  return (
    <div className="w-full bg-gray-50 relative">
      {/* Harita */}
      <div className="relative">
        <LocationMap />

        {/* Haritanın üstüne binen İletişim Kutusu */}
        <div className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 z-10 w-full px-4">
          <DarkCard />
        </div>
      </div>

      {/* Footer ile kutu arasında daha fazla boşluk */}
      <div className="pt-48">
       
      </div>
    </div>
  );
};

export default Iletisim;