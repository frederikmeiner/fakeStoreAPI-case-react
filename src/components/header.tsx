import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="top-0 fixed w-full z-20 bg-white/25 backdrop-blur shadow-sm pt-4 pb-4">
      <div className="max-w-1366 mx-auto flex justify-between items-center px-10">
        <h2 className="text-xl font-bold text-black">
        <NavLink to="/" className="hover:text-gray-800 playfair-display text-sm sm:text-lg md:text-xl lg:text-3xl">
          Fake store API
        </NavLink>

        </h2>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 hover:text-blue-600 text-sm sm:text-base Montserrat font-semibold"
                    : "text-black Montserrat font-semibold hover:text-gray-800 text-sm sm:text-base"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 hover:text-blue-600 text-sm sm:text-base Montserrat font-semibold"
                    : "text-black Montserrat font-semibold hover:text-gray-800 text-sm sm:text-base"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 hover:text-blue-600 text-sm sm:text-base Montserrat font-semibold"
                    : "text-black Montserrat font-semibold hover:text-gray-800 text-sm sm:text-base"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
