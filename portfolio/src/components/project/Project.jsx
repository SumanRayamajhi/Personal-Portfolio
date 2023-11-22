import React from "react";
import { projects } from "../../PersonalData.jsx";
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
        {projects.map(
          (
            {
              name,
              image,
              gitHubLink,
              codeLinkIcon,
              deployedLink,
              liveLinkIcon,
            },
            index
          ) => {
            return (
              <div className="project__container-card" key={index}>
                <img src={image} alt="Connect Four Game" />
                <h3>{name}</h3>
                <div className="project-link">
                  <a className="link" href={gitHubLink}>
                    {codeLinkIcon}
                  </a>
                  <a className="link" href={deployedLink}>
                    {liveLinkIcon}
                  </a>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Project;
