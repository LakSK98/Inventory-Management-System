import React from 'react';
import image1 from '../assets/team.jpg';

function About() {

    const styles = {
        textAlign: "left",
    }

    return (
        <div style={{ position: "fixed", width: "100%", left: "25%", top: 15, width: "50%", fontFamily: "cursive" }}>
            <h1 style={styles}>About us</h1>
            <div style={{ border: "groove", borderColor: "#F4AF1B", borderRadius: "25px", padding: "10px" }}>
                <h3 style={styles}>The Team</h3>
                <img src={image1} width={500} heigth={250} />
                <h3>Team members</h3>
            <div style={{display:"inline"}}>
                <div style={{position:"relative",top:"50%",left:"25%",width:"50%"}}>
                    <p>Lakshitha  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Kavishka</p>
                    <p>Pasindu  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Hansini</p>
                    <p>Harsha  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Piumi</p>
                    <p>Chandima  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Hirunika</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;
