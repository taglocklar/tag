import { Suspense, useState, useCallback, useEffect, useRef } from 'react';
import metaLogo from './assets/meta-icon.webp';
import servyLogo from './assets/servy.png';
import tapinLogo from './assets/tapinlogo.png';
import gearroomLogo from './assets/gearroom.png';
import mfjLogo from './assets/mfj.png';
import socalLogo from './assets/socallogo.jpg';
import weaveLogo from './assets/weave.png';
import Skybox from './components/Skybox';

const previousCompanies = [
  { name: 'Meta', logo: metaLogo, url: 'https://www.meta.com/' },
  { name: 'Tap In', logo: tapinLogo, url: 'https://tapin.lol/' },
  { name: 'Servy', logo: servyLogo, url: 'https://servy.us/' },
  { name: 'The Gear Room', logo: gearroomLogo, url: 'https://thegearroom.com/' },
  { name: 'MFJ', logo: mfjLogo, url: 'https://millenniumfilmjournal.com/' },
  { name: 'SoCal', logo: socalLogo, url: 'https://socal.day/' },
];

const sideProjects = [
  {
    name: 'weave',
    logo: weaveLogo,
    url: 'https://weav3.app/',
    wordmark: false,
    demoUrl: null as string | null,
    demoLabel: '',
    bullets: [
      'A shared library where teams and their AI agents collect skills, learnings, and docs by project',
      'Live at weav3.app with a deep MCP surface so agents can search, post, and follow up on each other\'s work',
    ],
  },
  {
    name: 'MYRIAD',
    logo: null,
    url: 'https://myriad-kappa.vercel.app/',
    wordmark: true,
    demoUrl: 'https://myriad-kappa.vercel.app/' as string | null,
    demoLabel: 'play now',
    bullets: [
      'A top-down horde shooter built on a custom modular three.js engine with Rapier physics',
      'GPU-driven death effects, dash movement, and round-based waves, every phase gated by headless smoke tests',
    ],
  },
  {
    name: 'TABULA',
    logo: null,
    url: 'https://tabula.wonderlandsoftware.cloud/',
    wordmark: true,
    demoUrl: 'https://tabula.wonderlandsoftware.cloud/',
    demoLabel: 'play the demo',
    bullets: [
      'A whimsical multiplayer physics playground for you and your friends',
    ],
  },
];

