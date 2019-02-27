import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">title {id} </span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero earum
            rem nostrum beatae sint inventore provident, error nesciunt repellat
            pariatur repellendus? Minima quasi commodi ipsa quisquam, excepturi
            recusandae assumenda nisi.
          </p>
        </div>
        <div className="card-action grey lightedn-4 grey-te">
          <div>posted by</div>
          <div>net ninja</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
