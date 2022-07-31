import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SideMenu() {

    const styleButton = {
        marginBottom: 5,
        width: 250,
        height: 75,
        backgroundColor: "#F2BC94",
        color:"black"
    }
    const activeButton = {
        marginBottom: 5,
        width: 250,
        height: 75,
        backgroundColor: "#F4AF1B",
        color:"black"
    }

    const navigate = useNavigate();
    const handleClickHome = () => {
        navigate('/home');
    }
    const handleClickTransaction = () => {
        navigate('/transactions');
    }
    const handleClickStocks = () => {
        navigate('/stocks');
    }
    const handleClickProducts = () => {
        navigate('/products');
    }
    const handleClickAccount = () => {
        navigate('/account');
    }
    const handleClickSettings = () => {
        navigate('/settings');
    }
    const handleClickHelp = () => {
        navigate('/help');
    }
    const handleClickAbout = () => {
        navigate('/about');
    }

    return (
        <div className='Side-Bar-Container'>
            <div className="Side-Bar">
                <ButtonGroup vertical size="lg">
                    <button className='Menu-Btn active' onClick={handleClickHome}>Home</button>
                    <button className='Menu-Btn' onClick={handleClickTransaction}>Transactions</button>
                    <button className='Menu-Btn' onClick={handleClickStocks}>Available Stock</button>
                    <button className='Menu-Btn' onClick={handleClickProducts}>Product Master</button>
                    <button className='Menu-Btn' onClick={handleClickAccount}>Account</button>
                    <button className='Menu-Btn' onClick={handleClickSettings}>Settings</button>
                    <button className='Menu-Btn' onClick={handleClickHelp}>Help</button>
                    <button className='Menu-Btn' onClick={handleClickAbout}>About</button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default SideMenu;
