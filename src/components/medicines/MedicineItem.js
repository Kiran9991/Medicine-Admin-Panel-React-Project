import { useContext } from "react";
import CartContext from "../contexts/cart-context";

const MedicineItem = (props) => {
  const { items } = props;
  const cartCtx = useContext(CartContext)

  const addToCart = (e) => {
    const obj = {
      medicineName: items.medicineName,
      price: items.price,
      quantity: 1
    }
    cartCtx.addItem(obj);
  }

  return (
    <li>
      {items.medicineName} - {items.price} - x1 
      <button value={items.medicineName} onClick={addToCart}>Add to Cart</button>
    </li>
  );
};

export default MedicineItem;
