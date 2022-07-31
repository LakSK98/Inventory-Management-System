import React from 'react';

function Card(props) {

    const cardStyle = {
        padding:"20px",
        width: "auto",
        height: "auto",
        backgroundColor: "#F4AF1B",
        color: "black",
        fontWeight: "bold",
        fontSize: 40,
        textAlign: "center",
        borderRadius:"25px"
    }

    return (
        <div style={{ display: "inline-block", margin: "3%" }}>
            <div style={cardStyle}><h1>{props.value}</h1></div>
            <div><h3>{props.name}</h3></div>
        </div>
        
    )
}

export default Card;
