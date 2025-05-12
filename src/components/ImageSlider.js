import React, { useEffect, useState } from 'react';
import fakulte1 from '../content/images/Fakulte1.jpg'; 
import fakulte2 from '../content/images/Fakulte2.jpg';
import fakulte3 from '../content/images/Fakulte3.jpg';
import fakulte4 from '../content/images/Fakulte4.jpg';
import Fakulte7 from '../content/images/Fakulte7.png';

const images = [
  fakulte1,
  Fakulte7,
  fakulte2,
  fakulte3,
  fakulte4,
  // ihtiyaca göre artır
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  // Otomatik geçiş efekti
  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.container}>
      <button onClick={goPrev} style={styles.arrowLeft}>&#10094;</button>

      <img src={images[current]} alt={`Fakülte ${current + 1}`} style={styles.image} />

      <button onClick={goNext} style={styles.arrowRight}>&#10095;</button>
    </div>
  );
};

const styles = {
  container: {
    width: '800px',
    height: '400px',
    margin: '40px auto',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.5s ease-in-out',
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: '15px',
    transform: 'translateY(-50%)',
    fontSize: '30px',
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    zIndex: 1,
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: '15px',
    transform: 'translateY(-50%)',
    fontSize: '30px',
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    zIndex: 1,
  },
};

export default ImageSlider;
