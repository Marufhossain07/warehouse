/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

 
export const ProductContext = createContext()


const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productInfo,setProductInfo] = useState({})
    const [step,setStep] = useState(0)

    const prodInfo = {
        products,
        setProducts,
        setStep,
        step,
        setProductInfo,
        productInfo
    }

    return (
        <ProductContext.Provider value={prodInfo}>
            {children}
        </ProductContext.Provider>

    );
};

export default ProductProvider;