import React, { useState, useEffect } from "react";

import Course from "./Courses";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AllCourse = () => {
    useEffect(() => {
        document.title = "All Courses";
        getallcoursesfromserver();
    }, []);

    const upatecourse = (id) => {
        setCourses(courses.filter((c) => c.id != id))
    };

    const getallcoursesfromserver = () => {

        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response);
                setCourses(response.data);

            },
            (error) => {
                console.log(error);
                toast.error("Server error");

            }
        );
    };
    const [courses, setCourses] = useState([


    ]);
    return (
        <div>
            <h1>All Courses</h1>
            <p>List of all courses are as follows:</p>

            {
                courses.length > 0
                    ? courses.map((item) =>
                        <Course key={item.id} Coursex={item} update={upatecourse} />)
                    : "No courses"


            }
        </div>
    )
}

export default AllCourse;
