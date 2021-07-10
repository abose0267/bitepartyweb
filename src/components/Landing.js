import React, {useRef} from 'react'
import './Landing.css';
import {gsap} from "gsap";
import texttoshow from './texttoshow.js'
import phones from "../assets/phones.png"
import homescreen from "../assets/homescreen.PNG"
import invitescreen from "../assets/invitescreen.PNG"
import filterscreen from "../assets/filterscreen.PNG"
import notificationscreen from "../assets/notificationscreen.PNG"
import './NavbarComp.css';
import Navbar from 'react-bootstrap/Navbar'
import logoText from '../assets/logoText.png';

import appstore from "../assets/appstore.svg"

const Landing = () => {
    function FadeInSection(props) {
        const [isVisible, setVisible] = React.useState(true);
        const domRef = React.useRef();
        React.useEffect(() => {
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
          });
          observer.observe(domRef.current);
          return () => observer.unobserve(domRef.current);
        }, []);
        return (
          <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
          >
            {props.children}
          </div>
        );
    }
    
    return(
        <>
        {/* Navbar buttons and characteristics */}
        <Navbar bg="light" variant="white">
            <Navbar.Brand href='/' style={{fontFamily: "Inter", fontWeight: 600}}>
                <img src={logoText} style={{height:50}} />
            </Navbar.Brand>
            <a href="#meetus">
                <div className="outside">Meet us!</div>
            </a>
            {/* <a href="#homepage">
                <div className="b">Home</div>
            </a> */}
            <a href="#featurespage">
                <div className="b">Features</div>
            </a>
            <a href="#previewpage">
                <div className="b">Preview</div>
            </a>
        </Navbar>
        {/* NAVBAR END */}

        {/* first  */}
            <div className="landingcontainer3">
            <div id = "home">
                <div className="herotext">
                    <h4>Bringing people together,</h4>
                    <h1>one bite at a time.</h1>
                </div>
            </div>
                {/* <a href="https://apps.apple.com/us/app/biteparty/id1551432967?itsct=apps_box_badge&amp;itscg=30200">
                    <div className="appstorebutton">
                        <img src={appstore}></img>
                    </div>
                </a> */}
                <div className="imagemove">
                    <img src={phones}></img>
                </div>
            </div>

            <div className="scrollcontainer">
                <div className="parallax"></div>
            </div>

            <div id = "featurespage">
            <div className="landingcontainer2">
                {texttoshow.map(line => (
                    <FadeInSection key={line} className="potato">
                        <div className="box">
                            <div className="titles">
                                <h2>{line}</h2>
                            </div>
                        </div> 
                    </FadeInSection>
                ))}
            </div>
            </div>

            <div className="scrollcontainer">
                <div className="parallax3"></div>
            </div>
                    
            <div id = "previewpage">
            <div className="flipbox">
                
                <div className="card">
                    <div className="imgBx">
                        <img src={homescreen}></img>
                    </div>
                
                </div>
                <div className="card">
                    <div className="imgBx">
                        <img src={invitescreen}></img>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <img src={notificationscreen}></img>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <img src={filterscreen}></img>
                    </div>
                </div>
            </div>
            </div>

            <div className="scrollcontainer">
                <div className="parallax2"></div>
            </div>
            
            <div id = "meetus">
                <div className="contact">
                <div className="socialtext">Learn More About Us!</div>
                    <div className="wrapper">
                        <div className="button">
                            <div class="icon"><i class="fab fa-facebook"></i></div>
                            <span>Bite Party</span>
                        </div>
                        <div className="button">
                            <div className="icon"><i class="fab fa-instagram"></i></div>
                            <span>biteparty</span>
                        </div>
                        <div className="button">
                            <div className="icon"><i class="fab fa-email"></i></div>
                            <span>Email</span>
                        </div>
                    </div>
                <div className="socialtext2">KAS Technologies</div>
                </div>
            </div>

            {/*  */}
            
            
        </>
    )
}



export default Landing;