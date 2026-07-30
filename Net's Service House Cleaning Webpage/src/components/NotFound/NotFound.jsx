import "./NotFound.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AppButton from "../AppButton/AppButton";
import "../../fonts/fonts.css"

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="notfound-container">
      <NavBar />
      <section className="NotFound-Section">
        <h1>{t("not_found_title")}</h1>
        <h2>{t("not_found_message")}</h2>
        <AppButton text={t("home_button")} link="/" />
      </section>
      <Footer />
    </div>
  );
}
