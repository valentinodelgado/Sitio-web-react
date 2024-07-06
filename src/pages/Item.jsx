import React from 'react'
import { useProductById } from '../components/hooks/useProductById'
import { ItemDetailsContainer } from '../components/ItemDetailConteiner/ItemDetailsContainer';
import { useParams } from 'react-router-dom';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

export const Item = () => {
    const {id} = useParams();
    const {product, loading} = useProductById(id);
    return loading ? (
        <LoaderComponent />
    ) : (
        <ItemDetailsContainer product={product}></ItemDetailsContainer>

    )
}

export default Item;