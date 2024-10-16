import React from 'react'
import Barwin from './assets/images/Barwin.jpg'
import Resume from './assets/pdf/Barwin-Resume.pdf'

const HomeContent=()=>{
    return(
        <>
            <div class="content">
            <div class="me">
                <h1 class="h1_1">I'm</h1><h1 class="h1_2">Barwin Raj</h1>
                <p class="homepara">This is my official portfolio website to showcase my all works related to web development and UI design.</p><br></br>
                <a href={Resume} style={{textDecoration:"none"}} download="Barwin-Resume.pdf" class="download-btn">Download CV</a>
            </div>
            <div class="barwin">
                <img class="img" src={Barwin}></img>
            </div>
            </div>
        </>
    )
}

export default HomeContent