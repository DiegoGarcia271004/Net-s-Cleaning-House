import "./Description.css";
import image from "../../assets/cleanHouse.png";
import { useTranslation } from "react-i18next";
import AppButton from "../AppButton/AppButton";
import logo from "../../assets/senor_nunca_sucio.png"

const Description = () => {
    const { t } = useTranslation();

  return (
    <section className="description">
      <div className="img-container">
        <img src={image} alt="image" className="feature-main-img"/>
        <img src={logo} alt="logo" className="feature-mascot"/>
      </div>
      <div className="description-text">
        <h2>{t("description_title")}</h2>
        <p>
          {t("description_text")}
        </p>

  <AppButton text={t("k_our_services")} link="/services" />

      </div>
    </section>
  );
};

export default Description;
