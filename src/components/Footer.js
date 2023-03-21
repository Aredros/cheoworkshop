import React from "react";
import { Link } from "react-router-dom";

function Footer({lightmode}){
    return(
        <footer className="App-footer">
            <div className="App-footer__overfoot">
                <div className={`font-footer--${lightmode}`}>
                <h3>I hope you enjoyed your visit !</h3>
                <p>I enjoy developing website projects to code about, articles, presentations and at hackathons.</p>
                </div>
                <div className={`font-footer--${lightmode}`}>
                    <h3>Follow me</h3>
                    <ul>
                        <li><Link target="_blank" to="https://www.linkedin.com/in/jose-david-molina-sosa-5b1b1b1b3/">Linkedin</Link></li>
                        <li><Link target="_blank" to="https://github.com/Aredros">GitHub</Link></li>
                    </ul>
                </div>
                <div className={`font-footer--${lightmode}`}>
                    <h3>Get in touch</h3>
                    <p>Feel free to contact me if you have any questions or if you want to work together.</p>
                </div>
            </div>
            <div  className={`App-footer__underfoot font-footer--${lightmode}`}>
                <p>Copyright © 2023 Jose David Molina Sosa. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;