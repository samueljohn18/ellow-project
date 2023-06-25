import { useEffect, useState } from "react";
import Product from "./Product";
import './ProductList.css';

function ProductList(props) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setFilteredProducts(props.products);
    const uniqueBrands = [...new Set(props.products.map((product) => product.brand))];
    const uniqueCategories = [...new Set(props.products.map((product) => product.category))];
    setBrands(uniqueBrands);
    setCategories(uniqueCategories);
  }, [props.products]);

  const brandHandler = (event) => {
    setBrand(event.target.value);
  };

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const sortHandler = (event) => {
    setSort(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    filterProducts(brand, category, sort);
  };

  const filterProducts = (selectedBrand, selectedCategory, selectedSortOption) => {
    let filteredProducts = props.products;

    if (selectedBrand) {
      filteredProducts = filteredProducts.filter((product) => product.brand === selectedBrand);
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
    }

    sortProducts(filteredProducts, selectedSortOption);
  };

  const sortProducts = (products, selectedSortOption) => {
    let sortedProducts = [...products];

    if (selectedSortOption === "rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (selectedSortOption === "discount") {
      sortedProducts.sort((a, b) => b.discountPercentage - a.discountPercentage);
    } else if (selectedSortOption === "price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label className="label" htmlFor="BrandFilter">Brand:</label>
          <select className="select" id="BrandFilter" value={brand} onChange={brandHandler}>
            <option value="">All Brands</option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="CategoryFilter">Category:</label>
          <select className="select" id="CategoryFilter" value={category} onChange={categoryHandler}>
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="SortFilter">Sort:</label>
          <select className="select" id="SortFilter" value={sort} onChange={sortHandler}>
            <option value="">Default</option>
            <option value="rating">Rating</option>
            <option value="discount">Discount</option>
            <option value="price">Price</option>
          </select>
        </div>
        <button className="button" type="submit">Filter</button>
      </form>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            discount={product.discountPercentage}
            thumbnail={product.thumbnail}
            images={product.images}
          />
        ))}
      </ul>
    </>
  );
}

export default ProductList;
