import React, { useEffect, useState } from "react";
import logo from "../assets/logo (1).png";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrolled = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    // Deteksi arah scroll
    if (window.scrollY > lastScrollY && window.scrollY > 50 && scroll === true) {
      setShowNavbar(false); // scroll down
    } else {
      setShowNavbar(true); // scroll up
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrolled);
  }, [lastScrollY]);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <section>
      <nav
        className={`navbar ${scroll ? "bg-[#333333]" : ""} ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="logo z-10">
          <img className="h-15" src={logo} alt="Kolaborasa Logo" />
        </div>
        <ul className={`nav-links text-white ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#events" onClick={handleLinkClick}>
              Events
            </a>
          </li>
          <li>
            <a href="#success" onClick={handleLinkClick}>
              Success Stories
            </a>
          </li>
          <li>
            <a href="#upcoming" onClick={handleLinkClick}>
              Upcoming
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </section>
  );
}