const experiences = [
  {
    name: 'Meta',
    logo: metaLogo,
    url: 'https://www.meta.com/',
    bullets: [
      'Pathfinding new agent-powered workflows and tools, partnering directly with Meta\'s Superintelligence labs',
      'Won People\'s Choice Award at the 2025 Fall Global Hackathon',
    ],
  },
  {
    name: 'Servy',
    logo: servyLogo,
    url: 'https://servy.us/',
    bullets: [
      'Managed multiple product platform types and software that served users globally',
      'Implemented AI QA processes, reducing time spent on QA by 75%',
    ],
  },
  {
    name: 'The Gear Room',
    logo: gearroomLogo,
    url: 'https://thegearroom.com/',
    bullets: [
      'Migrated The Gear Room from Ricochet to Shopify and designed and built their new e-commerce website',
      'Built an internal hub that increased productivity by 60% at checkout by digitizing legacy workflows',
      'Built a system for verifying invoices against products received, reducing inventory intake time by 50%',
    ],
  },
  {
    name: 'Millennium Film Journal',
    logo: mfjLogo,
    url: 'https://millenniumfilmjournal.com/',
    bullets: [
      'Helped save their site from hackers and implemented e-commerce and security functionality',
    ],
  },
  {
    name: 'Tap In',
    logo: tapinLogo,
    url: 'https://tapin.lol/',
    bullets: [
      'Built and deployed my 2nd iOS application, built on GCP & SwiftUI — did everything',
    ],
  },
  {
    name: 'socal — The Social Calendar',
    logo: socalLogo,
    url: 'https://socal.day/',
    bullets: [
      'Co-founded SoCal, built and deployed my 1st app idea on GCP & SwiftUI',
      'Handled everything from marketing and design to code',
    ],
  },
];

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const expSectionRef = useRef<HTMLDivElement>(null);

  const handleReady = useCallback(() => {
    setLoaded(true);
  }, []);

  // Intersection Observer for scroll-triggered card reveals
  useEffect(() => {
    if (!loaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = document.querySelectorAll('.exp-card, .section-label');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [loaded]);

  return (
    <div className="page">
      {/* Loading screen — fades out once skybox is ready */}
      <div className={`loading-screen ${loaded ? 'loaded' : ''}`}>
        <div className="loader">
          <div className="loader-ring" />
        </div>
      </div>

      {/* 3D rotating skybox background (fixed) */}
      <Suspense fallback={null}>
        <Skybox onReady={handleReady} />
      </Suspense>

      {/* Scrollable content layer */}
      <div className="scroll-content">
        {/* Hero section — full viewport */}
        <section className="hero-section">
          <div className={`glass-tile ${loaded ? 'revealed' : ''}`}>
            <main className="hero">
              <a href="https://www.linkedin.com/in/taglocklar/" target="_blank" rel="noopener noreferrer" className="name-link">
                <h1 className="name reveal-item" style={{ '--reveal-i': 0 } as React.CSSProperties}>Tag Locklar</h1>
              </a>

              <div className="currently reveal-item" style={{ '--reveal-i': 1 } as React.CSSProperties}>
                <span className="currently-text">currently building</span>
                <a href="https://wonderland.software/" target="_blank" rel="noopener noreferrer" className="current-wordmark-link">
                  <span className="current-wordmark">Wonderland Software</span>
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

          {/* Scroll hint */}
          <div className={`scroll-hint ${loaded ? 'visible' : ''}`}>
            <div className="scroll-arrow" />
          </div>
        </section>

        {/* Side projects section */}
        <section className="experience-section">
          <p className="section-label">side projects</p>
          {sideProjects.map((proj) => (
            <div key={proj.name} className="exp-card">
              <div className="exp-card-header">
                {proj.logo && (
                  proj.url ? (
                    <a href={proj.url} target="_blank" rel="noopener noreferrer" className="exp-logo-link">
                      <img src={proj.logo} alt={proj.name} className="exp-logo" />
                    </a>
                  ) : (
                    <img src={proj.logo} alt={proj.name} className="exp-logo" />
                  )
                )}
                {proj.url ? (
                  <a href={proj.url} target="_blank" rel="noopener noreferrer" className="exp-name-link">
                    <h2 className={`exp-name ${proj.wordmark ? 'wordmark' : ''}`}>{proj.name}</h2>
                  </a>
                ) : (
                  <h2 className={`exp-name ${proj.wordmark ? 'wordmark' : ''}`}>{proj.name}</h2>
                )}
              </div>
              <ul className="exp-bullets">
                {proj.bullets.map((bullet, j) => (
                  <li key={j} className="exp-bullet">{bullet}</li>
                ))}
              </ul>
              {proj.demoUrl && (
                <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer" className="demo-link">
                  {proj.demoLabel}
                  <span className="demo-arrow">→</span>
                </a>
              )}
            </div>
          ))}
        </section>

        {/* Experience section */}
        <section className="experience-section" ref={expSectionRef}>
          <p className="section-label">experience</p>
          {experiences.map((exp, i) => (
            <div
              key={exp.name}
              className="exp-card"
              style={{ '--card-i': i } as React.CSSProperties}
            >
              <div className="exp-card-header">
                <a href={exp.url} target="_blank" rel="noopener noreferrer" className="exp-logo-link">
                  <img src={exp.logo} alt={exp.name} className="exp-logo" />
                </a>
                <h2 className="exp-name">{exp.name}</h2>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="exp-bullet">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
