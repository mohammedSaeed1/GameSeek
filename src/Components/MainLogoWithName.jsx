import mainLogo from "../assets/logo-sm.png";
import { Link } from "react-router-dom";

export default function MainLogoWithName() {
  return (
    <>
    <Link to="/">
      <div className="flex items-center gap-x-1 group ml-2">
        <img
          src={mainLogo}
          alt="GameSeek Logo"
          className="w-8 h-8 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform"
        />
        <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-wider">
          Game<span className="text-blue-400">Seek</span>
        </h1>
      </div>
    </Link>
    </>
  );
}
