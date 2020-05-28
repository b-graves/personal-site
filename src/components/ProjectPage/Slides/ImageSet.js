import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import FullHeight from "react-full-height";

class ImageSet extends Component {

    state = {

    }

    render() {


        const { slide, project } = this.props;

        let style = {}

        if (slide.invert) {
            style.backgroundColor = project.invertBackgroundColor
            style.color = project.invertColor
        } else {
            style.backgroundColor = project.backgroundColor
            style.color = project.primaryColor
        }

        return (
            <FullHeight canExceed style={style} className="slide" >
                <h1>{slide.text}</h1>
                <h2>{slide.subtext}</h2>
                <Row className="slide__image-set">
                    {slide.images.map(image =>
                        <Col>
                            <div className="slide__image-set__container" style={style}>
                                <img style={{paddingTop: slide.topBottomPadding, paddingBottom: slide.topBottomPadding, paddingLeft: slide.sidePadding, paddingRight: slide.sidePadding}}className="slide__image-set__image" src={image.url} alt="project" />
                                <div className="slide__image-set__caption">
                                    {image.caption}
                                </div>
                            </div>
                        </Col>
                    )}
                </Row>
            </FullHeight>


        );
    }
}

export default ImageSet;
