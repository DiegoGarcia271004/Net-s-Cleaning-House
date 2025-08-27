import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

/**
 * i18n configuration for the application.
 * This file sets up the i18next library for internationalization.
 * It includes language detection and provides translations for English and Spanish.
 */
i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: true,

        resources: {
            en: {
                translation: {
                    name: "Net's Service House Cleaning",
                    slogan: "We'll leave your home looking and feeling fresh",
                    welcome: "Welcome to Net's Service House Cleaning",
                    description: "We provide top-notch cleaning services for your home.",
                    contact: "Contact us for a free quote!",
                    home_button: "Home",
                    about_us_button: "About Us",
                    services_button: "Services",
                    contact_us_button: "Contact Us",
                    copy_right: "©2025 Net's Service House Cleaning. All Rights Reserved.",
                    not_found_title: "404 Not Found",
                    not_found_message: "The page you are looking for does not exist or is unavailable.",
                }
            },
            es: {
                translation: {
                    name: "Net's Service House Cleaning",
                    slogan: "Dejaremos su hogar luciendo y sintiéndose fresco",
                    welcome: "Bienvenido a Net's Service House Cleaning",
                    description: "Ofrecemos servicios de limpieza de primera calidad para su hogar.",
                    contact: "¡Contáctenos para una cotización gratuita!",
                    home_button: "Inicio",
                    about_us_button: "Sobre Nosotros",
                    services_button: "Servicios",
                    contact_us_button: "Contáctenos",
                    copy_right: "©2025 Net's Service House Cleaning. Todos los derechos reservados.",
                    not_found_title: "404 No Encontrado",
                    not_found_message: "La página que está buscando no existe o no está disponible.",
                }
            }
        }
    })

export default i18n
