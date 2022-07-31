import React from 'react';
import About from '../components/About';
import SideMenu from '../components/SideMenu';
import SideProfile from '../components/SideProfile';

function AboutPage() {
    return (
        <div style={{display: "inline-block"}}>
            <SideMenu/>
            <About/>
            <SideProfile/>
        </div>
    )
}

export default AboutPage;
