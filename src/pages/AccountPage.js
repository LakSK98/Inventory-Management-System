import React, { useContext } from 'react';
import Account from '../components/Account';
import SideMenu from '../components/SideMenu';
import SideProfile from '../components/SideProfile';
import UserContext from '../store/user-context';

function AccountPage() {

    const userCtx = useContext(UserContext);

    return (
        <div style={{display: "inline-block",width:800}}>
            <SideMenu/>
            <Account/>
            <SideProfile/>
        </div>
        
    )
}

export default AccountPage;
