import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React from 'react'

const ItemListContainerComponent = (props) => {
    const randomStyles = {
        color: "red",
        fontSize: "1.5rem",
        width: "100vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center"
    }
return (
    <div style={randomStyles}>{props.greeting}</div>
)
}

export default ItemListContainerComponent