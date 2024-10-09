import React, { useRef, useState } from "react";
import "./CreateProduct.css";

export const CreateProduct = () => {
  const productRef = useRef(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [price, setPrice] = useState("");

  const createNewProduct = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    const newElement = {
      title: name,
      price: price,
      id: Date.now(),
      images: [
        "https://i.imgur.com/4lTaHfF.jpeg",
        "https://i.imgur.com/JktHE1C.jpeg",
        "https://i.imgur.com/cQeXQMi.jpeg",
      ],
      category: {
        id: categoryId,
        name: category,
        image: "https://i.imgur.com/Qphac99.jpeg",
      },
    };

    const updatedProducts = [...storedProducts, newElement];
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div className="create-product-wrapper">
      <h3>Create Product</h3>
      <div className="product-name info">
        <label htmlFor="">Product Name</label>
        <input
          type="text"
          value={name}
          onInput={(e) => setName(e.target.value)}
          ref={productRef}
          placeholder="Product Name"
          className="name"
        />
      </div>
      <div className="product-category select">
        <label htmlFor="">Product Category</label>
        <select
          value={categoryId}
          onChange={(e) => {
            setCategoryId(e.target.value);
            setCategory(e.target.options[e.target.selectedIndex].text);
          }}
        >
          <option value="">Select Category</option>
          <option value="1">Nuevo</option>
          <option value="2">Electronics</option>
          <option value="3">Furniture</option>
          <option value="4">Shoes</option>
          <option value="5">Miscellaneous</option>
        </select>
      </div>
      <div className="product-price info">
        <label htmlFor="">Product Price</label>
        <input
          type="text"
          placeholder="Product Price"
          className="price"
          onInput={(e) => setPrice(e.target.value)}
        />
      </div>
      <button
        className="create"
        onClick={() => {
          createNewProduct();
        }}
      >
        Create!
      </button>
    </div>
  );
};
