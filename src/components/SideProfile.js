import React, { useContext } from 'react';
import UserContext from '../store/user-context';
import image from '../assets/avatar.png';
import { Button } from 'react-bootstrap';

function SideProfile() {

    const userCtx = useContext(UserContext);
    const userData = userCtx.data;

    return (
        <div className='Side-Profile-Container'>
            <div className='Side-Profile'>
                <h5 style={{textAlign:"center"}}>{userData.name}</h5>
                <img src={image} alt="profile picture" width="200" heigth="150" />
                <br />
                <Button size='sm' style={{backgroundColor:"#F4AF1B",color:"black"}}>Log out</Button>
            </div>
        </div>
    )
}

export default SideProfile;
