import React, {useEffect, useState} from 'react';
import Dropdown from './Dropdown/Dropdown';
import { Link } from 'react-router-dom';
import { BsFillBellFill } from "react-icons/bs";
import { ImSearch } from 'react-icons/im';
import { AiOutlineGift } from 'react-icons/ai';
import './Nav.css';
 
 function Nav() {

    const [show, handleShow] = useState(false);
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [hover, setHover] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true)
        }
        else {
            handleShow(false)
        }
    }

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
            setHover(!hover);
        } else {
            setDropdown(true);
            setHover(!hover);
        }
    };

    const onMouseLeave = () => {
        if (window.innerHeight < 600) {
            setDropdown(false);
            setHover(!hover);
        } else {
            setDropdown(true);
            setHover(!hover);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

     return (
         <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    className="nav__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix Logo"
                />
                <div className="container1">
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                </div>
                <div className="container2">
                    <ImSearch className="theme-color1" style={{fontSize:"30px"}} />
                    <li>CHILDREN</li>
                    <AiOutlineGift className="theme-color1" style={{fontSize:"30px"}}/>
                    <BsFillBellFill className="theme-color1" style={{fontSize:"30px"}}/>
                </div>
                <div className="container">
                    <img 
                        className="nav__avatar"
                        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                        alt="Netflix Logo"
                    />
                </div>
                <div 
                        className="nav__dropdown"
                        onMouseEnter={onMouseEnter} 
                        onMouseLeave={onMouseLeave}
                    > 
                        <i style={{color:'white'}} className={hover ? 'fa fa-angle-up' : 'fa fa-angle-down'} />
                        {dropdown && <Dropdown />} 
                    </div>
                
            </div>
         </div>
     )
 }
 
 export default Nav
 