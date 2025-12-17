import { NavLink } from "react-router-dom";
import mainLogo from "../assets/logo-sm.png";
import wraper from "../assets/wraper.png";
import useSpecificCategory from "../Hooks/useSpecificCategory";

export default function Navbar() {
  const { specificCategory } = useSpecificCategory();

  return (
    <>
      <div className="relative">
        <img
          src={wraper}
          alt="game banner"
          className="w-full h-52 object-cover bg-[#2A2E33]"
        />

        <nav className="bg-linear-to-r from-[#3A497B] via-[#2c3e5f] to-[#3A497B] p-5 flex flex-col lg:flex-row justify-between items-center gap-5 w-[95%] lg:w-3/4 mx-auto -mt-10 rounded-2xl shadow-2xl border-2 border-[#4a5a8f] backdrop-blur-sm">
          {/* Logo Section */}
          <div className="flex items-center gap-x-3 group">
            <img
              src={mainLogo}
              alt="GameSeek Logo"
              className="w-12 h-12 group-hover:scale-110 transition-transform"
            />
            <h1 className="text-white text-3xl font-bold tracking-wider">
              Game<span className="text-blue-400">Seek</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-2 flex-wrap justify-center">
            {[
              { name: "mmorpg", label: "MMORPG" },
              { name: "shooter", label: "Shooter" },
              { name: "sailing", label: "Sailing" },
              { name: "permadeath", label: "Permadeath" },
              { name: "superhero", label: "Superhero" },
              { name: "pixel", label: "Pixel" },
            ].map((category) => (
              <NavLink
                key={category.name}
                to={category.name}
                onClick={() => specificCategory(category.name)}
                className={({ isActive }) =>
                  `text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1 ${
                    isActive
                      ? "bg-blue-600 shadow-lg shadow-blue-500/50"
                      : "bg-white/10 hover:bg-blue-600"
                  }`
                }
              >
                {category.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
