import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
const Header = () => {
  return (
   <header className="showcase">
    <div className="showcase-top">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" />
        <Link to="/" className="btn-rounded">
        Sign In</Link>
    </div>
    <div className="showcase-content">
        <h1>Unlimited movies,TV shows and more</h1>
        <p>Watch anywhere,Cancel Anytime</p>
        <Link to="/shows" className="btn-xl">Watch Free for 30 days
        <i className="fas fa-chevron-right btn-icon"></i>
        </Link>
    </div>
   </header>
  )
}

export default Header
