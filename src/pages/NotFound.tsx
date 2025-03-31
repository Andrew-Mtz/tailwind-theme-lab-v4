// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import { translations } from "../i18n/translations";

export default function NotFound() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">{t.notFoundTitle}</p>
      <Link
        to="/"
        className="underline text-primary hover:text-primary/80 transition"
      >
        {t.backHome}
      </Link>
    </div>
  );
}
