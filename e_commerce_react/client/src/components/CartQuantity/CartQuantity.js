import React from "react";
import styles from "./CartQuantity.module.css";
import { BiPlus, BiMinus } from "react-icons/bi";

const CartQuantity = ({ quantity, setIncrease, setDecrease }) => {
  return (
    <div className={styles.CartQuantity}>
      <button onClick={setDecrease} className={styles.btnCart}>
        <BiMinus className={styles.icn} />
      </button>
      <div className={styles.qty}>{quantity}</div>
      <button onClick={setIncrease} className={styles.btnCart}>
        <BiPlus className={styles.icn} />
      </button>
    </div>
  );
};

export default CartQuantity;
