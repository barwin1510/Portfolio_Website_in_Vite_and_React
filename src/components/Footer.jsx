import React from "react"

const Footer = ()=>{

    const year=new Date()

    return(
        <>
            <footer>
                    Copyright &copy; {year.getFullYear()}; Designed by <span> Barwin Raj</span>
            </footer>
        </>
    )
}

export default Footer