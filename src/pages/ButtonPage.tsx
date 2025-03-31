import { Button } from "../components/Button";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../i18n/translations";

const ButtonPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t.buttonPage.title}</h2>

      <div className="space-y-2">
        <p className="text-text-secondary">{t.buttonPage.type.primary}</p>
        <Button>{t.buttonPage.type.primary}</Button>
      </div>

      <div className="space-y-2">
        <p className="text-text-secondary">{t.buttonPage.type.secondary}</p>
        <Button variant="secondary">{t.buttonPage.text.secondary}</Button>
      </div>

      <div className="space-y-2">
        <p className="text-text-secondary">{t.buttonPage.type.disabled}</p>
        <Button disabled>{t.buttonPage.text.disabled}</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
