import React from 'react';
import './NavBar.css'
const NavBar = () => {
    return (
        <nav className='header'>
            <div>
            <a href="home">HOME</a>
            <a href="review">REVIEW</a>
            <a href="dashboard">DASHBOARD</a>
            <a href="blogs">BLOGS</a>
            <a href="about">ABOUT</a>
            </div>
        </nav>
        
    );
};

export default NavBar;