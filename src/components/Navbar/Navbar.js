import { TiHome, TiInfo, TiHtml5, TiPlug } from "react-icons/ti";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen 
    w-20 m-0 flex flex-col bg-primary-900 text-white shadow-lg"
    >
      <Link to={"/"}>
        <NavbarIcon icon={<TiHome size={"32"} />} text="Home" />
      </Link>
      <Link to={"/about"}>
        <NavbarIcon icon={<TiInfo size={"32"} />} text="About" />
      </Link>
      <Link to={"/projects"}>
        <NavbarIcon icon={<TiHtml5 size={"32"} />} text="Projects" />
      </Link>
      <Link to={"/contacts"}>
        <NavbarIcon icon={<TiPlug size={"32"} />} text="Contacts" />
      </Link>
    </div>
  );
};

const NavbarIcon = ({ icon, text }) => (
  <div className="navbar-icon group">
    {icon}
    <span className="navbar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
