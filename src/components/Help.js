import React from 'react';
import { Button } from 'react-bootstrap';

function Help() {
    return (
        <div style={{ position: "fixed",width:"50%", left: "25%", fontFamily: "cursive", top: "5%" }}>
            <h1>Help</h1>
            <div>
                <div style={{border:"groove",width:"100%",marginBottom:"2%",padding:"3%",borderRadius:"25px",borderColor:"#F4AF1B"}}>
                    <h2>Ask from Community</h2>
                    <input style={{width:"100%",height:"150px"}}/>
                    <div style={{position:"relative",left:"-40%"}}><Button style={{backgroundColor:"#F4AF1B",color:"black"}}>Submit</Button></div>
                </div>
                <div style={{border:"groove",width:"100%",padding:"3%",borderRadius:"25px",borderColor:"#F4AF1B"}}>
                    <h2>Ask from Devolopers</h2>
                    <input style={{width:"100%",height:"150px"}}/>
                    <div style={{position:"relative",left:"-40%"}}><Button style={{backgroundColor:"#F4AF1B",color:"black"}}>Submit</Button></div>
                </div>
            </div>
        </div>
    )
}

export default Help;
