import React from 'react';
import './Header.css';

function Headers() {
    return (
        <div className = 'header'>
            Jay's Portfolio
            <div classNmae = 'header_menu'>
                <span className='nav'>Skills</span>
            </div>
            <div classNmae = 'header_menu'>
                <span className='nav'>About me</span>
                </div>
            <div classNmae = 'header_menu'>
                <span className='nav'>Archiving</span>
            </div>
            <div classNmae = 'header_menu'>
                <span className='nav'>Career</span>
            </div>
            <div classNmae = 'header_menu'>
                <span className='nav'>Projects</span>
            </div>

        </div>
    );
}

export default Headers;