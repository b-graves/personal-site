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
        } else if (slide.highlight) {
            style.backgroundColor = project.highlightBackgroundColor
            style.color = project.highlightColor
        } else if (slide.transparent) {
            style.backgroundColor = "transparent"
            style.color =project.primaryColor
        }else {
            style.backgroundColor = project.backgroundColor
            style.color = project.primaryColor
        }

        if (slide.nobottompadding) {
            style.paddingBottom = "0px"
        }

        if (slide.notoppadding) {
            style.paddingTop = "0px"
        }




        const content = [
            slide.text ? <Row>
                <h1 style={{ width: "100%", margin: slide.centre ? "0 auto" : null, marginBottom: slide.subtext || slide.subsubtext || slide.body ? null : "0" }}>{slide.text}</h1>
            </Row> : null,
            <Row>

                {slide.icon === "FaLightbulb" ? <FaLightbulb className="slide__icon" /> : null}
                {slide.image && slide.imagePos === "left" ? <Col md={slide.imageWidth} className="slide__col"><img className={slide.smallImage ?  "slide__side-image--small slide__side-image--left" : "slide__side-image slide__side-image--left"} src={slide.image} /></Col> : null}
                <Col className="slide__col" style={{ width: "100%", margin: slide.centre ? "0 auto" : null }}>

                    {slide.subtext ? <h2>{slide.subtext}</h2> : null}
                    {slide.subsubtext ? <h3>{slide.subsubtext}</h3> : null}
                    {slide.body ? <p>{slide.body}</p> : null}
                    {slide.link ? <a style={{ color: project.secondaryColor }} className="slide__link" target="_blank" href={slide.link}>{slide.linkText}</a> : null}
                    <h4>{slide.listHeader}</h4>
                    {slide.list ? slide.list.map(item => <div className="slide__list-item">- {item}</div>) : null}
                </Col>
                {slide.image && slide.imagePos === "right" ? <Col md={slide.imageWidth} className="slide__col"><img  className={slide.smallImage ?  "slide__side-image--small slide__side-image--right" : "slide__side-image slide__side-image--right"} src={slide.image} /></Col> : null}
            </Row>,
            slide.footnote ? <Col className="slide__col" style={{ width: "100%" }}>
                <div className="slide__footnote">
                    {slide.footnote ? <p>{slide.footnote}</p> : null}
                </div>
            </Col> : null
        ]

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
