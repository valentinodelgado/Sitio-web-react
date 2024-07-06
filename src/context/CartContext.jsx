import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const qtyProd = 10;

    const addToCart = (product, quantity) => { //primero recibimos el producto nuevo y su cantidad
        setCart((prevCart) =>{
            const existingProductIndex = prevCart.findIndex((item) => item.id === product.id); //buscamos el indice del producto y ver si existe, busca dentro del carrito un indice igual
            if(existingProductIndex >= 0){ //si existe el producto agrega una nueva cantidad de ese producto al ya existente
                const newCart = [...prevCart]; //cuando se ponen los ... saca los productos del array viejo y lo pone en el nuevo
                newCart[existingProductIndex] = {
                    ...newCart[existingProductIndex],
                    quantity: newCart[existingProductIndex].quantity + quantity,
                };
                return newCart;
            } else{
                return [...prevCart, {...product,quantity}];
            }
        });
    }

    const removeFromCart = (product, quantity) => {
        setCart((prevCart) => {
            return prevCart.reduce((acc, item) => {
            if (item.id === product.id) {
                const newQuantity = item.quantity - quantity;
                if (newQuantity > 0) {
                acc.push({ ...item, quantity: newQuantity });
                }
            } else {
                acc.push(item);
            }
            return acc;
            }, []);
        });
        };
    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
