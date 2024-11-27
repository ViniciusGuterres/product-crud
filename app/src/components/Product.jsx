function Product({ name, price, id }) {
    // Vars
    const priceFormattedToDecimals = price.toFixed(2)?.toString() || '';
    const priceFormatted = price ? `R$: ${priceFormattedToDecimals?.replace('.', ',')}` : '';

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={`/productDetails/${id}`}>
                {/* Product img */}
                <img
                    className="p-8 rounded-t-lg"
                    // src={'../images/product.jpg'}
                    alt='ecommerce product'
                />
            </a>

            <div className="px-5 pb-5">
                {/* Name */}
                <span>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                </span>

                <div className="flex items-center justify-between">
                    {/* Price */}
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {priceFormatted}
                    </span>
                </div>
            </div>
        </div >
    );
}

export default Product;