import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white text-center p-4 mt-4">
        © 2025 Prince Lailan and Team
      </footer>
    </div>
  );
}

export default Layout;
