import React from "react";
import profilePhoto from "./assets/tag.png";
import socalLogo from "./assets/socallogo.jpg";
import tapinLogo from "./assets/tapinlogo.png";
import linkedinLogo from "./assets/linkedin.png";
import githubLogo from "./assets/github.png";
import servyLogo from "./assets/servy.png";

import "./App.css";

const YouTubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="100%"
      height="180"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

const PersonalWebsite = () => {
  const personalProjects = [
    { name: "tap in", url: "https://tapin.lol", logo: tapinLogo },
    {
      name: "socal - the social calendar",
      url: "https://socal.day",
      logo: socalLogo,
    },
  ];

  const professionalProducts = [
    {
      name: "Grab App",
      url: "https://apps.apple.com/in/app/grab-airport-by-servy/id1044645710",
    },
    { name: "OrderNowADL", url: "https://ordernowadl.com.au/" },
    { name: "OrderNowCPH", url: "https://ordernow.cph.dk" },
    { name: "DXBMore", url: "https://dxbmore.com" },
    { name: "LAXShopDine", url: "https://www.laxshopdine.com/" },
    { name: "ShopMiamiAirport", url: "https://www.shopmiamiairport.com/" },
    { name: "ORDShopDine", url: "https://orderord.com/" },
    { name: "SFO2GO", url: "https://sfo2go.net/retailer-category/dine/" },
    { name: "LumoEats", url: "https://lumoeats.co.uk/retailer-category/dine/" },
  ];

  const favoriteMedia = [
    { embedId: "Ks08VKocI_M" },
    { embedId: "Op7EDcH9LXE" },
    { embedId: "yFWS2P1bqVw" },
    { embedId: "30lnA-haJiM" },
    { embedId: "nS9QtzGwBcc" },
    { embedId: "-B55vP8Ut84" },
    { embedId: "vMUft7TXKgc" },
    { embedId: "da8s9m4zEpo" },
  ];

  return (
    <div className="App">
      <div className="Profile-section">
        <img src={profilePhoto} alt="Tag Locklar" className="Profile-photo" />
        <h1>Tag Locklar</h1>
        <p>☁️🏔️✨</p>
        <div className="Profile-links">
          <a
            href="https://www.linkedin.com/in/taglocklar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="Social-logo" />
          </a>
          <a
            href="https://github.com/taglocklar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub" className="Social-logo" />
          </a>
        </div>
      </div>

      <div className="Projects-section">
        <h3>Personal Projects</h3>
        <ul>
          {personalProjects.map((project, index) => (
            <li key={index} className="Project-item">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="Project-link"
              >
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="Project-logo"
                />
                <div className="Project-name">{project.name}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="Products-section">
        <h3>Professional Projects I've had a hand in</h3>
        <ul>
          {professionalProducts.map((product, index) => (
            <li key={index} className="Project-item">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="Project-link"
              >
                <img
                  src={servyLogo}
                  alt="Servy logo"
                  className="Project-logo"
                />
                <div className="Project-name">{product.name}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="Media-section">
        <h2>Media I enjoy ❤️</h2>
        <ul>
          {favoriteMedia.map((media, index) => (
            <li key={index} className="Media-item">
              <YouTubeEmbed embedId={media.embedId} />
              <div className="Media-name">{media.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonalWebsite;
