import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidgetComponent = () => {
return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} style={{fontSize: "1.5rem"}}/>
        <span>0</span>
    </div>
)
}

export default CartWidgetComponent