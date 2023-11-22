import React from "react"

const MedicineContext = React.createContext({
    medicines: [],
    cartItems: [],
    addItem: (item) => {},
    addProduct: (item) => {}
})

export default MedicineContext;