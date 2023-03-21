import React, {useState} from "react";
import { Link } from "react-router-dom";
import Overheader from "./Overheader";
//import logo from '../logo.svg';

const Header = ({lightmode, modeButtonHandler}) =>{
    const [isNavVisible, setNavVisibility] = useState(false);

    function toggleNav(){
        setNavVisibility(!isNavVisible)
    }

    return(
    <React.StrictMode>
        <header className="header">
            <div className="header_logo">
                <h1 className={`font-menu--${lightmode}`}>Cheo workshop</h1>
            </div>
            <div className="header_links">
                 {/* The Nav icon in case of mobile */}
                 <div id="nav-icon" 
                    className={`nav-icon ${isNavVisible ? 'open' : ''}`}
                    onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* The Nav links */}
                <nav className= {`navbar__collapsable ${isNavVisible ? 'visible-navbar' : 'invisible-navbar'}`}>
                    <ul className="navbar__collapsable__navigation">
                        <li>
                            <Link to="/"  className={`font-menu--${lightmode}`}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about"  className={`font-menu--${lightmode}`}>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <Overheader modeButtonHandler={modeButtonHandler} lightmode={lightmode}/>
    </React.StrictMode>
    );
}

export default Header;