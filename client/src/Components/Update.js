/*
  useState and useEffect hooks will be used for this project
*/
import { useState, useEffect } from "react";

// React Bootstrap 
import Button from 'react-bootstrap/Button';

import './Add.css'


import drugPic from '../Images/druggies.jpg';

function Update() {

  const [userInput, setUserInput] = useState(null);
  const [useData, setData] = useState([]);

  useEffect(() => {
    //console.log("creating a new interval")
    fetch("http://localhost:5000/drugs")
      .then(res => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setData(data);
      });
  }, []);

  //console.log("Yo", useData[0]);
  useEffect(() => {
    setUserInput({
      Name: "",
      UUID: "",
      qtyAvailable: ""
    });
    //console.log("useEffect: ", userInput);
  }, [useData]);


  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Triggered");
    //console.log(userInput);

    //console.log(userInput.UUID);
    fetch(`http://localhost:5000/${userInput.UUID}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput)
    }).then(() => {
      console.log(`Drug ${userInput.UUID} has been updated`);
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

  const handleChange = (e) => {
    let target = e.target;
    let value = null;
    let name = target.name;

    value = target.value

    let newInput = { ...userInput };
    newInput[name] = value;

    console.log(newInput);
    setUserInput(newInput);
  }

  /*
    Contains the JSX code which will be rendered for the App component
  */
  if (!userInput) {
    return null;
  } else {
    return (
      <div>
        <h2>Please select the drug you would want to update</h2>
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
          <label>
            DRUG NAME:
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
          <Button variant="success" type="submit">UPDATE DRUG</Button>
        </form>
        <img src={drugPic} width="100%" height="300px" />
      </div>
    )
  }
}

export default Update;