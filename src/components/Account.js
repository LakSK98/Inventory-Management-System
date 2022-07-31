import React, { useRef, useContext } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import UserContext from '../store/user-context';
import axios from 'axios';

function Account() {

    const userCtx = useContext(UserContext);

    console.log(userCtx.data);

    const inputUsernameRef = useRef();
    const inputEmailRef = useRef();
    const inputPasswordNoRef = useRef();
    const inputContactNoRef = useRef();
    const inputAddressRef = useRef();
    const inputBioRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8080/user/update/'+userCtx.data._id).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div style={{ position: "relative", width: "100%", top: 15,fontFamily: "cursive" }}>
            <h1>Account</h1>
            <br />
            <Form onSubmit={submitHandler}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Username
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="username"
                            placeholder={userCtx.data.name}
                            ref={inputUsernameRef}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group size="lg" as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        E-mail
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="email"
                            placeholder={userCtx.data.email}
                            ref={inputEmailRef}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group size="lg" as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="password"
                            placeholder="************"
                            ref={inputEmailRef}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group size="lg" as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Contact Number
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder={userCtx.data.contactNo}
                            ref={inputContactNoRef}
                            required
                        />
                    </Col>
                </Form.Group >
                <Form.Group size="lg" as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Address
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder={userCtx.data.address}
                            ref={inputAddressRef}
                            required
                        />
                    </Col>
                </Form.Group >
                <Form.Group size="lg" as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Short Bio
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="textarea"
                            placeholder={userCtx.data.bio}
                            ref={inputBioRef}
                        />
                    </Col>
                </Form.Group >
                <br />
                <div style={{ position: 'relative', top: "35%", left: "-40%" }}>
                    <Button block="true" type='submit' style={{ backgroundColor: "#F4AF1B", color: "black", marginRight: 20 }}>
                        Update
                    </Button>
                </div>
            </Form>
            <br/>
            <div style={{position:"relative",left:"-26%"}}>
                <Button style={{ backgroundColor: "#F4AF1B", color: "black", margin: 20 }}>Register new user</Button>
                <Button style={{ backgroundColor: "#F4AF1B", color: "black", margin: 20 }}>Delete Account</Button>
            </div>
        </div>
    )
}

export default Account;
