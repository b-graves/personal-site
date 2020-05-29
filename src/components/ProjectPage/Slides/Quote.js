import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import FullHeight from "react-full-height";

class BigText extends Component {

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
        
        return (
            <FullHeight canExceed style={style} className="slide">
                <h1 className="slide__quote-text">"{slide.text}"</h1>
                <h2 className="slide__quote-source">-{slide.source}</h2>
            </FullHeight>


        );
    }
}

export default BigText;
