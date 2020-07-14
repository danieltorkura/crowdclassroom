import React from "react"
import {BrowserRouter as Router, Link} from "react-router-dom"

const Navbar = () => {
    return (
        <Router>
        <div className="header">

            <div className="logo">
                <Link to="/" className='logo-text'>CrowdClassroom</Link>
            </div>

            <nav class="nav">
                <ul className="nav__list">
                    <li className="nav__item"> <Link to="#how" className="nav__link">How it works</Link> </li>
                    <li className="nav__item"> <Link to="#services" className="nav__link">Stories</Link> </li>
                    <li className="nav__item join"> <Link to="#join" className="nav__link">Join</Link> </li>  
                </ul>

            </nav>

        </div>
        </Router>
    )
}

export default Navbar