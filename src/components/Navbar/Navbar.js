import { TiHome, TiInfo, TiHtml5, TiPlug } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useThemeSwitcher } from "../hooks/useThemeSwitcher";

export const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <nav className="navbar-bar">
      <button
        className={`navbar-dark-switch bg-center bg-cover 
        ${
          mode === "dark"
            ? `bg-[url("/src/images/gif/day.gif")]`
            : `bg-[url("/src/images/gif/night.gif")]`
        }`}
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
      ></button>
      <Link to={"/"}>
        <NavbarIcon icon={<TiHome className="icon" />} text="Home" />
      </Link>
      <Link to={"/about"}>
        <NavbarIcon icon={<TiInfo className="icon" />} text="About" />
      </Link>
      <Link to={"/projects"}>
        <NavbarIcon icon={<TiHtml5 className="icon" />} text="Projects" />
      </Link>
      <Link to={"/contact"}>
        <NavbarIcon icon={<TiPlug className="icon" />} text="Contacts" />
      </Link>
    </nav>
  );
};

const NavbarIcon = ({ icon, text }) => (
  <div className="navbar-icon group">
    {icon}
    <span className="navbar-tooltip group-hover:scale-100 z-50">{text}</span>
  </div>
);
