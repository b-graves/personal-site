import React, { Component } from 'react';


import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import "./ProjectPage.css"

import FullHeight from "react-full-height";

import ImageSet from "./Slides/ImageSet";
import Text from "./Slides/Text";
import Quote from "./Slides/Quote";
import Video from "./Slides/Video";

const slideComponents = {
    "ImageSet": ImageSet,
    "Text": Text,
    "Quote": Quote
}



class ProjectPage extends Component {



    state = {

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {


        const { project } = this.props;

        return (
            <div style={{ backgroundColor: project.backgroundColor, color: project.primaryColor }} >
                <FullHeight style={{ backgroundSize: "auto 100vh", backgroundRepeat: "no-repeat", backgroundImage: "url(/assets/" + project.id + "-header-image.svg)", backgroundPositionX: "center" }} canExceed>

                    {project.hasSecondaryImage ? <img className="project__secondary-image" src={"/assets/" + project.id + "-secondary-image." + project.secondaryImageFormat} alt="project" /> : null}
                    <Container>
                        <div className="project__info">
                            <div style={{ backgroundColor: project.backgroundColor }} className="project__name fancy">{project.name}</div>
                            <div style={{ backgroundColor: project.backgroundColor }} className="project__description">
                                <div>
                                    <div className="project-page__type">
                                        {project.type}
                                    </div>
                                    <div className="project-page__time">
                                        {project.time}
                                    </div>
                                    <div className="project-page__duration">
                                        {project.duration}
                                    </div>
                                </div>
                                {project.skills.map(skill => <div className="project-page__project-skill" >{skill}</div>)}
                                <div>
                                    {project.description}
                                </div>
                            </div>
                            {project.hasLink ? <div onClick={() => window.open(project.link, "_blank")} style={{ color: project.secondaryColor }} className="project__link">View project online -></div> : null}


                        </div>
                    </Container>
                </FullHeight>
                {project.fullCaseStudy ?
                    project.slides.map(slide =>
                        slide.type === "Text" ? <Text slide={slide} project={project} /> :
                            slide.type === "Quote" ? <Quote slide={slide} project={project} /> :
                                slide.type === "ImageSet" ? <ImageSet slide={slide} project={project} /> :
                                    slide.type === "Video" ? <Video slide={slide} project={project} /> : null
                    ) : <div className="project__description">Full case study coming soon...</div>}

            </div>


        );
    }
}

export default ProjectPage;
