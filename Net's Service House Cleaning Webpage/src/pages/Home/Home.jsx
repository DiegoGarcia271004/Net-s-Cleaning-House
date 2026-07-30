import "./Home.css";
import { useTranslation } from "react-i18next";
import { NavBar } from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Description from "../../components/Description/Description";
import Services from "../../components/Services/Services";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <NavBar/>
      <Hero/>
      <Description/>
      <Services/>
      <Footer/>
    </>
  );
}
