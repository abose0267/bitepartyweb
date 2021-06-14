import React from 'react'
import './NavbarComp.css';
import Navbar from 'react-bootstrap/Navbar'
import logoText from '../assets/logoText.png';
import logo from '../assets/logo.png'


const NavbarComp = () => {
    return(
        <Navbar bg="light" variant="white">
            <Navbar.Brand href='/' style={{fontFamily: "Inter", fontWeight: 600}}>
                <img src={logoText} style={{height:50}} />
            </Navbar.Brand>
            <div className="a">Home</div>
            <div className="a">Features</div>
            <div className="a">Preview</div>
            <div className="a">Home</div>
        </Navbar>
    );
}


export default NavbarComp;