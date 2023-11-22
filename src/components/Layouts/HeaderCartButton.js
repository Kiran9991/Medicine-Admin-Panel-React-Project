// import classes from './HeaderCartButton.module.css'
import { useContext } from "react";

import MedicineContext from "../contexts/medicine-context";

const HeaderCartButton = (props) => {
    const medicieCtx = useContext(MedicineContext)

    let quantity = 0;

    console.log('car',medicieCtx.cartItems)
  return (
    <button onClick={props.onClick}>
      <span>Your Cart - </span>
      <span>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
