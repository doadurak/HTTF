import React from 'react';
import ImageSlider from '../../components/ImageSlider';
import GrayCard from '../../components/GreyCard';

const Home = () => {
  return (
    <>
      <main>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Fakültemize Hoş Geldiniz</h1>
        <ImageSlider />
        <GrayCard />
      </main>
    </>
  );
};

export default Home;