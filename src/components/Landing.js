import React, {useRef} from 'react'
import './Landing.css';
import backgroundimg from '../assets/sunsetdinner.PNG'
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
            <div className="landingcontainer3">
                <div className="herotext">
                    <h4>Bringing people together,</h4>
                    <h1>one bite at a time.</h1>
                </div>
                <div className="imagemove">
                    <img src="../assets/phones.png"></img>
                </div>
            </div>
            <div class="container">
                <div class="parallax"></div>
            </div>

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

            <div class="container">
                <div class="parallax"></div>
            </div>

            <div className="flipbox">
                <div className="card">
                    <div className="imgBx">
                        <img src="../assets/hero_image.jpg"></img>
                    </div>
                    <div className="details">
                        <h2>Someone Famous<span>Founder</span></h2>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <img src="../assets/sunsetdinner.PNG"></img>
                    </div>
                    <div className="details"></div>
                    <h2>Someone Famous<span>Founder</span></h2>
                </div>
                <div className="card">
                    <div className="imgBx">
                        <img src="../assets/sunsetdinner.PNG"></img>
                    </div>
                    <div className="details"></div>
                    <h2>Someone Famous<span>Founder</span></h2>
                </div>
            </div>
        </>
    )
}


export default Landing;