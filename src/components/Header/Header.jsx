import React, { useState } from 'react'
import { Button } from './Button'    
import { Link } from 'react-router-dom'
import './Header.css'
import Dropdown from './Dropdown'
import { click } from '@testing-library/user-event/dist/click'

const Header = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false) 

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

  return (
    <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                Awesomeness
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About 
                    </Link>
                
                </li>
                <li 
                className='nav-item' 
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/plans' className='nav-links' onClick={closeMobileMenu}>
                        Plans
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            <Button />
        </nav>
    </>
  )
}

export default Header;