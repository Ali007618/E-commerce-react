// import SHOP_DATA from "../../shop-data.json";
import { useContext } from "react";

import "./shop.styles.scss";

import { ProductContext } from "../../context/product.context";
import ProducCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductContext);
  console.log("Products", products);
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id}>
          <ProducCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
