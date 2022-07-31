import React, { useState } from 'react';
import Transactions from '../components/Transactions';
import axios from 'axios';
import SideMenu from '../components/SideMenu';
import SideProfile from '../components/SideProfile';
import { TransactionContextProvider } from '../store/transaction-context';
import { Alert } from 'react-bootstrap';

function TransactionsPage() {

    const [ errMsg, setErrMsg ] = useState("");
    const [ errState, setErrState ] = useState(false);
    const [ completeMsg, setCompleteMsg ] = useState("");
    const [ completeState, setCompleteState ] = useState(false);

    const submitHandler = (data) => {
        axios.post('http://localhost:8080/transaction/add', data).then((response) => {
            if(response.data.state){
                setCompleteState(true);
                setErrState(false);
                setCompleteMsg(response.data.message);
            }else{
                setErrState(true);
                setCompleteState(false);
                setErrMsg(response.data.message);
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <div style={{ display: "inline-block" }}>
            <div style={{position:"fixed",top:"25%",left:"56.5%"}}>
                {completeState&&<Alert variant='success'>{completeMsg}</Alert>}
            {errState&&<Alert variant='danger'>{errMsg}</Alert>}
            </div>
            <SideMenu />
            <TransactionContextProvider>
                <Transactions submitFormHandler={submitHandler} />
            </TransactionContextProvider>
            <SideProfile />
        </div>
    )
}

export default TransactionsPage;
