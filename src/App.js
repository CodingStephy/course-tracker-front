// Import All Our Components
import AllCourses from "./pages/AllCourses";
import SingleCourse from "./pages/SingleCourse";
import Form from "./pages/Form";
import './App.css'

// Import React and hooks
import React, { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch,Link } from "react-router-dom";

function App(props) {
  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };
  const button = {
    display: "block",
    margin: "auto",
  };

  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  const url = "https://sl-class-backend.herokuapp.com/class/";

  // State to Hold The List of Posts
  const [courses, setCourses] = useState([]);
  const nullCourse = {
    title: "",
    platform: "",
    length: ""
  };
  
  const [targetCourse, setTargetCourse] = useState(nullCourse);
  //////////////
  // Functions
  //////////////
  const getCourses = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCourses(data);
  };

  const addCourses = async (newCourse) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    });
  
  
    getCourses();
  };

  const getTargetCourse = (course) => {
    setTargetCourse(course);
    props.history.push("/edit");
  };
  
  // Function to edit todo on form submission
  const updateCourse = async (course) => {
    const response = await fetch(url + course.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
  
    // get updated list of todos
    getCourses();
  };

  const deleteCourse = async (course) => {
    const response = await fetch(url + course.id + "/", {
      method: "delete",
    });
  
    // get updated list of todos
    getCourses();
    props.history.push("/");
  };

  

  //////////////
  // useEffects
  //////////////
  useEffect(() => {
    getCourses();
  }, []);
  /////////////////////
  // returned JSX
  /////////////////////
  return (
    <div className="main">
      <h1 className="header" style={h1}>My Course Tracker</h1>
      <Link to="/new"><button className= "add" style={button}>Add another course</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllCourses{...routerProps} courses={courses} />}
        />
        <Route
          path="/class/:id"
          render={(routerProps) => (
            <SingleCourse {...routerProps} courses={courses} edit={getTargetCourse}
            deleteCourse={deleteCourse}/>
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => <Form {...routerProps}
          initialCourse={nullCourse}
          handleSubmit={addCourses}
          buttonLabel="add course" />}
        />
        <Route
          path="/edit"
          render={(routerProps) => 
          <Form {...routerProps}
          initialCourse={targetCourse}
          handleSubmit={updateCourse}
          buttonLabel="update course"/>}
        />
      </Switch>
    </div>
  );
}

export default App;