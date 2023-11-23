import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";
import ConnectFour from "./assets/images/connect-four.jpg";
import PunkBeer from "./assets/images/punk-beer.jpg";
import TicTacToe from "./assets/images/tic-tac-toe-game.jpg";
import ToDoList from "./assets/images/to-do-list.jpg";
import Giphy from "./assets/images/giphy-app.jpg";
import Calculator from "./assets/images/calculator.jpg";
import { FaLink, FaCode } from "react-icons/fa6";
import Theme1 from "./assets/images/theme-1.png";
import Theme2 from "./assets/images/theme-2.png";
import Theme3 from "./assets/images/theme-3.png";
import Theme4 from "./assets/images/theme-4.png";
import Theme5 from "./assets/images/theme-5.png";
import Theme6 from "./assets/images/theme-6.png";
import Theme7 from "./assets/images/theme-7.png";
import Theme8 from "./assets/images/theme-8.png";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav-mobile-icon" />,
    path: "home",
  },
  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav-mobile-icon" />,
    path: "about",
  },
  {
    id: 3,
    name: "Project",
    icon: <FaFolderOpen className="nav-mobile-icon" />,
    path: "project",
  },
  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-mobile-icon" />,
    path: "contact",
  },
];

export const projects = [
  {
    id: 1,
    name: "Connect Four Game",
    image: ConnectFour,
    gitHubLink: "https://github.com/SumanRayamajhi/Connect-Four-Game",
    codeLinkIcon: <FaCode />,
    deployedLink: "https://connect-four-game-aebdd.web.app",
    liveLinkIcon: <FaLink />,
  },
  {
    id: 2,
    name: "Punk Beer API",
    image: PunkBeer,
    gitHubLink: "https://github.com/SumanRayamajhi/API-punk-beer",
    codeLinkIcon: <FaCode />,
    deployedLink: "https://api-punk-beer.web.app",
    liveLinkIcon: <FaLink />,
  },
  {
    id: 3,
    name: "Tic Tac Toe Game",
    image: TicTacToe,
    gitHubLink: "https://github.com/SumanRayamajhi/tik-tak-toe-game",
    codeLinkIcon: <FaCode />,
    deployedLink: "https://tic-tac-toe-game-a70aa.web.app",
    liveLinkIcon: <FaLink />,
  },
  {
    id: 4,
    name: "To Do List",
    image: ToDoList,
    gitHubLink: "https://github.com/SumanRayamajhi/to-do-app",
    codeLinkIcon: <FaCode />,
    deployedLink: "https://to-do-list-cea9d.web.app",
    liveLinkIcon: <FaLink />,
  },
  {
    id: 5,
    name: "Redux Calculator",
    image: Calculator,
    gitHubLink: "https://github.com/SumanRayamajhi/Redux--Calculator",
    codeLinkIcon: <FaCode />,
    deployedLink: "https://redux-calculator-1bf1e.web.app",
    liveLinkIcon: <FaLink />,
  },
  {
    id: 6,
    name: "Giphy API",
    image: Giphy,
    gitHubLink: "https://github.com/SumanRayamajhi/Giphy-API",
    codeLinkIcon: <FaCode />,
    deployedLink: "https://giphy-api-ba696.web.app",
    liveLinkIcon: <FaLink />,
  },
];

export const colorThemes = [
  {
    id: 1,
    img: Theme1,
    color: "rgb(106, 74, 231)",
  },
  {
    id: 2,
    img: Theme2,
    color: "rgb(188, 52, 120)",
  },
  {
    id: 3,
    img: Theme3,
    color: "rgb(113, 64, 181)",
  },
  {
    id: 4,
    img: Theme4,
    color: "rgb(49, 131, 80)",
  },
  {
    id: 5,
    img: Theme5,
    color: "rgb(48, 178, 98)",
  },
  {
    id: 6,
    img: Theme6,
    color: "rgb(204, 140, 31)",
  },
  {
    id: 7,
    img: Theme7,
    color: "rgb(199, 43, 43)",
  },
  {
    id: 8,
    img: Theme8,
    color: "rgb(54, 111, 176)",
  },
];
