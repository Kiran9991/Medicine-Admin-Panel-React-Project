import { useContext } from "react";

import MedicineContext from "../contexts/medicine-context";


const MedicineItem = (props) => {
  const cartCtx = useContext(MedicineContext)

  const addToCart = (e) => {
    let name = e.target.value;
    cartCtx.medicines.forEach(item => {
      if(item.medicineName === name) {
        cartCtx.addItem(item)
        console.log(item)
      }
    })
  }
  return (
    <li>
      {props.items.medicineName} - {props.items.price} - x1 
      <button value={props.items.medicineName} onClick={addToCart}>Add to Cart</button>
    </li>
  );
};

export default MedicineItem;
