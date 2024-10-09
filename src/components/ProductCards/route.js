import { ProductCards } from "./ProductCards";

export const ProductCardsRoute = [
  {
    path: "/product-category/:id",
    element: <ProductCards />,
  },
  { path: "/", element: <ProductCards /> },
];
