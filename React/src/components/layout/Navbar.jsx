import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">MyApp</div>
          <div className="space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold"
                  : "text-gray-300 hover:text-white"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold"
                  : "text-gray-300 hover:text-white"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold"
                  : "text-gray-300 hover:text-white"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
