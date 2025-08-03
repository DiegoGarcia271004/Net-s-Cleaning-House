import { useTranslation } from "react-i18next";
import { NavBar } from "../../components/NavBar/NavBar";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
    </>
  );
}
