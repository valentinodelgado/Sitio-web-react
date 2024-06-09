import React, { Fragment, useEffect } from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'
import { useProducts } from '../components/hooks/useProducts';
export const Home = () => {
    useEffect(() => {
        document.title ="Incio"
    },[]);
    const {products} = useProducts();
    return (
        <>
            <ItemListContainerComponent products={products}/>
        </>
    )
}
