import React from 'react'
import HeaderLinks from '../HeaderLinks/HeaderLinks'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header__top'>
                <h1>Hello, Username!</h1>
            </div>
            <HeaderLinks/>
        </div>
    )
}

export default Header
