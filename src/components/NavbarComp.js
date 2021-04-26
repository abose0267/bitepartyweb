import React from 'react'
import './NavbarComp.css';
import Navbar from 'react-bootstrap/Navbar'
import logoText from '../assets/logoText.PNG';
import logo from '../assets/logo.png'


const NavbarComp = () => {
    return(
        <Navbar bg="dark" variant="dark" className="mc-auto">
            <Navbar.Brand href='/' style={{fontFamily: "Inter", fontWeight: 600}}>
                <img src={logo} style={{height:50}} />
                Bite<span class="vermillion">Party</span>
            </Navbar.Brand>
        </Navbar>
    );
}


export default NavbarComp;