import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';

function Product(props) {

    const inputProductRef = useRef();
    const inputPurchasePriceRef = useRef();
    const inputSellingPriceRef = useRef();
    const inputProductSearchRef = useRef();

    const [searched, setSearched] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        var data = {
            productName: inputProductRef.current.value,
            purchasePrice: inputPurchasePriceRef.current.value,
            sellingPrice: inputSellingPriceRef.current.value
        }
        props.submitFormHandler(data);
    }

    const submitHandlerSearch = (event) => {
        event.preventDefault();
        axios.get('http://localhost:8080/transaction/' + inputProductSearchRef.current.value).then((response) => {
            console.log(response);
            const test = response.data.data
            setSearched(test);
        }).catch((err) => {
            console.log(err);
        })
    }

    const transactions = searched.map((transaction) => {
        return <tr>
            <th>{transaction._id}</th>
            <th>{transaction.productName}</th>
            <th>{transaction.qty}</th>
            <th>{transaction.type}</th>
            <th>{transaction.price}</th>
        </tr>
    })

    return (
        <div style={{ position: "fixed", left: "25%", top: 15 }}>
            <div style={{ fontFamily: "cursive", width: 800 }}>
                <h1>Product Master</h1>
                <div style={{ position: "relative", width: 400, top: 50 }}>
                    <h4>Add/Update</h4>
                    <Form onSubmit={submitHandler}>
                        <Form.Group as={Row} className="mb-3" controlId="productName">
                            <Form.Label column sm="2">
                                Product
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    autoFocus
                                    type="text"
                                    ref={inputProductRef}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group size="lg" as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Purchase Price
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    ref={inputPurchasePriceRef}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group size="lg" as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Selling Price
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    ref={inputSellingPriceRef}
                                />
                            </Col>
                        </Form.Group>
                        <br />
                        <div style={{ display: "inline-block", position: 'fixed', top: "35%", right: "30%" }}>
                            <Button block="true" type='submit' style={{ backgroundColor: "#F4AF1B", color: "black", marginRight: 20 }}>
                                Save
                            </Button>
                            <Button block="true" style={{ backgroundColor: "#F4AF1B", color: "black" }}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </div>
                <div style={{ position: "fixed", top: "55%", width: "55%" }}>
                    <h2>Product Log</h2>
                    <form onSubmit={submitHandlerSearch}>
                        <label>Product Name :</label>
                        <input type="text" ref={inputProductSearchRef} />
                        <Button type="submit" style={{ marginLeft: 10, backgroundColor: "#F4AF1B", color: "black" }} >Submit</Button>
                        <div style={{ display: "inline-block", position: 'relative', top: "35%", right: "-10%" }}>
                            <Button block="true" type='submit' style={{ backgroundColor: "#F4AF1B", color: "black", marginRight: 20 }}>
                                Update
                            </Button>
                            <Button block="true" style={{ backgroundColor: "#F4AF1B", color: "black" }}>
                                Delete
                            </Button>
                        </div>
                    </form>
                    <br />
                    <div style={{ overflow: "scroll", maxHeight: 180 }}>
                        <Table striped bordered hover variant='dark'>
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
                                {transactions}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
