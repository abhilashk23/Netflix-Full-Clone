import React from 'react'
import './HeaderWhite.css'
import { Link } from "react-router-dom";

function HeaderWhite({ show = true, children}) {
    return (
        <div className="headerWhite nav__black">
            <div className="headerwhite__container">
                <Link to='/'>
                    <img
                        className="headerwhite__image"
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt="Netflix"
                    />
                    <img 
                        className="nav__avatar"
                        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                        alt="Netflix Logo"
                    />
                    {/* {
                        show && (
                            <Link to="/signin" className="headerwhite__btn">
                                Sign In
                            </Link>
                        )
                    } */}
                </Link>
            </div>
            
        </div>
    )
}

export default HeaderWhite
