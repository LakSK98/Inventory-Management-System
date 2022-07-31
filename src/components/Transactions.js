import React, { useRef, useContext, useState, useEffect } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import ProductContext from '../store/product-context';
import axios from 'axios'
import TransactionContext from '../store/transaction-context';
import { useNavigate } from 'react-router-dom';

function Transactions(props) {

    // const [productData, setProductData] = useState([]);
    const productCtx = useContext(ProductContext);
    const productData = productCtx.data;
    const transactionCtx=useContext(TransactionContext);
    const transactions = transactionCtx.data;
    const navigate = useNavigate();
    // setProductData(productCtx.data);
    const [errMsg, setErrMsg] = useState("");


    const products = productData.map((product) => {
        return <option value={product.productName}>{product.productName}</option>
    });

    const inputProductRef = useRef();
    const inputQtyRef = useRef();
    const inputTypeRef = useRef();
    const inputPriceRef = useRef();

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
        var data = {
            productName: inputProductRef.current.value,
            qty: inputQtyRef.current.value,
            type: inputTypeRef.current.value,
            price: inputPriceRef.current.value
        }
        props.submitFormHandler(data);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.get('http://localhost:8080/transaction/').then((response)=>{
            transactionCtx.addData(response.data.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const resetHandler = (event)=>{
    }

    const transactionsTable = transactions.map((transaction)=>{
        return <tr>
            <td>{transaction._id}</td>
            <td>{transaction.productName}</td>
            <td>{transaction.qty}</td>
            <td>{transaction.type}</td>
            <td>{transaction.price}</td>
        </tr>
    })

    return (
        <div style={{ position: "fixed", left: "25%", top: 15, height:"auto" }}>
            <div style={{ fontFamily: "cursive", width: 800 }}>
                <h1>Transactions</h1>
                <div style={{ position: "relative", left: 0, width: 400, top: 50 }}>
                    <h4>Add/Update</h4>
                    <Form onSubmit={submitHandler} onReset={resetHandler}>
                        <Form.Group as={Row} className="mb-3" controlId="productName">
                            <Form.Label column sm="2">
                                Product
                            </Form.Label>
                            <Col sm="10">
                                <Form.Select ref={inputProductRef}>
                                    <option>Select product</option>
                                    {products}
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group size="lg" as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Quantity
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    ref={inputQtyRef}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group size="lg" as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Type
                            </Form.Label>
                            <Col>
                                <Form.Select required ref={inputTypeRef}>
                                    <option value="">Select Transaction Type</option>
                                    <option value="Purchase">Purchase</option>
                                    <option value="Sale">Sale</option>
                                </Form.Select>
                            </Col>
                        </Form.Group >
                        <Form.Group size="lg" as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Price
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    ref={inputPriceRef}
                                />
                            </Col>
                        </Form.Group >
                        <br />
                        <div style={{ display: "inline-block", position: 'fixed', top: "35%", right: "30%" }}>
                            <Button block="true" type='submit' style={{ backgroundColor: "#F4AF1B", color: "black", marginRight: 20 }}>
                                Save
                            </Button>
                            <Button block="true" type="reset" style={{ backgroundColor: "#F4AF1B", color: "black" }}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </div>
                <div style={{ position: "fixed", top: "55%",width:"55%" }}>
                    <h2>Transaction Summary</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Start Date :</label>
                        <input type="date" />
                        <label>End Date :</label>
                        <input type="date" />
                        <Button type="submit" style={{ marginLeft: 10, backgroundColor: "#F4AF1B", color: "black" }}>Submit</Button>
                    </form>
                    <br/>
                    <div style={{overflow:"scroll",height:200}}>
                    <Table responsive striped bordered hover variant='dark'>
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Type</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionsTable}
                        </tbody>
                    </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions;
