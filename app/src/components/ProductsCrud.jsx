import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';

const BACKEND_SERVER_URL = "http://localhost:8080"

function ProductsCrud({ customerJWTToken }) {
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

    function handleGettingProducts(res) {
        console.log('res');
    }

    return (
        <ProductsList
            
        />
    )
}

export default ProductsCrud;