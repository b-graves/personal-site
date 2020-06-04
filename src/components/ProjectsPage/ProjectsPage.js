import React, { Component } from 'react';

import projects from "../../data/projects.json"

import CardColumns from "react-bootstrap/CardColumns";

import ProjectCard from "./ProjectCard"

import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

import FadeIn from 'react-fade-in';


class ProjectsPage extends Component {



    state = {

    }

    render() {


        const rows = []

        for (let i = 0; i < projects.length; i += 2) {
            rows.push(
                <CardDeck>
                    <ProjectCard project={projects[i]} />
                    {i + 1 < projects.length ? <ProjectCard project={projects[i + 1]} /> : <Card className="placeholder"></Card>}
                </CardDeck>
            )
        }

        return (
            <Container className="projects">
                <FadeIn>
                    {rows}
                </FadeIn>
                {projects.map(project =>
                    <div className="preload">
                    <img rel="preload" src={"/assets/" + project.id + "-project-image."+project.projectImageFormat} as="image" />
                    <img rel="preload" src={"/assets/" + project.id + "-secondary-image." + project.secondaryImageFormat} as="image" />
                    
                    </div>
                  )}
            </Container>

        );
    }
}

export default ProjectsPage;
