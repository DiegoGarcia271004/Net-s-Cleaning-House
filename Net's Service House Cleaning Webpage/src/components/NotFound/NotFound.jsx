import "./NotFound.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="notfound-container">
      <NavBar />
      <section className="NotFound-Section">
        <h1>{t("not_found_title")}</h1>
        <h2>{t("not_found_message")}</h2>
        <NavLink to="/" className="notfound-home-link">
          {t("home_button")}
        </NavLink>
      </section>
      <Footer />
    </div>
  );
}
