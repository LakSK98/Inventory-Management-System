import React from 'react';
import SideMenu from '../components/SideMenu';
import SideProfile from '../components/SideProfile';
import Help from '../components/Help';

function HelpPage() {
    return (
        <div style={{display: "inline-block"}}>
            <SideMenu/>
            <Help/>
            <SideProfile/>
        </div>
    )
}

export default HelpPage;
