import { React, useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignUp(props) {
    const inputUsernameRef = useRef();
    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();
    const inputConfirmPasswordRef = useRef();
    const inputContactNoRef = useRef();
    const inputAddressRef = useRef();
    const inputBioRef = useRef();

    const submitHandler = (event)=>{
        event.preventDefault();
        var data = {
            name:inputUsernameRef.current.value,
            email:inputEmailRef.current.value,
            password:inputPasswordRef.current.value,
            contactNo:inputContactNoRef.current.value,
            address:inputAddressRef.current.value,
            bio:inputBioRef.current.value
        }
        if(data.password!=inputConfirmPasswordRef.current.value){
           
        }else{
        props.submitFormHandler(data);
        }
    }

    return (
        <div style={{ position: "fixed", width: "60%", left: "20%",top:"5%",fontFamily:"cursive" }}>
            <h1 style={{ textAlign: "center" }}>INVENTORY MANAGEMENT SYSTEM</h1>
            <div style={{position:"fixed",width:"40%",left:"30%",top:"20%"}}>
            <Form onSubmit={submitHandler}>
            <Form.Group  as={Row} className="mb-3" size="lg" controlId="username">
                    <Form.Label column sm="2">
                        Username
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control
                        autoFocus
                        type="username"
                        placeholder="Enter username here"
                        ref={inputUsernameRef}
                        required
                    />
                    </Col>
                    
                    </Form.Group>
                <Form.Group  as={Row} className="mb-3" size="lg" controlId="email">
                    <Form.Label column sm="2">
                        E-mail
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control
                        type="email"
                        placeholder="Enter email here"
                        ref={inputEmailRef}
                        required
                    />
                    </Col>
                    
                </Form.Group>
                <Form.Group  as={Row} className="mb-3" size="lg" controlId="password">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control
                        type="password"
                        placeholder="Enter password here"
                        ref={inputPasswordRef}
                        required
                    />
                    </Col>
                </Form.Group>
                <Form.Group  as={Row} className="mb-3" size="lg" controlId="confirmpassword">
                    <Form.Label column sm="2">
                        Confirm Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control
                        type="password"
                        placeholder="Enter confirm password here"
                        ref={inputConfirmPasswordRef}
                        required
                    />
                    </Col>
                </Form.Group>
                <Form.Group  as={Row} className="mb-3" size="lg" controlId="contactNo">
                    <Form.Label column sm="2">
                        Contact Number
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control
                        type="text"
                        placeholder="Enter contact number here"
                        ref={inputContactNoRef}
                        required
                    />
                    </Col>
                </Form.Group>
                <Form.Group  as={Row} className="mb-3" size="lg" controlId="address">
                    <Form.Label column sm="2">
                        Address
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control
                        type="text"
                        placeholder="Enter address here"
                        ref={inputAddressRef}
                        required
                    />
                    </Col>
                </Form.Group>
                <Form.Group  as={Row} className="mb-3" size="lg" controlId="bio">
                    <Form.Label column sm="2">
                        Short Bio
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control
                        type="textarea"
                        placeholder="Enter short bio here"
                        ref={inputBioRef}
                    />
                    </Col>
                </Form.Group>
                <br/>
                <Form.Group className="d-grid gap-2">
                <Button block="true" type='submit' style={{backgroundColor:"#F2BC94",color:"#00154F"}} >
                    Register
                </Button>
                <Link to='/' style={{color:"#F4AF1B",textDecoration:"none"}}>Already have an account ? Log in</Link>
                </Form.Group>
            </Form>
            </div>
        </div>
    )
}

export default SignUp;
