import React from "react";
import { Link } from "react-router-dom";

//destructure the post from props
const Course = ({ course }) => {
  const div = {
    textAlign: "center",
    border: "3px solid purple",
    margin: "10px auto",
    width: "80%",
  };

  return (
    <div style={div}>
      <Link to={`/class/${course.id}`}>
      <h1>{course.title}</h1>
      </Link>
      <h2>{course.platform}</h2>
      <h2>{course.length}</h2>
   </div>
 );
};

export default Course;