import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gray-900 text-white shadow">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          🏀 Baskeintats
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-orange-400" : "hover:text-orange-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/games"
            className={({ isActive }) =>
              isActive ? "text-orange-400" : "hover:text-orange-300"
            }
          >
            Games
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
