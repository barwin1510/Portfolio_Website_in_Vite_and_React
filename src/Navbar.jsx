import React from 'react'
import Menu from './assets/images/menu.png'
import Cancel from './assets/images/cancel.png'
import {useState} from 'react'

const Navbar=()=>{

    const [sidenavVisible, setSidenavVisible] = useState(false);
    
    const sidenavOpen=()=>{
        setSidenavVisible(true)
    }

    const sidenavClose=()=>{
        setSidenavVisible(false)
    }

    return(
        <>
        <nav class="nav">
            <nav class="lnav">
                <h3>Barwin Raj</h3>
            </nav>
            <nav class="rnav">
                    <p class="navsub1"><a href='/' class="nsr1">HOME</a></p>
                    <p class="navsub2"><a href='/About' class="nsr2">ABOUT</a></p>
                    <p class="navsub3"><a href='/Skill' class="nsr3">SKILL</a></p>
                    <p class="navsub4"><a href='/Project' class="nsr4">PROJECT</a></p>
                    <p class="navsub5"><a href='/Contact' class="nsr5">CONTACT</a></p>
            </nav>
            <p class="menuP"><img onClick={sidenavOpen} class="menuIcon" src={Menu}></img></p>
        </nav>
            <nav class="sidenav" style={{ left: sidenavVisible ? '0%' : '-50%'}}>
                <p class="cancelP"><img class="cancelIcon" onClick={sidenavClose} src={Cancel}></img></p>
                <nav class="navside">
                    <p class="navside1"><a href='/' class="lnsr1">HOME</a></p><br></br>
                    <p class="navside2"><a href='/About' class="lnsr2">ABOUT</a></p><br></br>
                    <p class="navside3"><a href='/Skill' class="lnsr3">SKILL</a></p><br></br>
                    <p class="navside4"><a href='/Project' class="lnsr4">PROJECT</a></p><br></br>
                    <p class="navside5"><a href='/Contact' class="lnsr5">CONTACT</a></p>
                </nav>
            </nav>
        </>
    )
}

export default Navbar