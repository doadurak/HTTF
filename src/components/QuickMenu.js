import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiX } from 'react-icons/fi';

const QuickMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    if (styleSheet) {
      const rules = Array.from(styleSheet.cssRules || []);
      const hasKeyframe = rules.some(rule => rule.name === 'fadeInUp');
      if (!hasKeyframe) {
        styleSheet.insertRule(`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `, styleSheet.cssRules.length);
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveMenu(null);
  };

  const openSubMenu = (key) => {
    setActiveMenu(key);
  };

  const goBack = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <button onClick={toggleMenu} style={styles.menuButton}>
        {isOpen ? <FiX size={24} /> : 'Hızlı Menü'}
      </button>

      {isOpen && (
        <div style={styles.overlay}>
          {activeMenu && (
            <button onClick={goBack} style={styles.backButton}>
              <FiArrowLeft size={24} />
            </button>
          )}

          {!activeMenu ? (
            <div style={styles.menuItems}>
              {['O', 'A', 'Z', 'P'].map((letter, index) => (
                <div
                  key={letter}
                  style={{
                    ...styles.item,
                    opacity: 0,
                    transform: 'translateY(20px)',
                    animation: `fadeInUp 0.5s ease forwards`,
                    animationDelay: `${index * 0.15 + 0.2}s`,
                  }}
                  onClick={() => openSubMenu(letter)}
                >
                  <div style={styles.letter}>{letter}</div>
                  <p>
                    {{
                      O: 'Öğrenci',
                      A: 'Aday',
                      Z: 'Ziyaretçi',
                      P: 'Personel',
                    }[letter]}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div style={styles.subMenu}>
              {activeMenu === 'O' && (
                <>
                  <QuickLink icon="🎓" label="Öğrenci Bilgi Sistemi" link="https://obsapp.mcbu.edu.tr/" />
                  <QuickLink icon="📋" label="Öğrenci İşleri" link="https://www.mcbu.edu.tr/sayfa/Rehber" />
                  <QuickLink icon="📅" label="Akademik Takvim" link="https://ogrenciisleri.mcbu.edu.tr/db_images/21.08.2024%202024-2025%20E%C4%9Fitim-%C3%96%C4%9Fetim%20Y%C4%B1l%C4%B1%20Akademik%20Takvimi%20(T%C4%B1p%20Hari%C3%A7).pdf" />
                  <QuickLink icon="🍽️" label="Yemek Listesi" link="https://id.cbu.edu.tr/simplesaml/module.php/core/loginuserpass.php?AuthState=_d3b33628f26f22a87dd924cce12e5b500ef36ae85b%3Ahttps%3A%2F%2Fid.cbu.edu.tr%2Fsimplesaml%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fyks.cbu.edu.tr%26cookieTime%3D1742995067" />
                </>
              )}
              {activeMenu === 'A' && (
                <>
                  <QuickLink icon="🎯" label="Puan Tablosu" link="https://yokatlas.yok.gov.tr/lisans-univ.php?u=1025" />
                  <QuickLink icon="🏠" label="Yurt" link="https://www.kykyurtlar.com/manisa-turgutlu-kyk-yurtlari/" />
                  <QuickLink icon="🔄" label="Yatay Geçiş" link="https://ogrenciisleri.cbu.edu.tr/yatay-gecis.5435.tr.html" />
                </>
              )}
              {activeMenu === 'Z' && (
                <>
                  <QuickLink icon="📞" label="İletişim" link="https://hfttf.mcbu.edu.tr/iletisim/iletisim.2530.tr.html" />
                  <QuickLink icon="📰" label="Haberler" link="https://hfttf.mcbu.edu.tr/haberler.2363.tr.html" />
                  <QuickLink icon="🖼️" label="Görseller" link="https://www.google.com/search?q=hasan+ferdi+turgutlu+teknoloji+fak%C3%BCltesi+g%C3%B6rselleri" />
                </>
              )}
              {activeMenu === 'P' && (
                <>
                  <QuickLink icon="🍽️" label="Yemek Listesi" link="https://id.cbu.edu.tr/simplesaml/module.php/core/loginuserpass.php?AuthState=_d3b33628f26f22a87dd924cce12e5b500ef36ae85b%3Ahttps%3A%2F%2Fid.cbu.edu.tr%2Fsimplesaml%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fyks.cbu.edu.tr%26cookieTime%3D1742995067" />
                  <QuickLink icon="🗂️" label="Rehber" link="https://www.mcbu.edu.tr/sayfa/Rehber" />
                  <QuickLink icon="🧠" label="Bilgi Sistemi" link="https://obsapp.mcbu.edu.tr/" />
                </>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

const QuickLink = ({ icon, label, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" style={styles.linkItem}>
    <div style={styles.linkIcon}>{icon}</div>
    <p style={{ color: 'white' }}>{label}</p>
  </a>
);

const styles = {
  menuButton: {
    position: 'fixed',
    top: 20,
    right: 20,
    padding: '10px 20px',
    backgroundColor: '#002147',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    zIndex: 1001,
    cursor: 'pointer',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#002147',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  backButton: {
    position: 'absolute',
    left: 30,
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255,255,255,0.15)',
    border: '2px solid white',
    color: 'white',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  menuItems: {
    display: 'flex',
    gap: '80px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    textAlign: 'center',
    cursor: 'pointer',
  },
  letter: {
    fontSize: '60px',
    fontWeight: 'bold',
  },
  subMenu: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  linkItem: {
    width: '140px',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '20px',
  },
  linkIcon: {
    fontSize: '40px',
    marginBottom: '10px',
  },
};

export default QuickMenu;