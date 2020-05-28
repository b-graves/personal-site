import React, { Component } from 'react';

import projects from "../../data/projects.json"

import Card from "react-bootstrap/Card";

import { Link } from 'react-router-dom';

import "./ProjectCard.css"


class ProjectCard extends Component {


    state = {

    }

    render() {

        const { project } = this.props;


        return (
            <Card as={Link} to={"/project/"+project.id} className="projects__card">
                <img className="projects__image" src={"/assets/" + project.id + "-project-image."+project.projectImageFormat} alt="project" />
                <Card.Body>
                    <Card.Title className="projects__project-title">{project.name}</Card.Title>
                    <Card.Text  className="projects__project-type">
                        {project.type}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {project.skills.map(skill => <div className="projects__project-skill" style={{ padding: "0 5px" }}>{skill}</div>)}
                </Card.Footer>
            </Card>
        );
    }
}

export default ProjectCard;
