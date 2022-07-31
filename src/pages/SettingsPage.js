import React from 'react';
import SideMenu from '../components/SideMenu';
import SideProfile from '../components/SideProfile';
import Settings from '../components/Settings';

function SettingsPage() {
    return (
        <div style={{display: "inline-block",width:800}}>
            <SideMenu/>
            <Settings/>
            <SideProfile/>
        </div>
    )
}

export default SettingsPage;
