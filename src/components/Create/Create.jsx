import React from "react";
import "./create.css";
import { Link } from "react-router-dom";

export const Create = () => {
  return (
    <div>
      <Link to="create-product" className="create-button">
        Create Product
      </Link>
    </div>
  );
};
