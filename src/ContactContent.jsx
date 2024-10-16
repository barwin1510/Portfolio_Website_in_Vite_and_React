import React from 'react'
import Gmail from './assets/images/gmail.png'
import Whatsapp from './assets/images/whatsapp.png'
import Facebook from './assets/images/facebook.png'
import Instagram from './assets/images/instagram.png'

const ContactContent=()=>{
    return(
        <>
            <div class="contactcontent">
                <h1 class="contact">Contact</h1>
                <div class="contacts">
                <p class="contact1"><img src={Gmail} style={{width:35,marginRight:15}}></img>barwin15102001@gmail.com</p><br></br>
                <p class="contact2"><img src={Whatsapp} style={{width:35,marginRight:15}}></img>6379278539</p><br></br>
                <p class="contact3"><img src={Facebook} style={{width:35,marginRight:15}}></img><a href="https://www.facebook.com/profile.php?id=100079041022512&mibextid=ZbWKwL">Barwin Raj</a></p><br></br>
                <p class="contact4"><img src={Instagram} style={{width:35,marginRight:15}}></img><a href="https://www.instagram.com/barwin_2001/">barwin_2001</a></p><br></br>
                </div>
            </div>
        </>
    )
}

export default ContactContent

