import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { loadingContext } from "../context/loader";

export const useFetch = (url, selectedCategory) => {
  const [data, setData] = useState([]);
  const { loading, setLoading } = useContext(loadingContext);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    setLoading(true);
    console.log("fetch");
    axios
      .get(url)
      .then((response) => {
        const apiProducts = response.data;
        const filteredStoredProducts = selectedCategory
          ? storedProducts.filter(
              (product) => product.category.id === selectedCategory
            )
          : storedProducts;

        setData([...apiProducts, ...filteredStoredProducts]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, selectedCategory]);
  return { data, loading };
};
