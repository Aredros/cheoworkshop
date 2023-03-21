import React from "react";

function BlogGallery({lightmode}){
    return( 
        <div className="blog-gallery">
                <div className={`background--card-small--${lightmode}`}>
                    <p  className={`title-blog font-secondary--${lightmode}`}>CODING</p>
                    <p  className={`font-secondary--${lightmode}`}>HTML5</p>
                    <p  className={`font-secondary--${lightmode}`}>js</p>
                    <p  className={`font-secondary--${lightmode}`}>PHP (WP)</p>
                    <p  className={`font-secondary--${lightmode}`}>React</p>
                    <p  className={`font-secondary--${lightmode}`}>CSS + SASS</p>
                    <p  className={`font-secondary--${lightmode}`}>GIT</p>
                </div>
                <div className={`background--card-small--${lightmode}`}>
                    <p  className={`title-blog font-secondary--${lightmode}`}>LANGUAGES</p>
                    <p  className={`font-secondary--${lightmode}`}>Spanish</p>
                    <p  className={`font-secondary--${lightmode}`}>French</p>
                    <p  className={`font-secondary--${lightmode}`}>English</p>
                </div>
                <div className={`background--card-small--${lightmode}`}>
                    <p  className={`title-blog font-secondary--${lightmode}`}>TOOLS / OTHERS</p>
                    <p  className={`font-secondary--${lightmode}`}>SEO</p>
                    <p  className={`font-secondary--${lightmode}`}>Github</p>
                    <p  className={`font-secondary--${lightmode}`}>Modern browsers (default: Chrome)</p>
                    <p  className={`font-secondary--${lightmode}`}>Responsive Websites</p>
                </div>
        </div>
    )
}

export default BlogGallery;