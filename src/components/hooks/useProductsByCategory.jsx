import React, { useEffect, useState } from 'react'
import { getProductsByCategory } from '../../services/productServices'

export const useProductsByCategory = (category) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsByCategory(category)
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((error) => {
                console.error(error)
            });
    },[category]);
    return {products};
}

export default useProductsByCategory