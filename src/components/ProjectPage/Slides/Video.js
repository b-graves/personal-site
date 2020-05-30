import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import FullHeight from "react-full-height";

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import YouTube from 'react-youtube';


class BigText extends Component {

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
        } else {
            style.backgroundColor = project.backgroundColor
            style.color = project.primaryColor
        }

        if (slide.nobottompadding) {
            style.paddingBottom = "0px"
        }

        if (slide.notoppadding) {
            style.paddingTop = "0px"
        }

        const opts = {
            
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };

        return (
            <FullHeight canExceed style={style} className="slide">
                <Row>
                    <Col className="slide__col" style={{ width: "100%" }}>
                        {slide.text ? <h1>{slide.text}</h1> : null}
                        {slide.subtext ? <h2>{slide.subtext}</h2> : null}
                        {slide.subsubtext ? <h3>{slide.subsubtext}</h3> : null}
                        {slide.body ? <p>{slide.body}</p> : null}
                    </Col>
                </Row>
                <YouTube containerClassName="slide__video-container"  videoId={slide.id} opts={opts} />
            </FullHeight>


        );
    }
}

export default BigText;
