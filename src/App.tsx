import { Suspense, useState, useCallback } from 'react';
import metaLogo from './assets/meta-icon.webp';
import servyLogo from './assets/servy.png';
import tapinLogo from './assets/tapinlogo.png';
import gearroomLogo from './assets/gearroom.png';
import mfjLogo from './assets/mfj.png';
import socalLogo from './assets/socallogo.jpg';
import Skybox from './components/Skybox';

const currentCompany = {
  name: 'Meta',
  logo: metaLogo,
  url: 'https://www.meta.com/',
};

const previousCompanies = [
  { name: 'Tap In', logo: tapinLogo, url: 'https://tapin.lol/' },
  { name: 'Servy', logo: servyLogo, url: 'https://servy.us/' },
  { name: 'The Gear Room', logo: gearroomLogo, url: 'https://thegearroom.com/' },
  { name: 'MFJ', logo: mfjLogo, url: 'https://millenniumfilmjournal.com/' },
  { name: 'SoCal', logo: socalLogo, url: 'https://socal.day/' },
];

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleReady = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="page">
      {/* Loading screen — fades out once skybox is ready */}
      <div className={`loading-screen ${loaded ? 'loaded' : ''}`}>
        <div className="loader">
          <div className="loader-ring" />
        </div>
      </div>

      {/* 3D rotating skybox background */}
      <Suspense fallback={null}>
        <Skybox onReady={handleReady} />
      </Suspense>

      {/* Glass tile overlay — SparkJS-inspired reveal */}
      <div className={`glass-tile ${loaded ? 'revealed' : ''}`}>
        <main className="hero">
          <a href="https://www.linkedin.com/in/taglocklar/" target="_blank" rel="noopener noreferrer" className="name-link">
            <h1 className="name reveal-item" style={{ '--reveal-i': 0 } as React.CSSProperties}>Tag Locklar</h1>
          </a>

          <div className="currently reveal-item" style={{ '--reveal-i': 1 } as React.CSSProperties}>
            <span className="currently-text">currently at</span>
            <a href={currentCompany.url} target="_blank" rel="noopener noreferrer">
              <img
                src={currentCompany.logo}
                alt={currentCompany.name}
                className="current-logo"
              />
            </a>
          </div>

          <p className="prev-label reveal-item" style={{ '--reveal-i': 2 } as React.CSSProperties}>previously</p>
          <div className="prev-logos reveal-item" style={{ '--reveal-i': 3 } as React.CSSProperties}>
            {previousCompanies.map((c, i) => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="prev-logo-link" style={{ '--logo-i': i } as React.CSSProperties}>
                <img
                  src={c.logo}
                  alt={c.name}
                  className="prev-logo"
                  title={c.name}
                />
              </a>
            ))}
          </div>
        </main>

        {/* SparkJS-inspired light sweep overlay */}
        <div className="reveal-sweep" />
      </div>
    </div>
  );
}
