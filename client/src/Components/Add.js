/*
  useState and useEffect hooks will be used for this project
*/
import { useState, useEffect } from "react";

// React Bootstrap 
import Button from 'react-bootstrap/Button';

import './Add.css'


import drugPic from '../Images/druggies.jpg';

function Add() {

  const [userInput, setUserInput] = useState(null);

  useEffect(() => {
    setUserInput({
      Name: "",
      qtyAvailable: ""
    });
    //console.log("useEffect: ", userInput);
  }, []);

  /*
    The anonymous arrow function below gets triggered during a form submission
  */
  const handleSubmit = (e) => {

    /*
      prevents the form from automatically submitting the user inputs
      if the form automatically submits the user inputs then we are not able to extract 
      the user data
    */
    e.preventDefault();

    /*
      1) Once the user submits the form, the data is sent to the specified URL through the 
         FETCH API. This is accomplished by using a JSON server
      2) A POST request is made since we are adding new data to the server
      3) Through the useState hooks we are able to capture the most recent userInput which 
         will be sent to the server
    */
    //console.log("Triggered");
    //console.log(userInput);

    fetch('http://localhost:5000/drugs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput)
    }).then(() => {
      console.log("new drug added");
    })

    // Refresh the page
    window.location.reload(false);
    /*
    // Reset the form inputs
    setUserInput({
      Name: "",
      qtyAvailable: ""
    });
    */
  }

  /*
    This anonymous arrow function is used to track any changes made to the form by the user
  */
  const handleChange = (e) => {
    /*
      Responsible for capturing any changes made to the form
    */
    let target = e.target;
    let value = null;
    let name = target.name;

    value = target.value

    let newInput = { ...userInput }; // preform a "shallow" clone of userInput
    newInput[name] = value; // update the associated property for the control

    // set the updated userInput
    //console.log(newInput);
    setUserInput(newInput);
  }

  /*
    Contains the JSX code which will be rendered for the App component
  */


  if (!userInput) {
    return null;
  } else {
    return (
      <div className="addBox">
        <h2>Please enter the details of the new drug</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            DRUG NAME
            <input type="text" name="Name" value={userInput.Name} onChange={handleChange} />
          </label>
          <br></br>
          <br></br>
          <label>
            AVAILABLE QUANTITY:
            <input type="number" name="qtyAvailable" value={userInput.qtyAvailable} onChange={handleChange} />
          </label>
          <br></br>
          <br></br>
          <Button variant="success" type="submit">ADD DRUG</Button>
        </form>
        <br></br>
        <img src={drugPic} width="100%" height="500px" />
      </div>
    )
  }
}

export default Add;