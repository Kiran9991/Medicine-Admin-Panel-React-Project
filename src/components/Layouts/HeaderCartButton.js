// import classes from './HeaderCartButton.module.css'
import { useContext } from "react";
import CartContext from "../contexts/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)

    let quantity = 0;

    cartCtx.cartItems.forEach((item) => {
      quantity += item.quantity;
    })

  return (
    <button onClick={props.onClick}>
      <span>Your Cart - </span>
      <span>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
