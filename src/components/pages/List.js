import { useState } from "react";
import ProductList from "../ProductsList";
import "./List.css";

function List() {
  const [products, setProducts] = useState([]);

  const productHandler = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();
    setProducts(data.products);
  };

  return (
    <div className="list-container">
      <section>
        <button className="button" onClick={productHandler}>
          Fetch Products
        </button>
      </section>
      <section className="product-section">
        <ProductList products={products} />
      </section>
    </div>
  );
}

export default List;
