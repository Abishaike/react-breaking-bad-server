/*
  useState and useEffect hooks will be used for this project
*/
import { useState, useEffect } from "react";

import Table from 'react-bootstrap/Table';

function Repository() {

  /*
  Implementing the useState hook
  The initial value of useData is null
*/
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

  /*
    Contains the JSX code which will be rendered for the App component
  */
  return (
    <div>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>UUID</th>
            <th>Name</th>
            <th>Date Added</th>
            <th>Summary</th>
            <th>Available Quantity</th>
          </tr>
        </thead>
        <tbody>
          {useData.map(drug =>
            <tr>
              <td>{drug.UUID}</td>
              <td>{drug.Name}</td>
              <td>{drug.dateAdded}</td>
              <td>{drug.Summary}</td>
              <td>{drug.qtyAvailable}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Repository;

/*
<div>
<h1>Drug Repository</h1>
<table>
  <thead>
    <tr>
      <th>UUID</th>
      <th>Name</th>
      <th>Date Added</th>
      <th>Summary</th>
      <th>Available Quantity</th>
    </tr>
  </thead>
  <tbody>
    {useData.map(drug =>
      <tr>
        <td>{drug.UUID}</td>
        <td>{drug.Name}</td>
        <td>{drug.dateAdded}</td>
        <td>{drug.Summary}</td>
        <td>{drug.qtyAvailable}</td>
      </tr>
    )}
  </tbody>
</table>
</div>
*/