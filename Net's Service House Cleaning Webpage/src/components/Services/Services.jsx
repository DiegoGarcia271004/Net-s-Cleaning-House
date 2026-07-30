import "./Services.css";
import ServiceCard from "../ServiceCards/ServiceCards";
import houseIcon from "../../assets/houseIcon.png";
import storeIcon from "../../assets/storeIcon.png";
import helmetIcon from "../../assets/helmetIcon.png";
import apartmentIcon from "../../assets/apartmentIcon.png";
import mascot from "../../assets/senor_nunca_sucio.png"
import { useTranslation } from "react-i18next";

const Services = () => {

  const { t } = useTranslation()

  return (
    <section className="services">
      <div className="title-container">
        <h1>Nuestros servicios</h1>
        <img src={mascot} alt="logo" className="mascot-img" />
      </div>
      <div className="service-cards">
        <ServiceCard
          icon={houseIcon}
          title="Residencial"
          description={t("residential_description")}
          items={t("residential_services", {returnObjects: true})}
        />
        <ServiceCard
          icon={apartmentIcon}
          title="Apartamentos"
          description={t("apartment_description")}
          items={t("apartment_services", {returnObjects: true})}
        />
        <ServiceCard
          icon={storeIcon}
          title="Comercial"
          description={t("store_description")}
          items={t("store_services", {returnObjects: true})}
        />
        <ServiceCard
          icon={helmetIcon}
          title="Post Construcción"
          description={t("post_construction_description")}
          items={t("post_construction_cleaning", {returnObjects: true})}
        />
      </div>
    </section>
  );
};

export default Services;
