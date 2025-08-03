import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/300x300.png";
import { useState } from "react";

export function NavBar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
      </NavLink>

      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/" className="nav-link">
          <a href="#">{t("home_button")}</a>
        </NavLink>
        <NavLink to="/about-us" /*about-us*/ className="nav-link">
          <a href="#">{t("about_us_button")}</a>
        </NavLink>
        <NavLink to="/" /*Services*/ className="nav-link">
          <a href="#">{t("services")}</a>
        </NavLink>
        <NavLink to="/" /*contact-us*/ className="nav-link">
          <a href="#">{t("contact_us_button")}</a>
        </NavLink>
      </div>

      <div className="navbar-toggle-custom" onClick={toggleMenu}>
        <span className="material-icons">menu</span>
      </div>
    </nav>
  );
}
