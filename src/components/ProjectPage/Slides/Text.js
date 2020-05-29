import React, { Component } from 'react';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import FullHeight from "react-full-height";

import { FaLightbulb } from "react-icons/fa";

class Text extends Component {

    state = {

    }

    render() {


        const { slide, project } = this.props;

        let style = {}

        if (slide.invert) {
            style.backgroundColor = project.invertBackgroundColor
            style.color = project.invertColor
        }  else if (slide.highlight) {
            style.backgroundColor = project.highlightBackgroundColor
            style.color = project.highlightColor
        } else {
            style.backgroundColor = project.backgroundColor
            style.color = project.primaryColor
        }

       
        

        const content =[ 
            <Row>
                        <h1>{slide.text}</h1>
                    </Row>,
            <Row>

            {slide.icon === "FaLightbulb" ? <FaLightbulb className="slide__icon" /> : null}
            {slide.image && slide.imagePos === "left" ? <Col className="slide__col"><img className="slide__side-image" src={slide.image} /></Col> : null}
            <Col className="slide__col" style={{ width: "100%" }}>

                {slide.subtext ? <h2>{slide.subtext}</h2> : null}
                {slide.body ? <p>{slide.body}</p> : null}
                {slide.link ? <a style={{ color: project.secondaryColor }} className="slide__link" target="_blank" href={slide.link}>{slide.linkText}</a> : null}
                <h3>{slide.listHeader}</h3>
                {slide.list ? slide.list.map(item => <div className="slide__list-item">- {item}</div>) : null}
            </Col>
            {slide.image && slide.imagePos === "right" ? <Col className="slide__col"><img className="slide__side-image" src={slide.image} /></Col> : null}
        </Row>]

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
