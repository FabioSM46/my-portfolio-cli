import { TiHome, TiInfo, TiHtml5, TiPlug } from "react-icons/ti";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div
      className="fixed inset-y-0 left-0 h-full w-20 
      flex flex-col justify-center items-center 
      bg-primary-900 text-white shadow-xl 
      space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10"
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
