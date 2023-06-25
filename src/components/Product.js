import './Product.css';

function Product(props) {
  return (
    <li className="product-item">
      <h2 className="product-title">{props.title}</h2>
      <h3 className="product-description">{props.description}</h3>
      <span className="product-price">{props.price}</span>
      <span className="product-discount">{props.discount}</span>
      <img className="product-thumbnail" src={props.thumbnail} alt="thumbnail" />
      <img className="product-images" src={props.images} alt="Images" />
    </li>
  );
}

export default Product;
