import React from "react";
import { Link } from "react-router-dom";
import tptfview from '../TPTFview.jpg';
import gitview from '../GITHUBview.jpg';
import moulinview from '../MOULINview.jpg';

function ShowSquare({lightmode}){
    return(
        <div className="show-square">
            <Link to="https://theplacetofrip.com/" target="_blank"  className={`show-square__container overlay--${lightmode} background--card-small--${lightmode}`}>
                <img src={tptfview} alt={tptfview}/>
                <p className={`portfolio-square-title font-menu--${lightmode}`}>THE PLACE TO FRIP</p>
                <p className={`portfolio-square-description font-menu--${lightmode}`}>Search any thrift store close to you, their offers, style and locations</p>
            </Link>
            <Link to="https://github.com/Aredros" target="_blank"  className={`show-square__container overlay--${lightmode} background--card-small--${lightmode}`}>
                <img src={gitview} alt={gitview}/>
                <p className={`portfolio-square-title font-menu--${lightmode}`}>GITHUB PROJECTS</p>
                <p className={`portfolio-square-description font-menu--${lightmode}`}>Search any thrift store close to you, their offers, style and locations</p>
         </Link>
            <Link to="https://www.moulin-des-arbres.org/" target="_blank" className={`show-square__container overlay--${lightmode} background--card-small--${lightmode}`}>
                <img src={moulinview} alt={moulinview}/>
                <p className={`portfolio-square-title font-menu--${lightmode}`}>MOULIN DES ARBRES</p>
                <p className={`portfolio-square-description font-menu--${lightmode}`}>Search any thrift store close to you, their offers, style and locations</p>
              </Link>
        </div>
    )
}

export default ShowSquare;