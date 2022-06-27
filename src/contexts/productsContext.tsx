import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext([] as any);

export const ProductProvider = (props: any) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("http://localhost:3004/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }

  return (
    <ProductContext.Provider value={[products]}>
      {props.children}
    </ProductContext.Provider>
  );
}