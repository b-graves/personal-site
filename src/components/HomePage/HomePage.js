import React, { Component } from 'react';

import projects from "../../data/projects.json"

import CardColumns from "react-bootstrap/CardColumns";

import ProjectCard from "../ProjectsPage/ProjectCard"

import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

import "./HomePage.css"

import FadeIn from 'react-fade-in';


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
                <FadeIn >
                    <div className="intro">
                        I'm Ben, a product designer and frontend engineer who enjoys creating digital products that work for people.
                    </div>
                    <div className="intro__extra">
                        <div>
                            Currently product designer at <a href="https://cogna.co/">Cogna</a>
                        </div>
                    </div>
                    <div className="intro__extra extra">
                        <div>
                            Former UX engineer at Five AI
                        </div>
                        <div>
                            Former intern at Google, Method, Amazon & BuzzFeed.
                        </div>
                    </div>
                    <div className="home__project-header">Projects</div>
                    {rows}
                </FadeIn>
                {projects.map(project =>
                    <div className="preload">
                        <img rel="preload" src={"/assets/" + project.id + "-project-image." + project.projectImageFormat} as="image" />
                        <img rel="preload" src={"/assets/" + project.id + "-secondary-image." + project.secondaryImageFormat} as="image" />

                    </div>
                )}
            </Container>

        );
    }
}

export default HomePage;
