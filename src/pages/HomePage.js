import React, { useState, useContext, useEffect } from 'react';
import Home from '../components/Home';
import axios from 'axios';
import ProductContext from '../store/product-context';
import SideMenu from '../components/SideMenu';
import SideProfile from '../components/SideProfile';

function HomePage() {

    // const [productData, setProductData] = useState([{}]);
    const productCtx = useContext(ProductContext);


    useEffect(() => {
        // setProductData([{}]);
        axios.get('http://localhost:8080/product/').then((response) => {
        // setProductData(response.data.data);
        // console.log(productData);
        productCtx.addData(response.data.data);
    }).catch((err) => {
        console.log(err);
    })
    }, [])


    return (
        <div style={{display: "inline-block"}}>
            <SideMenu/>
            <Home />
            <SideProfile/>
        </div>
    )
}

export default HomePage;
