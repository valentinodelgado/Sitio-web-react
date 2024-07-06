import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useProducts } from '../hooks/useProducts';
import { useProductById } from '../hooks/useProductById';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../../context/CartContext';
import { Button } from 'react-bootstrap';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';


export const ItemDetailsContainer = ({product}) => {

    const {addToCart,removeFromCart} = useContext(CartContext)
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        setQuantity(quantity + 1)
        addToCart(product,1);
    }

    const handleRemove = () => {
        setQuantity(quantity - 1)
        removeFromCart(product,1);
    }

    const randomStyles={
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    };

    return (
        <div style={randomStyles}>
                    <Card key={product.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                            {product.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Precio: {product.price}$</ListGroup.Item>
                            <ListGroup.Item>Talles: {product.size}</ListGroup.Item>
                            <ListGroup.Item>Colores: {product.color}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button href="#" onClick={handleAdd} style={{marginRight: "5vw", backgroundColor: "green", borderColor: "green"}}>Añadir</Button>
                            <Button href="#" onClick={handleRemove} style={{backgroundColor: "green", borderColor: "green"}} >Quitar</Button>
                        </Card.Body>
                    </Card>
            
        </div>
    );
};

export default ItemDetailsContainer;