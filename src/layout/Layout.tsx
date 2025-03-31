import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col items-center transition-colors duration-300">
      <Header />
      <main className="w-full max-w-4xl flex-1 p-6 mt-24">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
