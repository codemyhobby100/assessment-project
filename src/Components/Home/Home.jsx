import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="h-wrapper">
        <div className="container">
            <div className="home-container">
                <div className="home-content">
                    <span className='subtitle'>Welcome To Our Website</span>
                    <h1 className='title'>
                        Bring Fun Life To <br /> Your Kids
                    </h1>
                    <sapn className="text">Amazing Playground for your kids</sapn>
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home