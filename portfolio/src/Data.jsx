import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";

export const navLinks = [
  {
    name: "Home",
    icon: <FaHome className="nav-mobile-icon" />,
    path: "home",
  },
  {
    name: "About",
    icon: <FaUser className="nav-mobile-icon" />,
    path: "about",
  },
  {
    name: "Project",
    icon: <FaFolderOpen className="nav-mobile-icon" />,
    path: "project",
  },
  {
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-mobile-icon" />,
    path: "contact",
  },
];
