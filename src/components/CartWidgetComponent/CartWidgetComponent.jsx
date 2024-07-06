import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidgetComponent = () => {

    const {cart} = useContext(CartContext);

    const totalItems = cart.reduce((total,item) => total + item.quantity, 0)

return (
    <div>
        <Link to="/Cart" style={{textDecoration: "none", color: "black"}}>
        <FontAwesomeIcon icon={faCartShopping} style={{fontSize: "1.5rem"}}/>
        <span>{totalItems}</span>
        </Link>
    </div>
)
}

export default CartWidgetComponent