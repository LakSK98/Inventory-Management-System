import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Home() {

    const [ purchases, setPurchases ] = useState(0);
    const [ sales, setSales ] = useState(0);
    const [ inventory, setInventory ] = useState(0);
    const [ value, setValue ] = useState(0);

    const submitHandle = (event)=>{
        event.preventDefault();
        axios.get('http://localhost:8080/transaction/summary/Purchase').then((response)=>{
            const test=response.data.data;
            setPurchases(test);
        }).catch((err)=>{
            console.log(err);
        })
        axios.get('http://localhost:8080/transaction/summary/Sale').then((response)=>{
            const test=response.data.data;
            setSales(test);
        }).catch((err)=>{
            console.log(err);
        })
        axios.get('http://localhost:8080/product/inventory/value').then((response)=>{
            const test1=response.data.data.amt;
            const test2=response.data.data.value;
            setInventory(test1);
            setValue(test2);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(() => {
        axios.get('http://localhost:8080/transaction/summary/Purchase').then((response)=>{
            const test=response.data.data;
            setPurchases(test);
        }).catch((err)=>{
            console.log(err);
        })
        axios.get('http://localhost:8080/transaction/summary/Sale').then((response)=>{
            const test=response.data.data;
            setSales(test);
        }).catch((err)=>{
            console.log(err);
        })
        axios.get('http://localhost:8080/product/inventory/value').then((response)=>{
            const test1=response.data.data.amt;
            const test2=response.data.data.value;
            setInventory(test1);
            setValue(test2);
        }).catch((err)=>{
            console.log(err);
        })

    }, []);


    

    return (
        <div style={{ fontFamily: "cursive", width: 800, position: "relative", top: 100 }}>
            <div style={{border:"groove",padding:20,borderColor:"#F4AF1B",borderRadius:"25px"}}>
                <form onSubmit={submitHandle}>
                    <label>Start Date :</label>
                    <input type="date" />
                    <label>End Date :</label>
                    <input type="date" />
                    <Button type="submit" style={{marginLeft:10,backgroundColor:"#F4AF1B",color:"black"}}>Submit</Button>
                </form>
            </div>

            <div style={{marginTop:30}}>
                <h1 style={{ textAlign: "left" }}>Summary</h1>
                <Card name="Purcahses" value={purchases}/>
                <Card name="Sales" value={sales}/>
                <Card name="Gross Profit" value={sales-purchases+value}/>
            </div>
            <div>
                <h1 style={{ textAlign: "left" }}>Inventory</h1>
                <Card name="Quantity" value={inventory}/>
                <Card name="Amount" value={value}/>
            </div>
        </div>
    )
}

export default Home;
