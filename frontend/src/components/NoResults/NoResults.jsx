import React from "react";
import "./NoResults.css";
import { assets } from "../../assets/assets"; // Assuming you have an image asset for 'no results'

const NoResults = () => {
  return (
    <div className="no-results-container">
      <img src={assets.noresult} alt="No Results" className="no-results-image" />
      <h2>No Results Found</h2>
      <p>Sorry, we couldn't find that product</p>
    </div>
  );
};

export default NoResults;
