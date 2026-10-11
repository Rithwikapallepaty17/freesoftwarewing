import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (section) => {
    if (location.pathname === "/") {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <div className="floating-navigation">
      {/* Pure hover anchor */}
      <div className="floating-menu-button">
        MENU
      </div>

      {/* Popup container */}
      <div className="menu-popup">
        <div className="menu-popup-label">EXPLORE</div>

        <nav className="menu-popup-links">
          <Link to="/">
            <span>Home</span>
            <small>01</small>
          </Link>

          <button type="button" onClick={() => goToSection("about")}>
            <span>About</span>
            <small>02</small>
          </button>

          <Link to="/events">
            <span>Events</span>
            <small>03</small>
          </Link>

          <Link to="/projects">
            <span>Projects</span>
            <small>04</small>
          </Link>

          <Link to="/community">
            <span>Community</span>
            <small>05</small>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;