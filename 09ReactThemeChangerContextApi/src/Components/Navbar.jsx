import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyApp</h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/theme"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;