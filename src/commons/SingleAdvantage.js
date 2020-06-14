import React from "react"
import Icon from '@material-ui/core/Icon';


const SingleAdvantage = (props) => {
    
    return (

        <div className="advantages__item">
                    <Icon>star</Icon>
                    <h5>{props.text}</h5>
                </div>
    )
}

export default SingleAdvantage