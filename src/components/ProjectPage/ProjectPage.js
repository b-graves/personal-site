import React, { Component } from 'react';


import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import "./ProjectPage.css"

import FullHeight from "react-full-height";

import ImageSet from "./Slides/ImageSet";
import Text from "./Slides/Text";
import Quote from "./Slides/Quote";

const slideComponents = {
    "ImageSet": ImageSet,
    "Text": Text,
    "Quote": Quote
}



class ProjectPage extends Component {



    state = {

    }

    render() {


        const { project } = this.props;

        return (
            <div style={{ backgroundColor: project.backgroundColor }} >
                <FullHeight style={{ backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: "url(/assets/" + project.id + "-header-image.svg)" }} canExceed>

                    {project.hasSecondaryImage ? <img className="project__secondary-image" src={"/assets/" + project.id + "-secondary-image." + project.secondaryImageFormat} alt="project" /> : null}
                    <Container>
                        <div className="project__info">
                            <div style={{ backgroundColor: project.backgroundColor }} className="project__name fancy">{project.name}</div>
                            <div style={{ backgroundColor: project.backgroundColor }}  className="project__description">{project.description}</div>

                            {project.hasLink ? <div onClick={() => window.open(project.link, "_blank")} style={{ color: project.primaryColor }} className="project__link">View project online -></div> : null}
                            {project.fullCaseStudy ? null : <div className="project__description">Full case study coming soon...</div>}
                        </div>
                    </Container>
                </FullHeight>
                {project.slides.map(slide =>
                    slide.type === "Text" ? <Text slide={slide} /> :
                    slide.type === "Quote" ? <Quote slide={slide} /> :
                    slide.type === "ImageSet" ? <ImageSet slide={slide} /> : null
                    )}
            </div>


        );
    }
}

export default ProjectPage;
