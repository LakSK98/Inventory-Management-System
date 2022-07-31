import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

function Settings() {
    return (
        <div style={{ position: "relative", width: "100%", top: 15, fontFamily: "cursive" }}>
            <h1>Settings</h1>
            <br />
            <div style={{ position: "fixed", left: "27%" }}>
                <Form.Check type="checkbox" style={{ marginBottom: 8 }} />
                <Form.Check type="checkbox" style={{ marginBottom: 8 }} />
                <Form.Check type="checkbox" style={{ marginBottom: 8 }} />
                <Form.Check type="checkbox" style={{ marginBottom: 8 }} />
                <Form.Check type="checkbox" style={{ marginBottom: 8 }} />
            </div>
            <div style={{ position: "fixed", left: "30%" }}>
                <h5>Desktop Notifications</h5>
                <h5>SMS Alerts</h5>
                <h5>Sounds</h5>
                <h5>Devoloper Mode</h5>
                <h5>Simple Mode</h5>
            </div>
            <div style={{position:"fixed",top:"40%",left:"25%"}}>
                <div style={{position:"relative",left:12}}>
                <label>Language :</label><select><option>Select Language</option></select>
                </div><br/>
                <div style={{position:"relative",left:-10}}>
                <label>Theme :</label><select><option>Select Theme</option></select>
                </div>
            </div>

            <div style={{ position: "fixed", left: "25%", top: "50%" }}>
                <Button style={{ backgroundColor: "#F4AF1B", color: "black", margin: 20 }}>Check for updates</Button>
            </div>
        </div>
    )
}

export default Settings;
