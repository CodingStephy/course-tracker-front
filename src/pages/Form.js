// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Form = ({ initialCourse, handleSubmit, buttonLabel, history }) => {
  ////////////////
  // The Form Data State
  ////////////////
  // Initiallize the form with the initialTodo state
  const [formData, setFormData] = useState(initialCourse);

  //////////////////////////
  // Functions
  //////////////////////////

  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to run when form is submitted
  const handleSubmisson = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    history.push("/");
  };

  // Our Form, an input for the subject and details fields and a submit button
  return (
    <form className="form" onSubmit={handleSubmisson}>
      <label>Title</label>
      <input
        type="text"
        onChange={handleChange}
        value={formData.title}
        name="title"
      />
      <label>Platform</label>
      <input
        type="text"
        onChange={handleChange}
        value={formData.platform}
        name="platform"
      />
      <label>Length</label>
      <input
        type="text"
        onChange={handleChange}
        value={formData.length}
        name="length"
      />
      <input className="submit" type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;
