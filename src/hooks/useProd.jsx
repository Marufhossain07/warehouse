import { useContext } from 'react';
import { ProductContext } from '../Context Provider/ProductProvider';

const useProd = () => {
    const prodContext = useContext(ProductContext)
    return prodContext
}

export default useProd;