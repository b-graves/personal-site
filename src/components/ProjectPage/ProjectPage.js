import React, { Component } from 'react';


import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import "./ProjectPage.css"

import FullHeight from "react-full-height";

class ProjectPage extends Component {



    state = {

    }

    render() {


        const { project } = this.props;

        return (
            <div >
                <FullHeight style={{backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: "url(/assets/" + project.id + "-header-image.svg)"}} canExceed>

                    {project.hasSecondaryImage ? <img className="project__secondary-image" src={"/assets/" + project.id + "-secondary-image." + project.secondaryImageFormat} alt="project" /> : null}
                    <Container>
                        <div className="project__info">
                            <div className="project__name fancy">{project.name}</div>
                            <div className="project__description">{project.description}</div>

                            {project.hasLink ? <div onClick={() => window.open(project.link, "_blank")} style={{color: project.primaryColor}} className="project__link">View project online -></div> : null}
                            { project.fullCaseStudy ? null :<div className="project__description">Full case study coming soon...</div>}
                        </div>
                    </Container>
                </FullHeight>
            </div>


        );
    }
}

export default ProjectPage;
