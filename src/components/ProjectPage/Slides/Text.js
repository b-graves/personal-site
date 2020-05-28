import React, { Component } from 'react';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import FullHeight from "react-full-height";

import {FaLightbulb} from "react-icons/fa";

class Text extends Component {

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

        const content = <Row>
            {slide.icon === "FaLightbulb" ? <FaLightbulb className="slide__icon" /> : null }
            {slide.image ? <Col><img className="slide__side-image" src={slide.image} /></Col> : null}
            <Col>
                <h1>{slide.text}</h1>
                {slide.subtext ? <h2>{slide.subtext}</h2> : null}
                {slide.body ? <p>{slide.body}</p> : null}
                {slide.link ? <a style={{ color: project.secondaryColor }} className="slide__link" target="_blank" href={slide.link}>{slide.linkText}</a> : null}
            </Col>
        </Row>

        return (
            slide.small ?
                <div style={style} className="slide">
                    {content}
                </div>
                :
                <FullHeight canExceed style={style} className="slide">
                    {content}
                </FullHeight>


        );
    }
}

export default Text;
