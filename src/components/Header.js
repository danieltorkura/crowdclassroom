import React from 'react'
import HeaderImg from "../img/headerimg.jpg"


const Header = () => {
    return (
        <div>
            <div className="landing">
                <div className="landing text__section">
                    <h2 className="landing text__section heading">
                    Skill = Income
                    </h2>
                    <p className="landing text__section paragraph">
                    Gain a new skill, get a new job, earn. Whatever your goal — 
                   we'll get you there.
                    </p>

                    <button className="landing text__section button"> 
                        Join Today
                    </button>

                </div>
                <div className="landing img__section">
                    <img src={HeaderImg} alt="Someone with a laptop" className="landing img__section img"/> 

                </div>
            </div>
        </div>
    )
}

export default Header