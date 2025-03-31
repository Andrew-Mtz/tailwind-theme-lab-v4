import { Link, useLocation } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="w-full fixed top-0 left-0 bg-bg text-text border-b border-border shadow-sm z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-6">
        <nav className="flex gap-4 items-center text-sm font-medium">
          <Link
            to="/"
            className={pathname === "/" ? "underline" : "text-text-secondary"}
          >
            Home
          </Link>
          <Link
            to="/card"
            className={
              pathname === "/card" ? "underline" : "text-text-secondary"
            }
          >
            Card
          </Link>
          <Link
            to="/button"
            className={
              pathname === "/button" ? "underline" : "text-text-secondary"
            }
          >
            Button
          </Link>
        </nav>
        <div className="flex gap-4">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
