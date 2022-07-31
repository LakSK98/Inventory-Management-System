import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Login from '../components/Login';
import UserContext from '../store/user-context';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import SideMenu from '../components/SideMenu';

function LoginPage() {

    const navigate = useNavigate();
    const userCtx = useContext(UserContext);
    const [errMsg, setErrMsg] = useState("");

    const submitHandler = (data) => {
        axios.post('http://localhost:8080/user/login', data).then((response) => {
            if (response.data.state) {
                userCtx.addData(response.data.data);
                navigate('/home');
            } else {
                setErrMsg(response.data.message);
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            {errMsg && <Alert variant="danger">
                {errMsg}
            </Alert>}
            <Login submitFormHandler={submitHandler} />
        </div>
    )
}

export default LoginPage;
