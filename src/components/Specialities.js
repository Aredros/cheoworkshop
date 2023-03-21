import React from "react";
import django from '../zodiac2.png';



function Specialities({lightmode}){
    return(
        <div className="specialities">
            <div className="specialities_container"> 
                <div className={`specialities-card background--card-mid--${lightmode}`}>
                    <div className="specialities-card__descriptions">
                        <div className={`div-speciality background--card-specialities--${lightmode}`}>
                            <div className="texture-specialities">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0.9" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z"/></svg>
                            <p className={`frist-title font-accent--${lightmode}`}>React</p>
                            <p className={`speciality-paragraph font-accent--${lightmode}`}>
                                I have developed a variety of personal React projects since the moment I started to show interest in code, its way of working through components got my interest for the development of several projects that are now visible in my github, very eager to continue learning and developing more
                                 projects to show in my portfolio.</p>
                            </div>
                        </div>
                        <div className={`div-speciality background--card-specialities--${lightmode}`}>
                            <div className="texture-specialities">
                                <svg xmlns="http://www.w3.org/2000/svg" width="77" height="77" viewBox="0 0 16 16"><g fill="currentColor" fill-opacity="0.9" ><path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48c0-.63.478-1.218 1.152-1.218c.02 0 .039.002.058.003l.031.003A6.838 6.838 0 0 0 8 1.137A6.855 6.855 0 0 0 2.266 4.23c.16.005.313.009.442.009c.717 0 1.828-.087 1.828-.087c.37-.022.414.521.044.565c0 0-.371.044-.785.065l2.5 7.434l1.5-4.506l-1.07-2.929c-.369-.022-.719-.065-.719-.065c-.37-.022-.326-.588.043-.566c0 0 1.134.087 1.808.087c.718 0 1.83-.087 1.83-.087c.37-.022.413.522.043.566c0 0-.372.043-.785.065l2.48 7.377l.684-2.287l.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.864 6.864 0 0 0 3.868 6.176L1.73 5.206A6.837 6.837 0 0 0 1.137 8z"/><path d="M6.061 14.583L8.121 8.6l2.109 5.78c.014.033.03.064.049.094a6.854 6.854 0 0 1-4.218.109zm7.96-9.876c.03.219.047.453.047.706c0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"/><path fill-rule="evenodd" d="M0 8c0-4.411 3.589-8 8-8c4.41 0 8 3.589 8 8s-3.59 8-8 8c-4.411 0-8-3.589-8-8zm.367 0c0 4.209 3.424 7.633 7.633 7.633c4.208 0 7.632-3.424 7.632-7.633C15.632 3.79 12.208.367 8 .367C3.79.367.367 3.79.367 8z"/></g></svg>
                                <p className={`frist-title font-accent--${lightmode}`}>WordPress</p>
                                <p className={`speciality-paragraph font-accent--${lightmode}`}>
                                From my early beginnings in web development, I have gained experience through the use 
                                of Wordpress. This has allowed me to develop understanding of Wordpress, from themes to creating 
                                 plugins. I am able to help businesses optimize their websites on this 
                                widely-used platform. I have the skills and knowledge to 
                                 help clients get the most out of their Wordpress sites.</p>
                        </div>
                        </div>
                        <div className={`div-speciality background--card-specialities--${lightmode}`}>
                        <div className="texture-specialities">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6H4M0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2H0m11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1h-1m-2-8v7h5v-7h-5Z"/></svg>
                            <p className={`frist-title font-accent--${lightmode}`}>Responsive</p>
                            <p className={`speciality-paragraph font-accent--${lightmode}`}>
                            As a web-developper, I gained valuable experience in developing responsive sites. 
                            As the main developer, I was responsible for ensuring that the websites I worked were accessible on all devices, from desktops to smartphones. 
                            This required a keen eye for design and an understanding of how different devices display content.</p>
                        </div>
                        </div>
                        <div  className={`div-speciality background--card-specialities--${lightmode}`}>
                        <div className="texture-specialities">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="currentColor" d="m15.45 15.05l1.1-1.05l-2.1-2.1q.275-.425.413-.9q.137-.475.137-1q0-1.475-1.037-2.488Q12.925 6.5 11.5 6.5T9.038 7.512Q8 8.525 8 10t1.038 2.488Q10.075 13.5 11.5 13.5q.525 0 .988-.137q.462-.138.912-.413ZM11.5 12q-.825 0-1.412-.588Q9.5 10.825 9.5 10t.588-1.413Q10.675 8 11.5 8q.8 0 1.4.587q.6.588.6 1.413q0 .825-.587 1.412Q12.325 12 11.5 12ZM2 21q-.425 0-.712-.288Q1 20.425 1 20t.288-.712Q1.575 19 2 19h20q.425 0 .712.288q.288.287.288.712t-.288.712Q22.425 21 22 21Zm2-3q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h16V5H4v11Zm0 0V5v11Z"/></svg>
                            <p className={`frist-title font-accent--${lightmode}`}>SEO</p>
                            <p className={`speciality-paragraph font-accent--${lightmode}`}>
                            As the sole developer of various projects, I had to navigate through search
                             engine optimization on my own. This experience has taught me the importance
                              of optimizing websites for different languages, a resource that
                               is often overlooked. I have been able to effectively optimize websites for a 
                               wider range of audiences, leading to better SEO rankings and 
                               increased visibility.</p>
                        </div>
                        </div>
                    </div>
                    <div className="specialities-card__zodiac">
                    <img src={django} alt={django} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialities;