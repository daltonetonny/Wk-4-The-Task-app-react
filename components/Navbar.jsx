import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-300">React Tasks</h1>
      <div className="flex items-center gap-4">
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:underline">
          Home
        </Link>
        <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:underline">
          Tasks
        </Link>
        <Link to="/api" className="text-gray-700 dark:text-gray-300 hover:underline">
          API
        </Link>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 border rounded text-sm dark:text-white border-gray-400 dark:border-gray-500"
        >
          {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
