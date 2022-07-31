import React, { useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(props) {

    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        var data = {
            email: inputEmailRef.current.value,
            password: inputPasswordRef.current.value
        }
        props.submitFormHandler(data);
    }

    return (
        <div style={{ position: "fixed", width: "60%", left: "20%",top:"5%",fontFamily:"cursive" }}>
            <h1 style={{ textAlign: "center" }}>INVENTORY MANAGEMENT SYSTEM</h1>
            <div style={{ position: "fixed", width: "36%", left: "32%",top:"25%", backgroundColor:"#F2BC94",padding:"20px" }}>
                <h2 style={{ textAlign: "center", color:"#00154F"}}>LOGIN</h2>
                <br/>
                <Form onSubmit={submitHandler}>
                    <Form.Group as={Row} className="mb-3" size="lg" controlId="email">
                        <Col sm="8" style={{marginLeft:"15%"}}>
                            <Form.Control
                                autoFocus
                                type="email"
                                placeholder="Enter email here"
                                ref={inputEmailRef}
                                required
                            />
                        </Col>

                    </Form.Group >
                    <Form.Group as={Row} className="mb-3" size="lg">
                    
                        <Col sm="8" style={{marginLeft:"15%"}}>
                            <Form.Control
                                type="password"
                                placeholder="Enter password here"
                                ref={inputPasswordRef}
                                required
                            />
                        </Col>

                    </Form.Group>
                
                    <Form.Group className="d-grid gap-2">
                        <Button block="true" type='submit' style={{backgroundColor:"#00154F",color:"#F4AF1B"}}>
                            Continue
                        </Button>
                        <br/>
                        <Link to='/signup' style={{color:"#00154F",textDecoration:"none"}}>Forgot Password</Link>
                        <Link to='/signup' style={{color:"#00154F",textDecoration:"none"}}>Not registered yet ?</Link>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default Login;
