import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const SingleCourse = ({courses, match,edit,deleteCourse }) => {
  const id = parseInt(match.params.id); //get the id from url param
  const course = courses.find((course) => course.id === id);

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "1px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div className ="single" style={div}>
      <h1>{course?.title}</h1>
      <h2>{course?.platform}</h2>
      <h2>{course?.length}</h2>
      <button onClick = {(event) => edit(course)}>Edit</button>
      <button onClick={(event) => deleteCourse(course)}>Delete</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SingleCourse;