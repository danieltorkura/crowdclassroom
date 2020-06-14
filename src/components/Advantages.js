import React from "react"
import SingleAdvantage from "../commons/SingleAdvantage"
import Icon from '@material-ui/core/Icon';



const Advantages = (props) => {
    const advantages = [
        { icon: "", text: "Learn at your own pace" },
        { icon: "", text: "Learn at your own pace" },
        { icon: "", text: "Learn at your own pace" },
        { icon: "", text: "Learn at your own pace" },
        { icon: "", text: "Learn at your own pace" },
        { icon: "", text: "Learn at your own pace" }
    ]

    return (
        <div className="advantages">
            <div className="advantages__heading">
                <h2>Your gain</h2>
                <p>Crowdclassroom is 100% online and uses interactive technology to teach people the modern skills they need to launch a new career or earn side income. </p>
            </div>

            <div className="advantages__items">
                {/* {advantages.map((advantage, index) => {
                return <SingleAdvantage {...advantage} key={index}/>
            })} */}

                <div className="advantages__item">
                    <Icon className="advantages__item icon">star</Icon>
                    <h5>Become a pro</h5>
                </div>
                <div className="advantages__item">
                    <Icon className="advantages__item icon">restore</Icon>
                    <h5>Learn at your own pace</h5>
                </div>
                <div className="advantages__item">
                    <Icon className="advantages__item icon">cast_for_education</Icon>
                    <h5>Project centered education</h5>
                </div>
                <div className="advantages__item">
                    <Icon className="advantages__item icon">insights</Icon>
                    <h5>Get adequate feedback</h5>
                </div>
                <div className="advantages__item">
                    <Icon className="advantages__item icon">duo</Icon>
                    <h5>High quality videos</h5>
                </div>
                <div className="advantages__item">
                    <Icon className="advantages__item icon">trending_up</Icon>
                    <h5>By the best tutors.</h5>
                </div>


            </div>
        </div>
    )
}

export default Advantages