import React from 'react';
import './Home.css'
import Images from './images/DSC.jpeg'


const Home = () => {
    return (
        <div className='home'>
            <div className='description'>
            <h1>
                You Select <br />
                <span className='span'>We Collect!!!!</span>
            </h1>
            <p>
            Everyone wanted something that would push their performance to the next-level, and it was out job to rise to the challenge. Now as a family of master bat makers along with a skilled team of local artisans, we create arguably the best cricket equipment on the planet, which you know as DSC.
            </p>
            </div>
            
            <div className='img'>
            <img src={Images} alt="" />
            </div>
            
            <h2> Customer Review</h2>
        </div>
    );
};

export default Home;