import React from 'react'
import Course from '../components/Course'

const AllCourses = (props) => {
    // For each post in the array render a Post component
    return props.courses.map((course) => <Course course={course} key={course.id} />);
  };

export default AllCourses
