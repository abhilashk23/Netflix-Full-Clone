import React, {useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useStateValue } from '../../../../StateProvider';
import './Dropdown.css';

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    // const [{user}, dispatch] = useStateValue();

    // console.log(user)

    // const handleAuthentication =() => {
    //     if (firebase.auth) {
    //         firebase.auth.signOut();
    //     }
    // }
    return (
        <>
           <div className="dropdown__container">
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                <li className="dropdown-link">
                    <div className="drop_content1">
                        <img 
                            className="drop__avatar"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSEoACaEb0LbzqHDGF4t4thQi1sMA4BmIg2yg-7nkR1v2eHW47Xgp4QCMfPKAEOWEyTM&usqp=CAU"
                            alt="Netflix Logo"
                        />
                        {/* <p>{!user ? 'Guest' : user.name}</p> */}
                        <p>Hello</p>
                    </div>
                </li>
                {/* <li className="dropdown-link">
                    <div className="drop_content1">
                        <img 
                            className="drop__avatar"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHv-Ga0Qg90F9CTloSMXpOUe-o5lL_6Pu9GrDOWqU2pk7EcdwldSl8SIIObT8sfyKeujM&usqp=CAU"
                            alt="Netflix Logo"
                        />
                        <p>Hello</p>
                    </div>
                </li> */}
                {/* <li className="dropdown-link">
                    <div className="drop_content1">
                        <img 
                            className="drop__avatar"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSEoACaEb0LbzqHDGF4t4thQi1sMA4BmIg2yg-7nkR1v2eHW47Xgp4QCMfPKAEOWEyTM&usqp=CAU"
                            alt="Netflix Logo"
                        />
                        <p>Hello</p>
                    </div>
                </li> */}
                {/* <li className="dropdown-link" style={{marginBottom:'-10%'}}>
                    <div className="drop_content1">
                        <img 
                            className="drop__avatar"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaZHMq96U_lrLbWhprtoemzvl1a-liKzfj0Tqg6upNdAc9G2Nr3NlbncE2F2Dr_J5pv8&usqp=CAU"
                            alt="Netflix Logo"
                        />
                        <p>Hello</p>
                    </div>
                </li> */}
                <li className="dropdown-link" style={{marginBottom:'-18%'}}>
                    <p>Manage Profiles</p>
                </li>
                <li className="dropdown-link" style={{marginBottom:'-18%'}}>
                    <p>Account</p>
                </li>
                <li className="dropdown-link" style={{marginBottom:'-13%'}}>
                    <p>Help Care</p>
                </li>
                <li className="dropdown-link">
                    <Link to="/subscription" style={{marginBottom:'3%'}} className="dropdown-item-link">
                        Subscription
                    </Link>
                </li>
                <li className="dropdown-link">
                    <Link to="/"  className="dropdown-item-link" >
                        Sign Out
                    </Link>
                </li>
            </ul>
           </div> 
        </>
    )
}

export default Dropdown
