import React from 'react';
import './Navbar.css';
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { LuClock9 } from 'react-icons/lu'

const Navbar = () => {
  return (
    <div className="wrapper">
        <div className="container">
            <div className="top-section">
                <div className="left-side">
                    <h1 className='logo'>Kiddly<span>.</span></h1> 
                </div>
                <div className="right-side">
                    <sapn className="address">
                        <MdLocationOn className='address-icon'/>
                        34 Street Name, City Name, <br />United State
                    </sapn>
                    <sapn className="time">
                        <LuClock9 className='time-icon'/>
                        Sunday - Friday 8AM - 4PM <br />
                        Saturday CLOSED
                    </sapn>
                </div>
            </div>
            <div className="navbar">

                <ul className="nav-list">
                    <li>
                        <span className='active'>Home</span>
                    </li>
                    <li>
                        <span>About</span>
                    </li>
                    <li>
                        <span>Packages</span>
                    </li>
                    <li>
                        <span>Gallery</span>
                    </li>
                    <li>
                        <span>Pricing</span>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>

                <ul className="social-list">
                    <li>
                        <BiLogoFacebook/>
                    </li>
                    <li>
                        <BiLogoTwitter/>
                    </li>
                    <li>
                        <BiLogoInstagram/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar