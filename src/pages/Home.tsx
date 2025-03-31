import { useLanguage } from "../context/useLanguage";
import { translations } from "../i18n/translations";

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">{t.home.title}</h1>
      <p className="text-text-secondary">{t.home.description}</p>
    </div>
  );
};

export default Home;
