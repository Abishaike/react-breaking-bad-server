# react-breaking-bad-server
A Breaking Bad SPA Web Application that was created using React.JS; the backend is a local server that was created using Express.

Steps to run this project<br>
<ul>
   <li><i>Open one terminal on VS Studio Code to run the server, which can be accessed through the server directory</i></li>
   <ul>
        <li>Once you're in the server directory, please type in "npm install"</li>
        <li>After the execution of "npm install", please type in "node .\index.js"</li>
   </ul>
    <ul>
      <li>Possible routes</li>
      <ul>
          <li>localhost:5000/drugs ---- Used to display all of the available drugs through a get request</li>
          <li>localhost:5000/drugs ---- Used to add a drug to the list of available drugs through a post request</li>
          <li>localhost:5000/:UUID ---- Used to display the details of a specific drug with a specific UUID through a get request</li>
          <li>localhost:5000/:UUID ---- Used to update a specific drug through a patch request</li>
          <li>localhost:5000/:UUID ---- Used to delete a specific drug through a delete request</li>
      </ul>
     </ul>
</ul>

<ul>
   <li><i>Open another terminal to execute the react app, which can be accessed through the client directory</i></li>
    <ul>
      <li>Once you're in the client directory, please type in "npm install"</li>
      <li>After the execution of "npm install", please type in "npm start"</li>
      <li>React Route --- localhost:3000</li>
</ul>
