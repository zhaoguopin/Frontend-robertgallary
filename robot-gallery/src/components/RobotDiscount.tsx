import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext } from "../AppState";
import { RobotProps } from "../interfaces/RobotProps";
import { withAddToCart } from "./withAddToCart";
import { useAddToCart } from "./useAddToCart";
interface Props {
  id: number;
  name: string;
  email: string;
}
const RobotDiscount: React.FC<Props> = ({
  id,
  name,
  email,
  // addToCart,
  // removeCart,
}) => {
  const value = useContext(appContext);
  const addToCart = useAddToCart();
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>Author: {value.userName}</p>
      <p>Discount Item</p>
      <button onClick={() => addToCart(id, name)}>Add to Cart</button>
      {/* <button onClick={() => removeCart(id)}>Remove from Cart</button> */}
    </div>
  );
};

export default RobotDiscount;
