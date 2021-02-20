import React from 'react'
import './NavbarComp.css';
import Navbar from 'react-bootstrap/Navbar'
import logoText from '../assets/logoText.PNG';



const NavbarComp = () => {
    return(
        <Navbar bg="dark" variant="dark" className="mc-center">
            <Navbar.Brand href='/' style={{fontFamily: "Inter", fontWeight: 600, marginLeft: "5%"}}>
                <img src={logoText} style={{height:75}}/>
            </Navbar.Brand>
        </Navbar>
    );
}


export default NavbarComp;