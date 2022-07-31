import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import SignUp from '../components/SignUp';
import UserContext from '../store/user-context';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

function SignUpPage() {

    const navigate = useNavigate();
    const userCtx = useContext(UserContext);
    const [errMsg, setErrMsg] = useState("");

    const submitHandler = async (data) => {
        axios.post('http://localhost:8080/user/signup', data).then((response) => {
            if (response.data.state) {
                userCtx.addData(response.data.data);
                navigate('/home');
            }
            else {
                setErrMsg(response.data.message);
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <div>
            {errMsg && <Alert variant="danger">
                {errMsg}
            </Alert>}
            <SignUp submitFormHandler={submitHandler} />
        </div>
    )
}

export default SignUpPage;
