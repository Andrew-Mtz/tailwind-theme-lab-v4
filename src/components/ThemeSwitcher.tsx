import { useLanguage } from "../context/useLanguage";
import { useTheme } from "../context/useTheme";
import { translations } from "../i18n/translations";
import { themes } from "../themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="theme" className="text-sm font-medium">
        {t.themeLabel}
      </label>
      <select
        id="theme"
        value={theme}
        onChange={e => setTheme(e.target.value as keyof typeof themes)}
        className="bg-surface text-text border border-border rounded px-2 py-1"
      >
        {Object.entries(themes).map(([key, value]) => (
          <option key={key} value={key}>
            {t.themes[value.label]}
          </option>
        ))}
      </select>
    </div>
  );
};
