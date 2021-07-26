import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header__top'>
                <img src='https://images.squarespace-cdn.com/content/v1/60aebfd53942b43aa5e17c42/1623294976419-9U1XSYK93JLP0HXIMHRX/CCNY%2Blong%2BLogo.jpg?format=1500w' alt='logo'/>
                <h1> 🌿 WELCOME, USER! 🌿 </h1>
            </div>
            <div className='header__links'>
                <h2>|  DASHBOARD  |</h2> 
                <h2>|  TASK MANAGEMENT  |</h2> 
                <h2>|  DOCUMENT CENTER  |</h2> 
                <h2>|  VENDOR TRACKER  |</h2> 
                <h2>|  NOTES  |</h2>
            </div>
        </div>
    )
}

export default Header
