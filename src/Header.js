import React from 'react'
import "./header.css"
import logo from "./logo.png"
function Header() {
    return (
        <div className="header">
         
            <img className="header_icon"
             src={logo} alt="img"></img>
        </div>
    )
}

export default Header
