import React from 'react'
import { useParams } from 'react-router-dom';
import useProductsByCategory from '../components/hooks/useProductsByCategory';
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent';

export const Category = () => {
    const {id} = useParams()
    const {products} = useProductsByCategory(id);
    return (
        <>
            <ItemListContainerComponent products={products}/>
        </>
    )
}

