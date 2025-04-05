import React from 'react'
import Menu from '../assets/images/menu.png'
import Cancel from '../assets/images/cancel.png'
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
        <nav className="nav">
            <nav className="lnav">
                <h3>Barwin Raj</h3>
            </nav>
            <nav className="rnav">
                    <p className="navsub1"><a href='/' className="nsr1">HOME</a></p>
                    <p className="navsub2"><a href='/About' className="nsr2">ABOUT</a></p>
                    <p className="navsub3"><a href='/Skill' className="nsr3">SKILL</a></p>
                    <p className="navsub4"><a href='/Project' className="nsr4">PROJECT</a></p>
                    <p className="navsub5"><a href='/Contact' className="nsr5">CONTACT</a></p>
            </nav>
            <p className="menuP"><img onClick={sidenavOpen} className="menuIcon" src={Menu}></img></p>
        </nav>
            <nav className="sidenav" style={{ left: sidenavVisible ? '0%' : '-50%'}}>
                <p className="cancelP"><img className="cancelIcon" onClick={sidenavClose} src={Cancel}></img></p>
                <nav className="navside">
                    <p className="navside1"><a href='/' className="lnsr1">HOME</a></p><br></br>
                    <p className="navside2"><a href='/About' className="lnsr2">ABOUT</a></p><br></br>
                    <p className="navside3"><a href='/Skill' className="lnsr3">SKILL</a></p><br></br>
                    <p className="navside4"><a href='/Project' className="lnsr4">PROJECT</a></p><br></br>
                    <p className="navside5"><a href='/Contact' className="lnsr5">CONTACT</a></p>
                </nav>
            </nav>
        </>
    )
}

export default Navbar