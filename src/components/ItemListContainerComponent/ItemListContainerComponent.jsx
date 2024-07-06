import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React, { useEffect, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; 
import { CartContext } from '../../context/CartContext';



const ItemListContainerComponent = ({products}) => {

    const randomStyles = {
        width: "100%",
        height: "160vh",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",  // Alinea el contenido también verticalmente
    };




    return (
        <div style={randomStyles}>
            {products.map((product)=>{
                return(
                    <Card key={product.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Link to={`/item/${product.id}`} style={{textDecoration: "none", color: "green", marginLeft: "4vw"}}>Ir al detalle</Link>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default ItemListContainerComponent;
