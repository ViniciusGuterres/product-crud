// Components
import Product from "./Product";

function ProductsList({  products }) {
    // Functions

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

        return (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {productsList}
            </div>
        );
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {buildProducts()}
            </div>
        </div>

    );
}

export default ProductsList;