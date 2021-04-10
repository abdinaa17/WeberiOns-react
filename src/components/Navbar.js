import React from 'react'
import Logo from '../assets/logo/logo.png'

const Navbar = () => {
    return (
        <nav className="nav">
                <div className="nav__left">
                     <a href="/"><img className='logo' src={Logo} alt="logo"/></a>
                        
                </div>
        
                    <ul className="nav__center">
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Customers</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Resources</a></li>
                    </ul>

                    <div className="nav__right">
                        <a className='nav__right--link' href="/">Sign in</a>
                        <a href="/" className="btn btn__primary">Book A Demo</a>
                    </div>

            </nav>
    )
}

export default Navbar
