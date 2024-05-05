import React from "react";
import "./NotFound.css";
import Image from "../../Assests/404-page-not-found.svg";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-heading">404 - Page Not Found</h1>
        <p className="not-found-text">
          Sorry, the company data you are looking for does not exist.
        </p>
        <img className="not-found-image" src={Image} alt="404" />
      </div>
    </div>
  );
};

export default NotFound;
