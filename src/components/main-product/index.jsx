import { Link } from "react-router-dom";
import "./index.css";

const products = [
  { first: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsa ipsam velit numquam necessitatibus. Sit sequi magni omnis, cumque dolorum rerum soluta dolores beatae impedit quidem nobis, blanditiis explicabo corporis." },
  { name: "Ariclenes" },
];

const MainProduct = () => (
  <div className="main-product-column">
    <div className="header">
    <span>Talentos</span>
    </div>
    <div className="main-product-list">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <p>{product.first}</p>
          <p>{product.first}</p>
          <p>{product.first}</p>
          <p>{product.first}</p>
        </div>
      ))}
    </div>
    <Link to='/game' className='button'>Enviar</Link>
  </div>
);

export default MainProduct;
