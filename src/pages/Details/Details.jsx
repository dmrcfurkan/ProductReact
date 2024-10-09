import React from "react";
import "./details.css";
import { useLocation } from "react-router-dom";

export const Details = () => {
  const location = useLocation();

  const { product } = location.state || {};

  if (!product) {
    window.location.href = "/";
    return;
  }

  return (
    <div>
      <div className="product-details">
        <img src={product.images} alt="" />
        <div className="info">
          <p className="product-name">{product.title} </p>
          <p className="product-price">{product.price}$</p>
          <p className="product-description">{product.description}</p>
          <button className="add">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
