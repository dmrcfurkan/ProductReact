import React from "react";
import "./filter.css";
import { useNavigate } from "react-router-dom";

export const Filter = () => {
  const navigate = useNavigate();
  return (
    <div>
      <select
        name=""
        id="categories"
        onChange={(e) => {
          const id = e.target.value;
          navigate("product-category/" + id);
        }}
        
      >
        <option value="0">All Product</option>
        <option value="1">Nuevo</option>
        <option value="2">Electronics</option>
        <option value="3">Furniture</option>
        <option value="4">Shoes</option>
        <option value="5">Miscellaneous</option>
      </select>
    </div>
  );
};
