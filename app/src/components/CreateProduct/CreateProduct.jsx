import { useState } from "react";
import settings from "../settings.js";
import "./CreateProduct.css"; // Import the CSS file

const BACKEND_SERVER_URL = settings.backendEndUrl;

function CreateProduct() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        inventory_amount: "",
    });

    const [message, setMessage] = useState("");

    const localStorageCustomerToken = localStorage.getItem("customerToken");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { name, price, description, inventory_amount } = formData;
        if (!name || !price || !description) {
            setMessage("Please fill in all required fields.");
            return;
        }

        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorageCustomerToken}`,
            },
            body: JSON.stringify(formData),
        };

        try {
            const response = await fetch(
                `${BACKEND_SERVER_URL}/products`,
                postOptions
            );

            const result = await response.json();

            if (response.ok) {
                setMessage("Product created successfully!");
                setFormData({
                    name: "",
                    price: "",
                    description: "",
                    inventory_amount: "",
                });
            } else {
                setMessage(`Error: ${result.err}`);
            }
        } catch (error) {
            setMessage(`Network Error: ${error.message}`);
        }
    };

    return (
        <div className="create-product-container">
            <h1 className="form-title">Criar Novo Produto</h1>
            {message && <p className="form-message">{message}</p>}
            <form onSubmit={handleSubmit} className="product-form">
                <div className="form-group">
                    <label htmlFor="name">
                        Nome <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">
                        Preço (R$) <span className="required">*</span>
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        step="0.01"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">
                        Descrição <span className="required">*</span>
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="3"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="inventory_amount">Quantidade</label>
                    <input
                        type="number"
                        id="inventory_amount"
                        name="inventory_amount"
                        value={formData.inventory_amount}
                        onChange={handleInputChange}
                        step="1"
                    />
                </div>

                <button type="submit" className="submit-button">
                    Criar Produto
                </button>
            </form>
        </div>
    );
}

export default CreateProduct;