import React, { useEffect, useState } from 'react'
import {Firestore, collection, getDocs, getFirestore} from "firebase/firestore"

export const useProducts = (collectionName) => {
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();

        const productsCollection = collection(db,collectionName);

        getDocs(productsCollection)
        .then((snapshot) => {
            setItems(
                snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
            );
        }).catch((error) => console.log(error))
        .finally(() => setLoading(false));
    },[]);
    return {items, loading};
};
