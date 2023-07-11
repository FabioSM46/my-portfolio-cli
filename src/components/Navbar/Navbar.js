import "./Navbar.css";
import { TiHome, TiInfo, TiHtml5, TiPlug } from "react-icons/ti";

export const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen 
    w-16 m-0 flex flex-col bg-primary-900 text-white shadow-lg"
    >
      <NavbarIcon icon={<TiHome size={"28"} />} text="Home" />
      <NavbarIcon icon={<TiInfo size={"28"} />} text="About" />
      <NavbarIcon icon={<TiHtml5 size={"28"} />} text="Projects" />
      <NavbarIcon icon={<TiPlug size={"28"} />} text="Contacts" />
    </div>
  );
};

const NavbarIcon = ({ icon, text }) => (
  <div className="navbar-icon group">
    {icon}

    <span className="navbar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
