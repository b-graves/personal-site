import React, { Component } from 'react';

import projects from "../../data/projects.json"

import Card from "react-bootstrap/Card";

import { Link } from 'react-router-dom';

class ProjectCard extends Component {


    state = {

    }

    render() {

        const {project} = this.props;

        return (
            <Card  as={Link} to={project.path} style={{margin: "15px 0"}}>
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    {project.skills.map(skill => <span style={{padding: "0 5px"}}>{skill}</span>)}
                </Card.Footer>
            </Card>
        );
    }
}

export default ProjectCard;
