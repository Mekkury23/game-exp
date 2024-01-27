import { Link } from "react-router-dom";
import "./index.css";

const products = [
  { name: "Ananias" },
  { name: "Ariclenes" },
];

const MarketProductColumn = () => (
  <div className="market-product-column">
    <div className="header">
    <span>Talentos</span>
    </div>
    <div className="market-product-list">
      {products.map((product, index) => (
        <div className="product" key={index}>
          {product.name}
        </div>
      ))}
    </div>
    <Link to='/game' className='button'>Abrir o Mercado</Link>
  </div>
);

export default MarketProductColumn;
