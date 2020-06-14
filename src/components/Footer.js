import React from "react"

const Footer = () => {
    return(
        <div className="footer">
            <div className="main-footer">
                <div className="main-footer__mission">
                    <h2>CrowdClassroom</h2>
                    <p>Our mission is to bring affordable technology education to people everywhere in order to help them achieve their dreams and change the world.</p>
                </div>
                <div className="main-footer__social">
                    <h3>Follow us on social media</h3>
                    <a><i className="fab fa-facebook"></i></a>
                    <a><i className="fab fa-twitter"></i></a>
                    <a><i className="fab fa-github"></i></a>

                </div>
            </div>

            <div className="footer__copyright">
                <p>&copy; Copyright 2020</p>
            </div>
        </div>
    )
}

export default Footer