import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import "./Navigation.css"

import { Switch, Route, Link } from 'react-router-dom';


class Navigation extends Component {


    state = {

    }

    render() {


        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="fancy" as={Link} to="/">Ben Graves</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
