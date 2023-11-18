import React from "react";
import ConnectFour from "../../assets/images/connect-four.jpg";
import PunkBeer from "../../assets/images/punk-beer.jpg";
import TicTacToe from "../../assets/images/tic-tac-toe-game.jpg";
import ToDoList from "../../assets/images/to-do-list.jpg";
import Giphy from "../../assets/images/giphy-app.jpg";
import Calculator from "../../assets/images/calculator.jpg";
import { FaLink, FaCode } from "react-icons/fa6";
import "./project.css";

const Project = () => {
  return (
    <section className="project" id="project">
      <h2 className="section__title">My Portfolio</h2>
      <span className="section__subtitle">
        Some of the projects which are deployed are listed here, if you want to
        see more you can visit my GitHub.
      </span>
      <div className="project__container">
        <div className="project__container-card">
          <img src={ConnectFour} alt="Connect Four Game" />
          <h3>Connect Four Game</h3>
          <div className="project-link">
            <a
              className="link"
              href="https://github.com/SumanRayamajhi/Connect-Four-Game"
            >
              <FaCode />
            </a>
            <a className="link" href="https://connect-four-game-aebdd.web.app">
              <FaLink />
            </a>
          </div>
        </div>

        <div className="project__container-card">
          <img src={PunkBeer} alt="Punk Beer API" />
          <h3>Punk Beer API</h3>
          <div className="project-link">
            <a
              className="link"
              href="https://github.com/SumanRayamajhi/API-punk-beer"
            >
              <FaCode />
            </a>
            <a className="link" href="https://api-punk-beer.web.app">
              <FaLink />
            </a>
          </div>
        </div>

        <div className="project__container-card">
          <img src={TicTacToe} alt="Tic Tac Toe Game" />
          <h3>Tic Tac Toe Game</h3>
          <div className="project-link">
            <a
              className="link"
              href="https://github.com/SumanRayamajhi/tik-tak-toe-game"
            >
              <FaCode />
            </a>
            <a className="link" href="https://tic-tac-toe-game-a70aa.web.app">
              <FaLink />
            </a>
          </div>
        </div>

        <div className="project__container-card">
          <img src={ToDoList} alt="To Do List" />
          <h3>To Do List</h3>
          <div className="project-link">
            <a
              className="link"
              href="https://github.com/SumanRayamajhi/to-do-app"
            >
              <FaCode />
            </a>
            <a className="link" href="https://to-do-list-cea9d.web.app">
              <FaLink />
            </a>
          </div>
        </div>

        <div className="project__container-card">
          <img src={Calculator} alt="To Do List" />
          <h3> Redux Calculator</h3>
          <div className="project-link">
            <a
              className="link"
              href="https://github.com/SumanRayamajhi/Redux--Calculator"
            >
              <FaCode />
            </a>
            <a className="link" href="https://redux-calculator-1bf1e.web.app">
              <FaLink />
            </a>
          </div>
        </div>

        <div className="project__container-card">
          <img src={Giphy} alt="To Do List" />
          <h3> Giphy API</h3>
          <div className="project-link">
            <a
              className="link"
              href="https://github.com/SumanRayamajhi/Giphy-API"
            >
              <FaCode />
            </a>
            <a className="link" href="https://giphy-api-ba696.web.app">
              <FaLink />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
