import { useRef, useContext } from "react";

import MedicineContext from "./contexts/medicine-context";
import classes from "./MedicineForm.module.css";

const MedicineForm = (props) => {
  const medicineCtx = useContext(MedicineContext);

  const enteredName = useRef();
  const enteredDescription = useRef();
  const enteredPrice = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const obj = {
      medicineName: enteredName.current.value,
      description: enteredDescription.current.value,
      price: enteredPrice.current.value,
    };

    medicineCtx.addProduct(obj);

    // enteredName.current.value = "";
    // enteredDescription.current.value = "";
    // enteredPrice.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.formContainer}>
        <label>Medicine Name:- </label>
        <input type="text" id="medicineName" ref={enteredName} />
        <label>Description:- </label>
        <input type="text" id="description" ref={enteredDescription} />
        <label>Price:- </label>
        <input type="number" id="price" ref={enteredPrice} />
      </div>
      <div className={classes.formDiv}>
        <button type="submit"> Add Product</button>
      </div>
    </form>
  );
};

export default MedicineForm;
