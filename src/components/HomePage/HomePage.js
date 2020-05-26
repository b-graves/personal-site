import React, { Component } from 'react';

import projects from "../../data/projects.json"

import CardColumns from "react-bootstrap/CardColumns";

import ProjectCard from "../ProjectsPage/ProjectCard"

import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

import "./HomePage.css"


class HomePage extends Component {



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
                <div className="intro">
                Hi, I'm Ben. I'm a creative coder who enjoys designing and prototyping digital products and experiences that work for people.
                </div>
                <div className="home__project-header">Projects</div>
                {rows}
            </Container>

        );
    }
}

export default HomePage;
