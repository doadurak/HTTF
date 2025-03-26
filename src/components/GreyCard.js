import React from "react";

const GrayCard = () => {
  const cardStyle = {
    backgroundColor: "#f3f4f6", // Tailwind'deki bg-gray-200'e karşılık
    color: "#1f2937",            // Tailwind text-gray-800
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "768px",
    margin: "2rem auto",
    fontSize: "1rem",
    lineHeight: "1.6",
  };

  const headingStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
  };

  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>VİZYONUMUZ</h2>
      <p>
        Bilim dünyası ve endüstri ile bağları gelişmiş, eğitim ve öğretim faaliyetleri ile ulusal ve uluslararası düzeyde rekabet eden,
        teknolojiye hâkim, etik değerlere saygılı, çevreye ve topluma duyarlı, nitelikli akademik kadrosu ile sektörün ihtiyaç duyduğu kaliteli,
        yetenekleriyle içinde bulunduğu toplumun ekonomik ve teknolojik gereksinimlerine yanıt verebilen, ülkemizin çağdaş uygarlık düzeyinin üzerine çıkmasına katkıda bulunacak,
        öğrendiklerini yaşama geçirebilen, sorumluluk sahibi mühendisler yetiştiren bir fakülte olmaktır.
      </p>
    </div>
  );
};

export default GrayCard;