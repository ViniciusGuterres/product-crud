import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList/ProductsList';
import CreateProduct from './CreateProduct/CreateProduct';

const BACKEND_SERVER_URL = "http://localhost:8080"

function ProductsCrud({ customerJWTToken }) {
    const [crudMode, setCrudMode] = useState('list') // options: list, create
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
    }, [crudMode]);

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

    const handleClickChangeCrudMode = () => {
        const mode = crudMode === 'list' ? 'create' : 'list';

        setCrudMode(mode);
    }

    const buildCrudModeButton = () => {
        let buttonName = crudMode === 'list' ? 'Cadastrar Produto' : 'Listar Produtos';

        return (
            <button
                onClick={handleClickChangeCrudMode}
                style={{
                    marginTop: '50px',
                    padding: '10px',
                    cursor: 'pointer',
                    backgroundColor: '#e4ff08bd',
                    borderRadius: '10px',
                    fontSize: '14px',
                    border: '1px solid #00000045',
                }}
            >
                {buttonName}
            </button>
        )
    }

    return (
        <div>
            {buildCrudModeButton()}

            {
                crudMode === 'list'
                    ?
                    <ProductsList
                        products={products}
                    />
                    :
                    <CreateProduct
                        customerJWTToken={customerJWTToken}
                    />
            }
        </div>
    )
}

export default ProductsCrud;