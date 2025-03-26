import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Intro from './components/Intro';
import Footer from './components/Footer'; // Footer bileşenini ekliyoruz

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <Intro onFinish={handleIntroFinish} />
      ) : (
        <BrowserRouter>
          <>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
              </Route>
            </Routes>
            <Footer /> {/* Sayfanın altına Footer ekliyoruz */}
          </>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
