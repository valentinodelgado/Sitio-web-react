import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getProductById } from '../../services/productServices';
import { useProducts } from '../hooks/useProducts';
import { useProductById } from '../hooks/useProductById';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const ItemDetailsContainer = ({product}) => {
    return (
        <div>
                    <Card key={product.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                            {product.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
            
        </div>
    );
};

export default ItemDetailsContainer;