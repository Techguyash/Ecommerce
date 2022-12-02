import React, { useState } from "react";
import CartQuantity from "../CartQuantity/CartQuantity";
import Button from "../UI/Button";
import Colors from "../UI/Colors/Colors";
import styles from "./AddToCart.module.css";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
 
  const [quantity, setQuantity] = useState(1);

  const setIncrease = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };
  const setDecrease = () => {
    quantity > 1 ? setQuantity((prev) => prev - 1) : setQuantity(1);
  };

  return (
    <div className={styles.container}>
      <Colors colors={colors} />
      {/* Add to cart */}
      <CartQuantity
        quantity={quantity}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <div className={styles.cartbtn}>
        <Button>Add To Cart</Button>
      </div>
    </div>
  );
};

export default AddToCart;
