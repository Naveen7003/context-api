import axios from './axios';
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

// API call or API fetch
const Context = (props) => {
    const storedProducts = localStorage.getItem("products");
    const initialProducts = storedProducts ? JSON.parse(storedProducts) : [];

    const [products, setProducts] = useState(initialProducts);

    // Example of useEffect if you want to fetch products and save to localStorage
    useEffect(() => {
        // Assuming there's a function to fetch products from an API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/products');
                setProducts(response.data);
                localStorage.setItem("products", JSON.stringify(response.data));
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };

        // Fetch products if there's no initial products in state
        if (!storedProducts) {
            fetchProducts();
        }
    }, []);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default Context;
