import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Controls whether the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Opens/closes the menu only when the MENU button is clicked
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const goToSection = (section) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <div className={`floating-navigation ${menuOpen ? "menu-open" : ""}`}>
      {/* Menu button */}
      <button
        type="button"
        className="floating-menu-button"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? "CLOSE" : "MENU"}
      </button>

      {/* Popup menu */}
      <div className="menu-popup">
        <div className="menu-popup-label">EXPLORE</div>

        <nav className="menu-popup-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <span>Home</span>
            <small>01</small>
          </Link>

          <button
            type="button"
            onClick={() => goToSection("about")}
          >
            <span>About</span>
            <small>02</small>
          </button>

          <Link to="/events" onClick={() => setMenuOpen(false)}>
            <span>Events</span>
            <small>03</small>
          </Link>

          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            <span>Projects</span>
            <small>04</small>
          </Link>

          <Link to="/community" onClick={() => setMenuOpen(false)}>
            <span>Community</span>
            <small>05</small>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;