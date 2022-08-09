
import React from "react"
import { Link } from "react-router-dom"

function header(){
    return <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <p className="navbar-brand">Tech Blog</p>
      </div>
        <ul className="nav navbar-nav navbar-right">
     
     
          <li id="home"> <Link to={`/`} > HOME </Link></li>
          <li id="about"> <Link to={`/about`} > ABOUT US </Link></li>
        </ul>
    </div>
  </nav>
}

export default header