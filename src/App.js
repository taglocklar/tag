import React, { useState, useEffect, useRef } from "react";
import profilePhoto from "./assets/tag.png";
import socalLogo from "./assets/socallogo.jpg";
import tapinLogo from "./assets/tapinlogo.png";
import linkedinLogo from "./assets/linkedin.png";
import githubLogo from "./assets/github.png";
import servyLogo from "./assets/servy.png";
import gearRoomLogo from "./assets/gearroom.png";
import mfjLogo from "./assets/mfj.png";

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
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100;

      const aboutPosition = aboutRef.current.offsetTop;
      const experiencePosition = experienceRef.current.offsetTop;
      const projectsPosition = projectsRef.current.offsetTop;
      const mediaPosition = mediaRef.current.offsetTop;

      if (scrollPosition >= mediaPosition) {
        setActiveSection("media");
      } else if (scrollPosition >= projectsPosition) {
        setActiveSection("projects");
      } else if (scrollPosition >= experiencePosition) {
        setActiveSection("experience");
      } else if (scrollPosition >= aboutPosition) {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = {
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      media: mediaRef,
    }[sectionId];

    if (section && section.current) {
      window.scrollTo({
        top: section.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const personalProjects = [
    {
      name: "tap in",
      url: "https://tapin.lol",
      logo: tapinLogo,
      description:
        "iOS app built with SwiftUI and Firebase. Lead product design, development, and successful launch to the App Store.",
      tech: ["SwiftUI", "Firebase", "Google Cloud"],
    },
    {
      name: "socal - the social calendar",
      url: "https://socal.day",
      logo: socalLogo,
      description:
        "Mobile application for social event planning. Translated business vision into actionable user stories and built a collaborative team.",
      tech: ["SwiftUI", "Firebase", "Google Cloud"],
    },
  ];

  const professionalExperience = [
    {
      name: "The Gear Room",
      role: "Digital Product Manager",
      period: "Oct 2024 - Present",
      logo: gearRoomLogo,
      description:
        "Built & designed new e-commerce site and internal web app for ski tunes & climbing shoe resoles. Implemented chat feature and optimized inventory processes.",
      tech: [
        "React",
        "Google AppScript",
        "E-commerce",
        "Product Management",
        "Firebase",
      ],
    },
    {
      name: "Millennium Film Journal",
      role: "Web Developer (Contract)",
      period: "Oct 2024 - Nov 2024",
      logo: mfjLogo,
      description:
        "Provided emergency website recovery & cleanup. Added e-commerce features and implemented Recaptcha v3 & two-factor auth.",
      tech: ["Web Development", "E-commerce", "Security", "WordPress"],
    },
    {
      name: "Servy",
      role: "Manager, Product Delivery",
      period: "Aug 2021 - Oct 2024",
      logo: servyLogo,
      description:
        "Managed Dev, Onboarding, Design, & Release Support across diverse Airport products. Spearheaded automated QA processes reducing regression time by 75%.",
      tech: ["Product Management", "Testim.io", "Stakeholder Management"],
    },
  ];

  const professionalProducts = [
    {
      name: "The Gear Room",
      url: "https://www.thegearroomslc.com/",
      logo: gearRoomLogo,
    },
    {
      name: "Millennium Film Journal",
      url: "https://millenniumfilmjournal.com/",
      logo: mfjLogo,
    },
    {
      name: "Grab App",
      url: "https://apps.apple.com/in/app/grab-airport-by-servy/id1044645710",
      logo: servyLogo,
    },
    {
      name: "OrderNowADL",
      url: "https://ordernowadl.com.au/",
      logo: servyLogo,
    },
    { name: "OrderNowCPH", url: "https://ordernow.cph.dk", logo: servyLogo },
    { name: "DXBMore", url: "https://dxbmore.com", logo: servyLogo },
    {
      name: "LAXShopDine",
      url: "https://www.laxshopdine.com/",
      logo: servyLogo,
    },
    {
      name: "ShopMiamiAirport",
      url: "https://www.shopmiamiairport.com/",
      logo: servyLogo,
    },
    { name: "ORDShopDine", url: "https://orderord.com/", logo: servyLogo },
    {
      name: "SFO2GO",
      url: "https://sfo2go.net/retailer-category/dine/",
      logo: servyLogo,
    },
    {
      name: "LumoEats",
      url: "https://lumoeats.co.uk/retailer-category/dine/",
      logo: servyLogo,
    },
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

  const skills = [
    "SwiftUI",
    "React",
    "Postman",
    "Cursor",
    "SQL",
    "Notion",
    "Asana",
    "Figma",
    "Google Cloud Platform",
    "Jira",
    "Firebase",
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="App">
      <nav className={`navbar ${isScrolling ? "navbar-scrolling" : ""}`}>
        <div className="nav-content">
          <div className="nav-logo" onClick={() => scrollToSection("about")}>
            Tag Locklar
          </div>
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <span className="menu-icon">☰</span>
          </button>
          <div className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <button
              className={activeSection === "about" ? "active" : ""}
              onClick={() => {
                scrollToSection("about");
                setMobileMenuOpen(false);
              }}
            >
              About
            </button>
            <button
              className={activeSection === "experience" ? "active" : ""}
              onClick={() => {
                scrollToSection("experience");
                setMobileMenuOpen(false);
              }}
            >
              Experience
            </button>
            <button
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => {
                scrollToSection("projects");
                setMobileMenuOpen(false);
              }}
            >
              Personal Projects
            </button>
            <button
              className={activeSection === "media" ? "active" : ""}
              onClick={() => {
                scrollToSection("media");
                setMobileMenuOpen(false);
              }}
            >
              Media
            </button>
          </div>
        </div>
      </nav>

      <div className="content-container">
        <section ref={aboutRef} id="about" className="section-container">
          <div className="Profile-section">
            <img
              src={profilePhoto}
              alt="Tag Locklar"
              className="Profile-photo"
            />
            <h1>Tag Locklar</h1>
            <h2>Product Leader & Developer</h2>
            <p>Based in Salt Lake City, UT</p>
            <p>☁️🏔️✨</p>

            <div className="skills-container">
              <h3>Skills & Tools</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="Profile-links">
              <a
                href="https://www.linkedin.com/in/taglocklar/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img
                  src={linkedinLogo}
                  alt="LinkedIn"
                  className="Social-logo"
                />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/taglocklar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={githubLogo} alt="GitHub" className="Social-logo" />
                <span>GitHub</span>
              </a>
              <a href="mailto:tlocklar3@gmail.com" className="social-link">
                <span className="email-icon">✉️</span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </section>

        <section
          ref={experienceRef}
          id="experience"
          className="section-container"
        >
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-grid">
            {professionalExperience.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <img
                    src={exp.logo}
                    alt={`${exp.name} logo`}
                    className="experience-logo"
                  />
                  <div className="experience-title">
                    <h3>{exp.name}</h3>
                    <p className="experience-role">{exp.role}</p>
                    <p className="experience-period">{exp.period}</p>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-tech">
                  {exp.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="section-subtitle">Products I've Contributed To</h3>
          <div className="products-grid">
            {professionalProducts.map((product, index) => (
              <a
                key={index}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="product-link"
              >
                <div className="product-item">
                  <img
                    src={product.logo}
                    alt={`${product.name} logo`}
                    className="product-logo"
                  />
                  <span>{product.name}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section ref={projectsRef} id="projects" className="section-container">
          <h2 className="section-title">Personal Projects</h2>
          <div className="projects-grid">
            {personalProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="project-logo"
                  />
                  <h3>{project.name}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  Visit Project
                </a>
              </div>
            ))}
          </div>
        </section>

        <section ref={mediaRef} id="media" className="section-container">
          <h2 className="section-title">Media I Enjoy ❤️</h2>
          <div className="media-grid">
            {favoriteMedia.map((media, index) => (
              <div key={index} className="media-card">
                <YouTubeEmbed embedId={media.embedId} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Tag Locklar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
