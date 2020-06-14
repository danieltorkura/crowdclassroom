import React from "react"
import Forex from "../img/forex1.jpg"



const HowItWorks = () => {
    return(
        <div className="howitworks">
            <div className="howitworks__img"> 
            <img  alt="Class content" src={Forex}/>
            </div>
            <div className="howitworks__text"> 
                <h2>It is easier than you think. Don't you think?</h2>
                <ul>
                    <li>Get courses at cheap prices</li>
                    <li>Experience the feel of a real class</li>
                    <li>Work on projects</li>
                    <li>Become an expert</li>
                    <li>Start earning</li>
                    <a href="www.crowdclassroom.com">Go to courses</a>
                </ul>
            </div>
        </div>
    )
}

export default HowItWorks