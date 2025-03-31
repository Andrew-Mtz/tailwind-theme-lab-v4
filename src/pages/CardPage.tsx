import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../i18n/translations";

const CardPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t.cardPage.title}</h2>

      <Card title={t.cardPage.featured} description={t.cardPage.featuredDesc}>
        <Button>{t.cardPage.buy}</Button>
      </Card>

      <Card title={t.cardPage.alert} description={t.cardPage.alertDesc}>
        <Button variant="secondary">{t.cardPage.dismiss}</Button>
      </Card>
    </div>
  );
};

export default CardPage;
