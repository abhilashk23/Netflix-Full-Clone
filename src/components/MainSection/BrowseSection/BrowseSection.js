import React from 'react'
import { Link } from 'react-router-dom';
import './BrowseSection.css';

function BrowseSection() {
    return (
        <div className="browseSection">
            <div className="browseWrapper">
               <div className="browseContent">
                    <h1>Who's Watching</h1>
               </div>
               <div className="browse">
                    <Link to="/browsing">
                        <img 
                            className="browse__avatar"
                            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                            alt="Netflix Logo"
                        />
                    </Link>
                    <Link to="/browsing">
                        <img 
                            className="browse__avatar"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHv-Ga0Qg90F9CTloSMXpOUe-o5lL_6Pu9GrDOWqU2pk7EcdwldSl8SIIObT8sfyKeujM&usqp=CAU"
                            alt="Netflix Logo"
                        />
                    </Link>
                    <Link to="/browsing">
                        <img 
                            className="browse__avatar"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSEoACaEb0LbzqHDGF4t4thQi1sMA4BmIg2yg-7nkR1v2eHW47Xgp4QCMfPKAEOWEyTM&usqp=CAU"
                            alt="Netflix Logo"
                        />
                    </Link> 
                    <Link to="/browsing">
                        <img 
                            className="browse__avatar"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaZHMq96U_lrLbWhprtoemzvl1a-liKzfj0Tqg6upNdAc9G2Nr3NlbncE2F2Dr_J5pv8&usqp=CAU"
                            alt="Netflix Logo"
                        />
                    </Link>
               </div>
            </div>
        </div>
    )
}

export default BrowseSection
