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
                    slogan: "We'll leave your home looking and feeling fresh",
                    welcome: "Welcome to Net's Service House Cleaning",
                    description: "We provide top-notch cleaning services for your home.",
                    contact: "Contact us for a free quote!",
                    home_button: "Home",

                    about_us_button: "About Us",

                    description_title: "Your Trusted Cleaning Team",
                    description_text: `At Net's Service House Cleaning, we take pride in providing exceptional cleaning services with attention to detail and customer satisfaction.
                        Our experienced team delivers reliable, professional, and affordable cleaning solutions tailored to your needs.
                    `,

                    residential_description: "Professional cleaning services to keep your home fresh, clean, and comfortable. We take care of dusting, vacuuming, mopping, kitchens, bathrooms, and more.",
                    residential_services: [
                        "Dusting",
                        "Vacuuming",
                        "Mopping Floors",
                        "Kitchen Cleaning",
                        "Bathroom Sanitizing"
                    ],

                    apartment_description: "Detailed and flexible cleaning services for apartments of all sizes. We clean living areas, bedrooms, kitchens, bathrooms, and floors based on your needs.",
                    apartment_services: [
                        "Detailed Cleaning",
                        "Recurring Service Available",
                        "Flexible Scheduling"
                    ],

                    store_description: "Reliable cleaning for retail stores, offices, boutiques, salons, and other commercial spaces. We help maintain a clean and welcoming environment for customers and employees.",
                    store_services: [
                        "Retail Store Cleaning",
                        "Office Cleaning",
                        "Window and Glass Cleaning",
                        "Recurring Daily, Weekly or Monthly Cleaning"
                    ],

                    post_construction_description: "Detailed cleaning to remove construction dust, debris, and residue after a renovation or building project, leaving your space clean and ready to use.",
                    post_construction_cleaning: [
                        "Fine Dust Removal",
                        "Surface Cleaning",
                        "Window Cleaning",
                        "Floor Detailing"
                    ],

                    show_more: "Show More",
                    show_less: "Show Less",
                    services_button: "Services",
                    contact_us_button: "Contact Us",
                    copy_right: "©2025 Net's Service House Cleaning. All Rights Reserved.",
                    not_found_title: "404 Not Found",
                    not_found_message: "The page you are looking for does not exist or is unavailable.",
                    k_our_services: "Discover our services",
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

                    description_title: "Tu Equipo de Limpieza de Confianza",
                    description_text: `En Net's Service House Cleaning, nos orgullecemos en proveer servicios de limpieza excepcionales con atención al detalle y satisfacción del cliente.
                        Nuestro equipo experimentado provee soluciones confiables, profesionales y asequibles a medida de sus necesidades.
                    `,

                    residential_description: "Servicios de limpieza profesional para mantener tu casa fresca, limpia y cómoda. Nos hacemos cargo de desempolvar, aspirar, fregar, cocinas, baños y mucho más.",
                    residential_services: [
                        "Desempolvado",
                        "Aspirado",
                        "Fregado de Pisos",
                        "Limpieza de Cocina",
                        "Desinfección de Baños"
                    ],

                    apartment_description: "Servicios de limpieza detallados y flexibles para apartamentos de todos los tamaños. Limpiamos áreas, cuartos, cocinas, baños y suelos basado en tus necesidades.",
                    apartment_services: [
                        "Limpieza a Detalle",
                        "Servicio Recurrente Disponible",
                        "Horarios Flexibles"
                    ],

                    store_description: "Limpieza confibal para tiendas minoristas, oficinas, boutiques, salones y otros espacios comerciales. Nosotros ayudamos a mantener un ambiente limpio y acogedor para clientes y empleados.",
                    store_services: [
                        "Limpieza de tiendas minoristas",
                        "Limpieza de oficinas",
                        "Limpieza de Ventanas y Cristales",
                        "Limpieza Recurrente Diaria, Semanal o Mensual"
                    ],

                    post_construction_description: "Limpieza detallada para remover polvo de construcción, escombros y residuos después de una renovación o proyecto de construcción, dejando tu espacio limpio y listo para usar.",
                    post_construction_cleaning: [
                        "Eliminación de Polvo Fino",
                        "Limpieza de Superficies",
                        "Limpieza de ventanas",
                        "Limpieza de Suelos"
                    ],

                    show_more: "Mostrar Más",
                    show_less: "Mostrar Menos",
                    services_button: "Servicios",
                    contact_us_button: "Contáctenos",
                    copy_right: "©2025 Net's Service House Cleaning. Todos los derechos reservados.",
                    not_found_title: "404 No Encontrado",
                    not_found_message: "La página que está buscando no existe o no está disponible.",
                    k_our_services: "Conoce nuestros servicios",
                }
            }
        }
    })

export default i18n
