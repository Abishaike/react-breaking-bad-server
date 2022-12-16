// React Bootstrap 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// importing the logo that will be used for the navbar
import logo from '../Images/drugLogo.png';

/*
  React-Router-Bootstrap
  Link Container will be used to route from one webpage to another
  This is equivalent to using the anchor tag with regular HTML 
*/
import { LinkContainer } from 'react-router-bootstrap'

/*
  React-Router-DOM
  Route - Responsible for creating the link with respect to each page
  Routes - Houses all of the routes, similar to the <Switch> component
*/
import { Navigate, Route, Routes } from 'react-router-dom';

// Importing the components that are required for the navbar
import Repository from './Repository.js'
import Add from './Add.js'
import Update from './Update.js'
import Delete from './delete.js'
import Home from './Home.js'

import './Nav.css'

function NavbarComponent(props) {
  /*
    Contains the JSX code which will be rendered for the App component
  */
  return (
    <>
      <Navbar bg="secondary" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="60"
                height="45"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />&nbsp;&nbsp;{props.company}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/repository">
                <Nav.Link>Drug Repository</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/add">
                <Nav.Link>Add New Drug</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/update">
                <Nav.Link>Update Drug</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/delete">
                <Nav.Link>Delete Drug</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="item1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repository" element={<Repository />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>

      </div>

    </>
  );
}

export default NavbarComponent;



