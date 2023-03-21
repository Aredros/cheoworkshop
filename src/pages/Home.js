import React from 'react';
import BlogGallery from '../components/BlogGallery';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';

import ShowSquare from '../components/ShowSquare';
import Specialities from '../components/Specialities';

function Home({lightmode, modeButtonHandler}) {


    return (
        <>
           <Header modeButtonHandler={modeButtonHandler} lightmode={lightmode}/>
           <Banner lightmode={lightmode}/>
           <Specialities lightmode={lightmode}/>
           <h2 className={`subtitles-1 font-menu--${lightmode}`}>My Projects</h2>
           <ShowSquare lightmode={lightmode}/>
           <h2 className={`subtitles-1 font-menu--${lightmode}`}>My Knowledge</h2>
           <BlogGallery lightmode={lightmode}/>
           <Footer lightmode={lightmode}/> 
           
        </>
    );
    }
export default Home;