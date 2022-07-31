import React, { useState } from 'react';
import Product from '../components/Product';
import axios from 'axios';
import SideMenu from '../components/SideMenu';
import SideProfile from '../components/SideProfile';
import { Alert } from 'react-bootstrap';

function ProductsMasterPage() {

    const [ errMsg, setErrMsg ] = useState("");
    const [ completeMsg, setCompleteMsg ] = useState("");
    const [ errState , setErrState ] = useState(false);
    const [ completeState , setCompleteState ] = useState(false);

    const submitHandler = (data)=>{
        axios.post('http://localhost:8080/product/add',data).then((response)=>{
            if(response.data.state){
                setCompleteMsg(response.data.message);
                setCompleteState(true);
                setErrState(false);
            }else{
                setErrMsg(response.data.message);
                setErrState(true);
                setCompleteState(false);
            }
        }).catch((err)=>{
            console.log(err)
        });
    }

    return (
        <div>
            <div style={{position:"fixed",top:"25%",left:"57.5%"}}>{errState&&<Alert variant='danger'>{errMsg}</Alert>}
            {completeState&&<Alert variant='success'>{completeMsg}</Alert>}</div>
            <SideMenu/>
            <Product submitFormHandler={submitHandler} />
            <SideProfile/>
        </div>
    )
}

export default ProductsMasterPage;
