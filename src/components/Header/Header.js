import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='header__top'>
                <img src='https://images.squarespace-cdn.com/content/v1/60aebfd53942b43aa5e17c42/1623294976419-9U1XSYK93JLP0HXIMHRX/CCNY%2Blong%2BLogo.jpg?format=1500w' alt='logo'/>
                <h1> 🌿 WELCOME, USER! 🌿 </h1>
            </div>
            <div className='header__links'>
                <div className='header__content'><Link to={'/'}><span><h2>DASHBOARD</h2></span></Link></div>
                <div className='header__content'><Link to={'/tasks'}><span><h2>TASK MANAGEMENT</h2></span></Link></div>
                <div className='header__content'><Link to={'/documentcenter'}><span><h2>DOCUMENT CENTER</h2></span></Link></div>
                <div className='header__content'><Link to={'/vendortracker'}><span><h2>VENDOR TRACKER</h2></span> </Link></div>
                <div className='header__content'><Link to={'/notes'}><h2>NOTES</h2></Link></div>
            </div>
        </div>
    )
}

export default Header
