import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../contexts/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal>
      {cartCtx.cartItems.map((item) => 
        <ul>
          <li>
            {item.medicineName} - {item.price} - x{item.quantity}
          </li>
        </ul>
      )}
      <div>
        <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default Cart;
