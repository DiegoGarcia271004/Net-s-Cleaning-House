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
                    welcome: "Welcome to Net's Service House Cleaning",
                    description: "We provide top-notch cleaning services for your home.",
                    contact: "Contact us for a free quote!",
                    home_button: "Home",
                    about_us_button: "About Us",
                    services: "Services",
                    contact_us_button: "Contact Us",
                }
            },
            es: {
                translation: {
                    welcome: "Bienvenido a Net's Service House Cleaning",
                    description: "Ofrecemos servicios de limpieza de primera calidad para su hogar.",
                    contact: "¡Contáctenos para una cotización gratuita!",
                    home_button: "Inicio",
                    about_us_button: "Sobre Nosotros",
                    services: "Servicios",
                    contact_us_button: "Contáctenos",
                }
            }
        }
    })
i18n.changeLanguage('en') //debugging purposes, change to 'es' to test Spanish translations

export default i18n
