import { useContext } from "react";

import "./produc-card.styles.scss";

import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";

const ProducCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProducCard;
