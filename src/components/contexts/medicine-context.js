import React, { useEffect, useState } from "react";

const MedicineContext = React.createContext({
    medicines: [],
    addProduct: (item) => {}
})

export const MedicinesProvider = (props) => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        async function fetchMedicinesItems () {
        const res = await fetch(`https://crudcrud.com/api/038d569ad963478b97ffe59c41bfd04a/medicines`)
        const data = await res.json();
        console.log('loaded', data);
        setMedicines([...data]);
        }
        fetchMedicinesItems();
    },[])

    const addMedicineToLists = async(item) => {
        setMedicines([...medicines, item])
        const res = await fetch(`https://crudcrud.com/api/038d569ad963478b97ffe59c41bfd04a/medicines`, {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(item)
        })
        const data = await res.json();
        console.log('succesful', data);
    }

    const medicineContext = {
        medicines: medicines,
        addProduct: addMedicineToLists
    }

    return <MedicineContext.Provider value={medicineContext}>
        {props.children}
    </MedicineContext.Provider>
}

export default MedicineContext;