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
    role: 'Product Immersion Testing Specialist, New Products · 2025 – 2026',
    logo: metaLogo,
    url: 'https://www.meta.com/',
    bullets: [
      'Designed and shipped LlamaMail, an AI inbox assistant that sorted 1M+ internal emails in two months and redirected $491K of operational time, deployed company-wide with Meta Superintelligence Labs',
      'Won People\'s Choice at the 2025 Fall Global Hackathon',
      'Built a Claude "Team Brain" that automated ~60% of New Product Test & Immersion workflows across Product, Engineering, and QA',
      'Drove a direct roadmap change for Horizon Labs by pathfinding a new AI Orchestrator, and prototyped a game engine with Horizon Labs leads in Three.js',
    ],
  },
  {
    name: 'The Gear Room',
    role: 'Digital Product Manager · 2024 – 2025',
    logo: gearroomLogo,
    url: 'https://thegearroom.com/',
    bullets: [
      'Built a new e-commerce platform with integrated inventory management, lifting checkout conversion 62%',
      'Developed the internal web app that became the store\'s operational hub, raising front-desk productivity 53%',
      'Automated invoice auditing on inventory receiving with Google Apps Script and a handheld scanner',
    ],
  },
  {
    name: 'Servy',
    role: 'Manager, Product Delivery · 2021 – 2024',
    logo: servyLogo,
    url: 'https://servy.us/',
    bullets: [
      'Led development and on-time launch of Marketplace 3.0 across multiple international airports, managing cross-functional Dev, Design, and QA teams',
      'Implemented automated QA with Testim.io, cutting regression testing time 72%',
      'Promoted from Senior Analyst while translating between business and technical teams to prioritize work and hold timelines',
    ],
  },
  {
    name: 'Tap In',
    role: 'Founder & iOS Developer · 2024',
    logo: tapinLogo,
    url: 'https://tapin.lol/',
    bullets: [
      'Solo-designed, built, and shipped a native iOS app to the App Store end to end on SwiftUI, Firebase, and Google Cloud',
    ],
  },
  {
    name: 'socal · the social calendar',
    role: 'Founder & iOS Developer · 2022 – 2024',
    logo: socalLogo,
    url: 'https://socal.day/',
    bullets: [
      'Designed, built, and launched a native iOS social-calendar app to the App Store on SwiftUI, Firebase, and Google Cloud',
      'Owned the product roadmap, user stories, and revenue model while building and leading a small core team',
    ],
  },
  {
    name: 'Millennium Film Journal',
    role: 'Technical Consultant',
    logo: mfjLogo,
    url: 'https://millenniumfilmjournal.com/',
    bullets: [
      'Helped save their site from hackers and implemented e-commerce and security functionality',
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
                <div className="exp-title-group">
                  <h2 className="exp-name">{exp.name}</h2>
                  <p className="exp-role">{exp.role}</p>
                </div>
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
