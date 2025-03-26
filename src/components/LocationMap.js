import React from "react";

const LocationMap = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Harita"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.054504032836!2d27.697684315462193!3d38.50098497962243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9cded790063a7%3A0xdde906c62a44f6c5!2sManisa%20Celal%20Bayar%20%C3%9Cniversitesi%20Hasan%20Ferdi%20Turgutlu%20Teknoloji%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1711461752111!5m2!1str!2str"
        style={{ width: "100%", height: "100%", border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
