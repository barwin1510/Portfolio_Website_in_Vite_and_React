import React from 'react'
import Gmail from './assets/images/gmail.png'
import GitHub from './assets/images/github.png'
import Linkedin from './assets/images/linkedin.png'
import Whatsapp from './assets/images/whatsapp.png'
import Facebook from './assets/images/facebook.png'
import Instagram from './assets/images/instagram.png'

const ContactContent=()=>{
    return(
        <>
            <div className="contactcontent">
                <h1 className="contact">Contact</h1>
                <div className="contacts">
                <p className="contact1"><img src={Gmail} style={{width:35,marginRight:15}}></img>barwin15102001@gmail.com</p><br></br>
                <p className="contact2"><img src={GitHub} style={{width:35,marginRight:15}}></img><a href="https://github.com/barwin1510">barwin1510</a></p><br></br>
                <p className="contact3"><img src={Linkedin} style={{width:35,marginRight:15}}></img><a href="https://www.linkedin.com/in/barwin-raj-375604324/">barwin raj</a></p><br></br>
                <p className="contact4"><img src={Whatsapp} style={{width:35,marginRight:15}}></img>6379278539</p><br></br>
                <p className="contact5"><img src={Facebook} style={{width:35,marginRight:15}}></img><a href="https://www.facebook.com/profile.php?id=100079041022512&mibextid=ZbWKwL">Barwin Raj</a></p><br></br>
                <p className="contact6"><img src={Instagram} style={{width:35,marginRight:15}}></img><a href="https://www.instagram.com/barwin_2001/">barwin_2001</a></p><br></br>
                </div>
            </div>
        </>
    )
}

export default ContactContent

