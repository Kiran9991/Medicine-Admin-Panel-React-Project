import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
    cartItems: [],
    addItem: (item) => {}
})

export const CartItemsProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        async function fetchCartItems () {
        const res = await fetch(`https://crudcrud.com/api/038d569ad963478b97ffe59c41bfd04a/cart`)
        const data = await res.json();
        console.log('loadedCart', data);
        setCartItems([...data]);
        }
        fetchCartItems()
    },[])

    const addItemsToCart = async(item) => {
        setCartItems([...cartItems, item])
        const res = await fetch(`https://crudcrud.com/api/038d569ad963478b97ffe59c41bfd04a/cart`, {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(item)
        })
        const data = await res.json();
        console.log('succesful', data);
    }

    const cartContext = {
        cartItems: cartItems,
        addItem: addItemsToCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;