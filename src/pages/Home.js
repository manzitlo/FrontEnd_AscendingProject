import React from 'react';
import carImage from '../pictures/car_image.jpeg';  

function Home() {
    return (
        <div className="container-fluid">            
            <div className="hero-section text-center" style={{
                background: "#FFFFFF",
                height: '80vh',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="hero-content" style={{ paddingTop: '20vh' }}>
                    <h1>Welcome to Car & Insurance Analysis</h1>
                    <p>Discover comprehensive data insights about cars and insurance.</p>
                    <p>To access detailed analyses, please <a href="/login" className="text-info">login</a> or <a href="/signup" className="text-info">signup</a>.</p>
                </div>
                <img src={carImage} alt="scrolling car" className="car-scroll"/>
            </div>
        </div>
    );
}

export default Home;
