// src/components/LanguageSwitcher.tsx
import { useLanguage } from "../context/useLanguage";
import { translations } from "../i18n/translations";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="language" className="text-sm">
        {t.languageLabel}
      </label>
      <select
        id="language"
        value={language}
        onChange={e => setLanguage(e.target.value as "es" | "en")}
        className="rounded px-2 py-1 bg-surface border border-border text-sm"
      >
        <option value="es">{t.languages.spanish}</option>
        <option value="en">{t.languages.english}</option>
      </select>
    </div>
  );
};
