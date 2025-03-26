import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vizyon from "./pages/Fakülte/Vizyon";
import Misyon from "./pages/Fakülte/Misyon";
import DekanMesaji from "./pages/Fakülte/DekanMesaji";
import Bilgi from "./pages/Fakülte/Bilgi";
import Dekanlik from "./pages/İdari/Dekanlik";
import FakulteKurulu from "./pages/İdari/FakulteKurulu";
import YonetimKurulu from "./pages/İdari/YonetimKurulu";
import Iletisim from "./pages/İletisim/Iletisim";
import DekanaMesaj from "./pages/İletisim/DekanaMesaj";
import YazılımMühendisliği from "./pages/Bölümler/YazılımMühendisliği";
import ElektrikMühendisliği from "./pages/Bölümler/ElektrikMühendisliği";
import MakineMühendisliği from "./pages/Bölümler/MakineMühendisliği";
import MekatronikMühendisliği from "./pages/Bölümler/MekatronikMühendisliği";
import EnerjiSistemleriMühendisliği from "./pages/Bölümler/EnerjiSistemleriMühendisliği";
import AkademikKadro from "./pages/Akademik/AkademikKadro";
import AkademikTakvim from "./pages/Akademik/AkademikTakvim";
import { useState } from "react";
import Intro from "./components/Intro"


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
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/fakulte">
                  <Route path="vizyon" element={<Vizyon />} />
                  <Route path="misyon" element={<Misyon />} />
                  <Route path="dekanmesaji" element={<DekanMesaji />} />
                  <Route path="bilgi" element={<Bilgi />} />
                </Route>

                <Route path="/idari">
                  <Route path="dekanlik" element={<Dekanlik />} />
                  <Route path="fakultekurulu" element={<FakulteKurulu />} />
                  <Route path="yonetimkurulu" element={<YonetimKurulu />} />
                </Route>

                <Route path="/iletisim" element={<Iletisim />}>
                  <Route path="dekanamesaj" element={<DekanaMesaj />} />
                </Route>

                <Route path="/bolumler">
                  <Route
                    path="elektrikmuhendisligi"
                    element={<ElektrikMühendisliği />}
                  />
                  <Route
                    path="yazilimmuhendisligi"
                    element={<YazılımMühendisliği />}
                  />
                  <Route
                    path="makinemuhendisligi"
                    element={<MakineMühendisliği />}
                  />
                  <Route
                    path="mekatronikmuhendisligi"
                    element={<MekatronikMühendisliği />}
                  />
                  <Route
                    path="enerjisistemlerimuhendisligi"
                    element={<EnerjiSistemleriMühendisliği />}
                  />
                </Route>

                <Route path="/akademik">
                  <Route path="akademiktakvim" element={<AkademikTakvim />} />
                  <Route path="akademikkadro" element={<AkademikKadro />} />
                </Route>
              </Route>
            </Routes>
          </>
        </BrowserRouter>
      )}
    </>
  );
}

// return  (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path='/fakulte'>
//         <Route path="vizyon" element={<Vizyon/>} />
//         <Route path="misyon" element={<Misyon />} />
//         <Route path="dekanmesaji" element={<DekanMesaji />} />
//         <Route path="bilgi" element={<Bilgi />} />
//       </Route>

//       <Route path='/idari'>
//         <Route path="dekanlik" element={<Dekanlik />} />
//         <Route path="fakultekurulu" element={<FakulteKurulu/>} />
//         <Route path="yonetimkurulu" element={<YonetimKurulu />} />
//       </Route>

//       <Route path='/iletisim' element={<Iletisim />}>
//         <Route path="dekanamesaj" element={<DekanaMesaj />} />
//       </Route>

//       <Route path='/bolumler'>
//         <Route path="elektrikmuhendisligi" element={<ElektrikMühendisliği />} />
//         <Route path="yazilimmuhendisligi" element={ <YazılımMühendisliği/>} />
//         <Route path="makinemuhendisligi" element={<MakineMühendisliği />} />
//         <Route path="mekatronikmuhendisligi" element={<MekatronikMühendisliği />} />
//         <Route path="enerjisistemlerimuhendisligi" element={<EnerjiSistemleriMühendisliği />} />
//       </Route>

//       <Route path='/akademik'>
//         <Route path='akademiktakvim' element={<AkademikTakvim/>}/>
//         <Route path='akademikkadro' element={<AkademikKadro/>}/>
//       </Route>

//       </Route>
//     </Routes>
//   </BrowserRouter>
//   );

export default App;
