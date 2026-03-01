import { Suspense } from 'react';
import metaLogo from './assets/meta-icon.webp';
import servyLogo from './assets/servy.png';
import tapinLogo from './assets/tapinlogo.png';
import gearroomLogo from './assets/gearroom.png';
import mfjLogo from './assets/mfj.png';
import socalLogo from './assets/socallogo.jpg';
import linkedinIcon from './assets/linkedin.png';
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
  return (
    <div className="page">
      {/* 3D rotating skybox background */}
      <Suspense fallback={null}>
        <Skybox />
      </Suspense>

      {/* Glass tile overlay */}
      <div className="glass-tile">
        <main className="hero">
          <h1 className="name">Tag Locklar</h1>

          <div className="currently">
            <span className="currently-text">currently at</span>
            <a href={currentCompany.url} target="_blank" rel="noopener noreferrer">
              <img
                src={currentCompany.logo}
                alt={currentCompany.name}
                className="current-logo"
              />
            </a>
          </div>

          <p className="prev-label">previously</p>
          <div className="prev-logos">
            {previousCompanies.map((c) => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="prev-logo"
                  title={c.name}
                />
              </a>
            ))}
          </div>

          <div className="contact-row">
            <a href="mailto:tlocklar3@gmail.com" className="contact-link" title="Email">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
              <span>tlocklar3@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/taglocklar/" target="_blank" rel="noopener noreferrer" className="contact-link" title="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" className="contact-icon-img" />
              <span>linkedin</span>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
