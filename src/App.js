import React from "react"
import Navbar from "./components/Navbar"


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
            <Navbar/>
            <Header/>
            <Advantages/>
            <HowItWorks/>
            <Courses/>
            <CallToAction/>
            <Footer/>
        </div>
    )
}

export default App
