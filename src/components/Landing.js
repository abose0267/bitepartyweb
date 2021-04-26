import React, {useRef} from 'react'
import './Landing.css';
import backgroundimg from '../assets/undraw_town_r6pc.png'
import {gsap} from "gsap";
import texttoshow from './texttoshow.js'

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
            <div className="herocontainer">
                <div className="herotext">
                    <h4>Bringing people together,</h4>
                    <h1>one bite at a time.</h1>
                </div>
                <div className="heroimage">
                    <img src={backgroundimg} className="backgroundimg"/>
                </div>
               
            </div>
            <div className="landingcontainer2">
                {texttoshow.map(line => (
                    <FadeInSection key={line} className="potato">
                        <div className="box">
                            <h2>{line}</h2>
                        </div> 
                    </FadeInSection>
                ))}
            </div>
            <div className="landingcontainer3">
                
            </div>
        </>
    )
}


export default Landing;