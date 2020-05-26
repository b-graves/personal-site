import React, { Component } from 'react';


import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import "./ProjectPage.css"

class ProjectPage extends Component {



    state = {

    }

    render() {


        const { project } = this.props;

        return (
            <div>
                <img src={"/assets/" + project.id + "-header-image.svg"} alt="project" className="project__header-image" />
                {project.hasSecondaryImage ? <img className="project__secondary-image" src={"/assets/" + project.id + "-secondary-image." + project.secondaryImageFormat} alt="project" /> : null}
                <Container>
                    <div className="project__info">
                        <div className="project__name fancy">{project.name}</div>
                        <div className="project__description">{project.description}</div>
                        {project.hasLink ? <div onClick={()=> window.open(project.link, "_blank")} className="project__link">View project online -></div> : null}
                    </div>
                </Container>
            </div>

        );
    }
}

export default ProjectPage;
