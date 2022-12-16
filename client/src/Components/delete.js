/*
  useState and useEffect hooks will be used for this project
*/
import { useState, useEffect } from "react";

// React Bootstrap 
import Button from 'react-bootstrap/Button';

import './delete.css'


import drugPic from '../Images/druggies.jpg';

function Delete() {

  const [userInput, setUserInput] = useState(null);
  const [useData, setData] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setUserInput({
      UUID: ""
    });
    //console.log("TRIG");
  }, []);


  useEffect(() => {
    fetch("http://localhost:5000/drugs")
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);


  const handleSubmit = (e) => {

    e.preventDefault();

    fetch(`http://localhost:5000/${userInput.UUID}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput)
    }).then(() => {
      console.log(`Drug ${userInput.UUID} has been deleted`);
    })

    // Refresh the page
    window.location.reload(false);
  }

  const handleChange = (e) => {
    let target = e.target;
    let value = null;
    let name = target.name;

    value = target.value

    let newInput = { ...userInput };
    newInput[name] = value;

    setUserInput(newInput);
  }

  /*
    Contains the JSX code which will be rendered for the App component
  */
  if (!userInput) {
    return null;
  } else {
    return (
      <div className="deleteBox">
        <h2>Please select the drug you would want to delete</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            UUID NUMBER:
            <select name="UUID" className="form-select" onChange={handleChange}>
              <option> -- select the UUID Number -- </option>
              {useData.map((drug) => (
                <option key={drug.UUID} value={drug.UUID}>
                  {drug.UUID}</option>
              ))}
            </select>
          </label>
          <br></br>
          <br></br>
          <Button variant="success" type="submit">DELETE DRUG</Button>
        </form>
        <br></br>
        <img src={drugPic} width="100%" height="450px" />
      </div>
    )
  }
}

export default Delete;

