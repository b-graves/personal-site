import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import "./Navigation.css"

import { Switch, Route, Link } from 'react-router-dom';


class Navigation extends Component {


    state = {

    }

    render() {

        console.log(this.props.color)
        return (
            <Navbar bg="light" expand="md">
                <Navbar.Brand style={{color: this.props.color}} className="fancy" as={Link} to="/">Ben Graves</Navbar.Brand>
                <Navbar.Toggle style={{backgroundColor: this.props.color}} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link style={{color: this.props.color}} as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link style={{color: this.props.color}} as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
