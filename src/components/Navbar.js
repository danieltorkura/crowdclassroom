import React from "react"
import {BrowserRouter as Router, Link} from "react-router-dom"

const Navbar = () => {
    return (
        <Router>
        <div className="header">

            <div class="logo">
                <Link to="/">CrowdClassroom</Link>
            </div>

            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item"> <Link> to="#how" class="nav__link">How it Works</Link> </li>
                    <li class="nav__item"> <Link> to="#join" class="nav__link">Join</Link> </li>
                    <li class="nav__item"> <Link> to="#services" class="nav__link">Stories</Link> </li>  
                </ul>

            </nav>

        </div>
        </Router>
    )
}

export default Navbar