import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';

export const Cart = () => {
    const {cart, removeFromCart} = useContext(CartContext);

    const handleRemoveOne = (item) =>{
        removeFromCart(item,1);
    }

    const calculartotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const handleDeleteItem = (item) => {
        removeFromCart(item, item.quantity); // Eliminar todos los items del mismo tipo
    };


    return (
        <div>
        <h1 style={{textAlign: "center"}}>Carrito de Compras</h1>
        {cart.length > 0 ? (
            <div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px"}}>
                {cart.map((item, index) => (
                <div key={index} style={{margin: "10px", border: "1px solid gray", padding: "10px", height: "24vw", width: "20vw"}}>
                    <img src={item.thumbnail} alt="" style={{width: "10vw"}} />
                    <h3>{item.title}</h3>
                    <p style={{fontSize: "1vw"}}>Precio unitario: ${item.price}</p>
                    <p style={{fontSize: "1vw"}}>Cantidad: {item.quantity}</p>
                  <p style={{fontSize: "1vw"}}>Total: ${item.price * item.quantity}</p>
                    <Button style={{marginRight: "2vw", backgroundColor: "green", borderColor: "green"}} onClick={() => handleRemoveOne(item)}>Quitar</Button>
                    <Button style={{backgroundColor: "green",borderColor: "green"}} onClick={() => handleDeleteItem(item)}>Eliminar</Button>
                </div>
                ))}
            </div>
                <Button style={{ margin: "20px auto 0", backgroundColor: "green", display: "block", borderColor: "green"}}>
                    Total: {calculartotal()}$
                </Button>
            </div>
        ) : (
            <p>Tu carrito está vacío</p>
        )}
        </div>
    );
};

export default Cart;