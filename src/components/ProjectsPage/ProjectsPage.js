import React, { Component } from 'react';

import projects from "../../data/projects.json"

import CardColumns from "react-bootstrap/CardColumns";

import ProjectCard from "./ProjectCard"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ProjectsPage extends Component {


    state = {

    }

    render() {

        const rows = []

        for (let i = 0; i < projects.length; i += 2) {
            rows.push(
                <Row>
                    <Col> <ProjectCard project={projects[i]} /></Col>
                    <Col> {i + 1 < projects.length ? <ProjectCard project={projects[i + 1]} /> : null}</Col>
                </Row>
            )
        }

        return (
            <Container>
                {rows}
            </Container>

        );
    }
}

export default ProjectsPage;
