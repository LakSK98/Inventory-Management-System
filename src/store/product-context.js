import { createContext, useState } from "react";

const ProductContext = createContext({
    data:[],
    addData:(product)=>{}
});

export const ProductContextProvider = (props)=>{

    const [ productData, setProductData ] = useState([]);

    const addProductData = (product)=>{
        setProductData(product);
    }

    const context = {
        data:productData,
        addData:addProductData
    };

    return <ProductContext.Provider value={context}>
        {props.children}
    </ProductContext.Provider>
}

export default ProductContext;