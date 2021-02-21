import React from 'react'
import './Landing.css';
import cute_dino from '../assets/cute_dino.gif';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


const Landing = () => {
    return(
        <>
            <div className="herocontainer">
                <h4>Bringing people together.</h4>
                <h1>One <span className="vermillion">bite</span> at a time.</h1>
            </div>
            <div className="landingcontainer2">
                <img src={cute_dino} className="dinogif"/>
                <h2>No video, but here's a cute dino.</h2>
            </div>
            <div className="landingcontainer3">
                <div className="titles">
                    <h2>New.</h2>
                    <h3>Spontaneous.</h3>
                    <h4>Adventurous.</h4>
                </div>
                <div className="rowcontainers">
                    <div className="block1">
                        <h1 numberOfLines={2}>Support small businesses</h1>
                    </div>
                    <div className="block1">
                        <h1>heyooo234</h1>
                    </div>
                    <div className="block2">
                        <h1>heyooo567</h1>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Landing;