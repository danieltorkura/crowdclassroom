import React from "react"
import SingleCourse from "../commons/SingleCourse"




const Courses = () => {


    const courseslist = [
        { course: 'course', title: "Forex Basics", description: "This is a sample catalog of all the courses we offer. Browse by topic or difficulty." },
        { course: 'course', title: "UX Basics", description: "This is a sample catalog of all the courses we offer. Browse by topic or difficulty." },
        { course: 'course', title: "Accounting Basics", description: "This is a sample catalog of all the courses we offer. Browse by topic or difficulty." },
        
    ]

    return (
        <div>
            <div className="courses__intro">
                <p>Explore our courses</p>
            </div>

            <div className="courses">

                {courseslist.map((courselist, index) => {
                    return <SingleCourse {...courselist} key={index} />
                })}
            </div>

        </div>
    )
}

export default Courses