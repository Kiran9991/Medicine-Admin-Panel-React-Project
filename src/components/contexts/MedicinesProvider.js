import { useState } from "react";

import MedicineContext from "./medicine-context";

const MedicinesProvider = (props) => {
    const [medicines, setMedicines] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addMedicineToLists = (item) => {
        setMedicines([...medicines, item])
    }

    const addItemsToCart = item => {
        setCartItems([...cartItems, item])
    }

    const medicineContext = {
        medicines: medicines,
        items: cartItems,
        addItem: addItemsToCart,
        addProduct: addMedicineToLists
    }

    return <MedicineContext.Provider value={medicineContext}>
        {props.children}
    </MedicineContext.Provider>
}

export default MedicinesProvider;