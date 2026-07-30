import React, {useState} from "react";
import "./ServiceCards.css"
import { useTranslation } from "react-i18next";

export default function ServiceCard({ icon, title, description, items = [], defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const { t } = useTranslation();
 
  return (
    <div className="service-card">
      {/* Ícono circular: sobresale por encima del borde superior de la tarjeta */}
      <div className="service-card__icon">
        {typeof icon === "string" ? <img src={icon} alt={title} /> : icon}
      </div>
 
      {/* Título */}
      <h3 className="service-card__title">{title}</h3>
 
      {/* Descripción */}
      <p className="service-card__description">{description}</p>
 
      {/* Lista expandible */}
      {expanded && (
        <ul className="service-card__list">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
 
      {/* Espaciador cuando está contraída, para mantener el botón abajo */}
      {!expanded && <div className="service-card__spacer" />}
 
      {/* Botón */}
      <button className="service-card__button" onClick={() => setExpanded(!expanded)}>
        {expanded ? t("show_less") : t("show_more")}
      </button>
    </div>
  );
}
