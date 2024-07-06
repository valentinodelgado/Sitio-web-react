import React, { useEffect, useState } from 'react'
import {getFirestore,doc,getDoc} from "firebase/firestore"

export const useProductById = (id) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const db = getFirestore();
        const productRef = doc(db,"products",id);

        getDoc(productRef).then((snapshot) => {
            setProduct({ id: snapshot.id, ...snapshot.data()});
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    },[id]);

    return {product,loading};
}
