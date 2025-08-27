import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/300x300.png";
import { useState } from "react";
import i18n from "../../i18n";

export function NavBar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

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
          <span>{t("home_button")}</span>
        </NavLink>
        <NavLink to="/about-us" className="nav-link">
          <span>{t("about_us_button")}</span>
        </NavLink>
        <NavLink to="/services" className="nav-link">
          <span>{t("services_button")}</span>
        </NavLink>
        <NavLink to="/contact-us" className="nav-link">
          <span>{t("contact_us_button")}</span>
        </NavLink>
      </div>

      <div className="navbar-icons">

        <span className="language-name">{(i18n.language === "en") ? "En" : "Es" }</span>
        <span
          className="material-symbols-outlined"
          onClick={toggleLanguageMenu}
        >
          captive_portal
        </span>
      </div>

      {isLanguageMenuOpen && (
        <div className={`more-menu ${isLanguageMenuOpen ? ' show' : ''}`}>
          <span
            className="menu-item-us"
            onClick={() => {
              i18n.changeLanguage("en");
              toggleLanguageMenu();
            }}
          >
            English
          </span>
          <span
            className="menu-item-us"
            onClick={() => {
              i18n.changeLanguage("es");
              toggleLanguageMenu();
            }}
          >
            Español
          </span>
        </div>
      )}

      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="material-icons">menu</span>
      </div>
    </nav>
  );
}
