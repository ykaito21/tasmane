import React from "react";

function ProjectSummary({ project }) {
  const { title, content } = project;

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text darken-3">
        <span className="card-title">{title}</span>
        <p>{content}</p>
        <p>posted by someone</p>
        <p className="grey-text">date</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
