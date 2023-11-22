import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";
import { DiJavascript, DiPostgresql } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import NextJs from "../../assets/images/nextjs.svg";

const Skills = () => {
  return (
    <div className="About__skills-lists">
      <div>
        <div className="About__skills-list">
          <FaHtml5 /> <span> HTML</span>
        </div>
        <div className="About__skills-list">
          <FaCss3Alt /> <span> CSS</span>
        </div>
        <div className="About__skills-list">
          <DiJavascript /> <span> Javascript</span>
        </div>
        <div className="About__skills-list">
          <FaReact /> <span> React</span>
        </div>
        <div className="About__skills-list">
          <img className="next-logo" src={NextJs} alt="nextjs logo" />
          <span> Next.js</span>
        </div>
        <div className="About__skills-list">
          <FaNodeJs />
          <span> Node</span>
        </div>
      </div>
      <div>
        <div className="About__skills-list">
          <SiExpress />
          <span> Express</span>
        </div>
        <div className="About__skills-list">
          <DiPostgresql />
          <span> PostgreSQL</span>
        </div>
        <div className="About__skills-list">
          <SiMysql />
          <span> MySQL</span>
        </div>
        <div className="About__skills-list">
          <FaBootstrap />
          <span> Bootstrap</span>
        </div>
        <div className="About__skills-list">
          <SiTailwindcss />
          <span> Tailwind CSS</span>
        </div>
        <div className="About__skills-list">
          <FiFigma />
          <span> Figma</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
