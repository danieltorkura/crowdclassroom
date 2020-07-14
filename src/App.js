import React from "react"
import Navbar from "./components/Navbar"
// import {
//     BrowserRouter as Router,
//     Route,
// } from "react-router-dom";


import './index'
import Header from "./components/Header"
import Advantages from "./components/Advantages"
import HowItWorks from "./components/HowItWorks"
import Courses from "./components/Courses"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"


const App = () => {
    return (

        <div>
            {/* <Router> */}
                {/* <Route exact path="/"> */}
                    <Navbar />
                    <Header />
                    <Advantages />
                    <HowItWorks />
                    <Courses />
                    <CallToAction />
                    <Footer />
                {/* </Route> */}
            {/* </Router> */}
        </div>
    )
}

export default App
