import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList/ProductsList';

const BACKEND_SERVER_URL = "http://localhost:8080"

function ProductsCrud({ customerJWTToken }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getOptions = {
            method: 'GET',
            // body: jsonData,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${customerJWTToken}`,
            },
        };

        // Getting the products list
        fetch(`${BACKEND_SERVER_URL}/products`, getOptions)
            .then(response => handleGettingProducts(response))
            .catch(err => console.log('Error::: ', err.message));
    }, []);

    const handleGettingProducts = response => {
        setTimeout(async () => {
            const { data, err } = await response.json();

            // Should show msg err
            if (err) {
                console.log('Error:: ', err);
                return
            }

            // Setting data states and vars
            if (data) setProducts(data.data);
        }, 100);
    };

    return (
        <ProductsList
            products={products}
        />
    )
}

export default ProductsCrud;