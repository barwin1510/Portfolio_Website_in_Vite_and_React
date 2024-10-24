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
        <nav className="nav">
            <nav className="lnav">
                <h3>Barwin Raj</h3>
            </nav>
            <nav className="rnav">
                    <p className="navsub1"><Link to='/' className="nsr1">HOME</Link></p>
                    <p className="navsub2"><Link to='/About' className="nsr2">ABOUT</Link></p>
                    <p className="navsub3"><Link to='/Skill' className="nsr3">SKILL</Link></p>
                    <p className="navsub4"><Link to='/Project' className="nsr4">PROJECT</Link></p>
                    <p className="navsub5"><Link to='/Contact' className="nsr5">CONTACT</Link></p>
            </nav>
            <p className="menuP"><img onClick={sidenavOpen} className="menuIcon" src={Menu}></img></p>
        </nav>
            <nav className="sidenav" style={{ left: sidenavVisible ? '0%' : '-50%'}}>
                <p className="cancelP"><img className="cancelIcon" onClick={sidenavClose} src={Cancel}></img></p>
                <nav className="navside">
                    <p className="navside1"><Link to='/' className="lnsr1">HOME</Link></p><br></br>
                    <p className="navside2"><Link to='/About' className="lnsr2">ABOUT</Link></p><br></br>
                    <p className="navside3"><Link to='/Skill' className="lnsr3">SKILL</Link></p><br></br>
                    <p className="navside4"><Link to='/Project' className="lnsr4">PROJECT</Link></p><br></br>
                    <p className="navside5"><Link to='/Contact' className="lnsr5">CONTACT</Link></p>
                </nav>
            </nav>
        </>
    )
}

export default Navbar