import "./Product.css";
import productImage from "../../assets/box.png";

function Product({ name, price, id }) {
    const priceFormattedToDecimals = price.toFixed(2)?.toString() || '';
    const priceFormatted = price ? `R$: ${priceFormattedToDecimals?.replace('.', ',')}` : '';

    return (
        <div className="product-card">
            <a href={`/productDetails/${id}`}>
                {/* Product img */}
                <img
                    className="product-image"
                    src={productImage}
                    alt="ecommerce product"
                />
            </a>

            <div className="product-details">
                {/* Name */}
                <span>
                    <h5 className="product-name">{name}</h5>
                </span>

                <div className="product-footer">
                    {/* Price */}
                    <span className="product-price">{priceFormatted}</span>
                </div>
            </div>
        </div>
    );
}

export default Product;