import React from 'react';
import SideMenu from '../components/SideMenu';
import SideProfile from '../components/SideProfile';
import Stocks from '../components/Stocks';

function AvailableStockPage() {
    return (
        <div style={{display: "inline-block"}}>
            <SideMenu/>
            <Stocks/>
            <SideProfile/>
        </div>
    )
}

export default AvailableStockPage;
