import React, { Fragment, useEffect } from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'
import { useProducts } from '../components/hooks/useProducts';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
export const Home = () => {
    useEffect(() => {
        document.title ="Incio"
    },[]);
    const {items, loading} = useProducts("products");
    return loading ? (
        <LoaderComponent />
    ) : (
        <ItemListContainerComponent products={items}/>
    );
};
