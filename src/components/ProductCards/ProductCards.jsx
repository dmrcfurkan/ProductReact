import React, { createContext } from "react";
import "./productcards.css";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../services/useFetch";
export const detailsContext = createContext();

export const ProductCards = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const categoryId = id && id !== "0" ? id : "";

  const { data, loading, error } = useFetch(
    `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`,
    categoryId
  );

  console.log(data);
  if (loading) return <h1>Loading...</h1>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <section className="wrapper-cards">
        {data.map((element) => (
          <Card
            key={element.id}
            onClick={() => {
              navigate("/product-details/" + element.id, {
                state: { product: element },
              });
            }}
          >
            <p>{element.title}</p>
            <div
              style={{
                overflow: "hidden",
              }}
            >
              <img
                src={element.images[0].replace(/[\[\]"]/g, "")}
                alt=""
                className="images"
              />
            </div>
            <p>Price: {element.price}$</p>
          </Card>
        ))}
      </section>
    </div>
  );
};

const Card = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="product-info">
      {children}
    </div>
  );
};
