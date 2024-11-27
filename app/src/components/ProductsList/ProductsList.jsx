// Components
import Product from "../Product/Product";
import "./ProductsList.css";

function ProductsList({ products }) {
    const buildProducts = () => {
        const productsList = products?.map(({ name, price, id, description, inventory_amount }) => {
            return (
                <Product
                    key={`product_key_${id}`}
                    name={name}
                    price={price}
                    id={id}
                    description={description}
                    inventoryAmount={inventory_amount}
                />
            );
        });

        return <div className="products-grid">{productsList}</div>;
    };

    return (
        <div className="products-container">
            <div className="products-wrapper">{buildProducts()}</div>
        </div>
    );
}

export default ProductsList;