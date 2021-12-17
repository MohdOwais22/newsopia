import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Navbar} from 'react-bootstrap'
import { Link } from "react-router-dom";


export default class NavBar extends Component {
   

    render() {
        return (
            <>
    <Navbar collapseOnSelect expand='sm' fixed='top' bg="dark" variant="dark">
         <Container>
         <Navbar.Brand>Newsopia</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
            
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/business">Business</Nav.Link>
            <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
            {/* <Nav.Link as={Link} to="/general">General</Nav.Link> */}
            <Nav.Link as={Link} to="/health">Health</Nav.Link>
            <Nav.Link as={Link} to="/science">Science</Nav.Link>
            <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
            <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
     </Navbar>
            </>
        )
    }
}
