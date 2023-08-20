import React from 'react';
import carImage from '../pictures/car_image.jpeg';  
import "../layout/Navbar.css";

function Home() {
    return (
        <div className="container-fluid">            
            <div className="hero-section text-center">
                <div className="hero-content" style={{ paddingTop: '10vh' }}>
                    <h1>Welcome to Car & Insurance Analysis</h1>
                    <p>Discover comprehensive data insights about cars and insurance.</p>
                    <p>To access detailed analyses, please <a href="/login" className="login-signup-link">login</a> or <a href="/signup" className="login-signup-link">signup</a>.</p>
                </div>
                <img src={carImage} alt="scrolling car" className="car-scroll"/>
            </div>

            <div className="quick-start-section text-center mt-5">
                <h2>快速入门</h2>
                <ul className="quick-start-list">
                    <li><strong>第一步：</strong>浏览流行的汽车品牌</li>
                    <li><strong>第二步：</strong>查看热门保险选择</li>
                    <li><strong>第三步：</strong>加入社区，与其他车友交流经验</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
