import React from "react";
import { Link } from "react-router-dom";
import boy from '../man-2.png';
import head from '../headMucha1.png';

function Banner({lightmode}){
        // Function will execute on click of button
        const onButtonClick = () => {
            // using Java Script method to get PDF file
            fetch('JoseMolinaCV_EN.pdf').then(response => {
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'JoseMolinaCV_EN.pdf';
                    alink.click();
                })
            })
        }


    return(
        <div className='banner'>
            <div className={`container background--card-main--${lightmode}`}>
                <div className="banner-texture">
                <img className="head-mobile" src={head} alt={head} />
                <h1 className={`font-main--${lightmode}`}>My name is <span>Jose Molina</span></h1>
                <p className={`font-main--${lightmode}`}>I am a <b>web developer</b> with experience in web based technologies and a level of design in <Link target="_blank" className={`font-main--${lightmode}`} to="https://theplacetofrip.com/" >Theplacetofrip</Link>. Always looking for challenges to improve my experience and deepen engagement. I love <b>JavaScript</b>, <b>React</b> and <b>Wordpress</b>.</p>
                <div className="banner-button-icon-container">
                <button onClick={onButtonClick} className={`button-style-1 button--${lightmode}`}>My CV</button>
                <Link target="_blank" to="https://www.linkedin.com/in/jose-david-molina-sosa-webdev/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 24 24"><circle cx="4" cy="4" r="2" fill="#264c3d" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="0;1"/></circle><g fill="none" stroke="#264c3d" stroke-linecap="round" stroke-width="4"><path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.5s" values="24;0"/></path></g></svg>
                </Link>
                </div>
                </div>
            </div>
            <div className={`container body-desktop`}>
                <img src={boy} alt={boy} />
            </div>
        </div>
    )
}

export default Banner;