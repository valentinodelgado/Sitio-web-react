import React, { useEffect } from 'react'
import { getAllProducts } from '../../services/productServices';

export const useProducts = () => {
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        getAllProducts()
        .then((response) => {
            setProducts(response.data.products);
        })
        .catch((error) => {
            console.error(error)
        });
    },[]);
    return {products};
};
