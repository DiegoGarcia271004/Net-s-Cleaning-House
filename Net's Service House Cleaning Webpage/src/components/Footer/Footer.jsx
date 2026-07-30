import logo from "../../assets/senor_nunca_sucio.png";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import { useState } from "react";

const Footer = () => {
  const { t } = useTranslation();
  const [openCol, setOpenCol] = useState({
    services: false,
    corp: false,
    resources: false,
  });

  // Helper to toggle columns
  const toggleCol = (col) => {
    setOpenCol((prev) => ({ ...prev, [col]: !prev[col] }));
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__company-container">
          <img className="footer__logo" src={logo} alt="icon" />
          <h2 className="footer__company">{t("name")}</h2>
        </div>
        <div className="footer__links-wrapper">
          {/* Services Column */}
          <div className="footer__link-col">
            <button
              className="footer__col-heading-btn"
              onClick={() => toggleCol("services")}
            >
              <span className="footer__col-heading">
                {t("services_button")}
              </span>
              <span className="footer__toggle-icon">
                {openCol.services ? "−" : "+"}
              </span>
            </button>
            <div
              className={`footer__links-list${openCol.services ? " open" : ""}`}
            >
              <a href="#" className="text-small footer__link">
                Planes
              </a>
              <a href="#" className="text-small footer__link">
                Precios
              </a>
              <a href="#" className="text-small footer__link">
                Comunidad
              </a>
              <a href="#" className="text-small footer__link">
                FAQs
              </a>
            </div>
          </div>
          {/* Corporation Column */}
          <div className="footer__link-col">
            <button
              className="footer__col-heading-btn"
              onClick={() => toggleCol("corp")}
            >
              <span className="footer__col-heading">Corporacion</span>
              <span className="footer__toggle-icon">
                {openCol.corp ? "−" : "+"}
              </span>
            </button>
            <div className={`footer__links-list${openCol.corp ? " open" : ""}`}>
              <a href="#" className="text-small footer__link">
                Historia
              </a>
              <a href="#" className="text-small footer__link">
                Equipo
              </a>
            </div>
          </div>
          {/* Resources Column */}
          <div className="footer__link-col">
            <button
              className="footer__col-heading-btn"
              onClick={() => toggleCol("resources")}
            >
              <span className="footer__col-heading">Recursos</span>
              <span className="footer__toggle-icon">
                {openCol.resources ? "−" : "+"}
              </span>
            </button>
            <div
              className={`footer__links-list${
                openCol.resources ? " open" : ""
              }`}
            >
              <a href="#" className="text-small footer__link">
                Blog
              </a>
              <a href="#" className="text-small footer__link">
                Trabajos
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__banner">
        <p className="text-small footer__copywright">
          {t("copy_right")}
          <a
            href="https://github.com/DiegoGarcia271004"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @DiegoGarcia
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
