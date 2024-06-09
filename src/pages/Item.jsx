import React from 'react'
import { useProductById } from '../components/hooks/useProductById'
import { ItemDetailsContainer } from '../components/ItemDetailConteiner/ItemDetailsContainer';
import { useParams } from 'react-router-dom';

export const Item = () => {
    const {id} = useParams();
    const {product} = useProductById(id);
    return (
        <>
            <ItemDetailsContainer product={product}></ItemDetailsContainer>
        </>
    )
}

export default Item;