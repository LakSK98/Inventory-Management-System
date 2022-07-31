import React, { useRef, useContext, useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import ProductContext from '../store/product-context';
import axios from 'axios';

function Stocks() {

    const productCtx = useContext(ProductContext);
    const inputProductRef = useRef();
    let [searched, setSearched] = useState(<div></div>);
    const [searchedFlag, setSearchedFlag] = useState(true);

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

    const submitHandler = (event) => {
        event.preventDefault();
        axios.get('http://localhost:8080/product/' + inputProductRef.current.value).then((response) => {
            setSearched(<tr>
                <td>{response.data.data._id}</td>
                <td>{response.data.data.productName}</td>
                <td>{response.data.data.qty}</td>
            </tr>)
            setSearchedFlag(false);
            if (inputProductRef.current.value == '')
                setSearchedFlag(true);
        }).catch((err) => {
            console.log(err);
        })
    }

    const products = productCtx.data.map((product) => {
        return <tr>
            <td>{product._id}</td>
            <td>{product.productName}</td>
            <td>{product.qty}</td>
        </tr>
    })

    return (
        <div style={{ position: "fixed", left: "25%", top: 15, fontFamily: "cursive" }}>
            <div >
                <h1>Available Stocks</h1>
                <br />
                <form onSubmit={submitHandler}>
                    <input placeholder='Enter product name' type="text" ref={inputProductRef} />
                    <label>Start Date :</label>
                    <input type="date" />
                    <label>End Date :</label>
                    <input type="date" />
                    <Button type="submit" style={{ marginLeft: 10, backgroundColor: "#F4AF1B", color: "black" }}>Submit</Button>
                </form>
            </div>
            <br />
            <div style={{ overflow: "scroll", maxHeight: "500px" }}>
                <Table striped bordered hover variant='dark'>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Stock Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchedFlag && products}
                        {!searchedFlag && searched}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Stocks;
