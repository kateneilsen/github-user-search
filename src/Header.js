import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const header = () => {
  return (
    <div className="container d-flex justify-content-between mt-3">
      <div className="navbar-brand d-flex align-items-center">
        <h1 className="title">devfinder</h1>
      </div>
      <div className="d-flex align-items-center">
        Dark
        <span>
          <FontAwesomeIcon icon={faMoon} className="ml-2" />
        </span>
      </div>
    </div>
  );
};

export default header;
