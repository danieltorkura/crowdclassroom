import React from "react"

const Navbar = () => {
    return (
        <div className="header">

            <div class="logo">
                <a href="#">CrowdClassroom</a>
            </div>

            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item"> <a href="#home" class="nav__link">How it Works</a> </li>
                    <li class="nav__item"> <a href="#services" class="nav__link">Join</a> </li>  
                    <li class="nav__item"> <a href="#services" class="nav__link">Stories</a> </li>  
                </ul>

            </nav>

        </div>
    )
}

export default Navbar