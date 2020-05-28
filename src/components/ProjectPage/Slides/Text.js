import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import FullHeight from "react-full-height";

class Text extends Component {

    state = {

    }

    render() {


        const { slide } = this.props;

        return (
                <FullHeight canExceed>
                    <Container>
                        <h1>{slide.text}</h1>
                        {slide.subtext ? <h2>{slide.subtext}</h2> : null}
                        {slide.body ? <p>{slide.body}</p> : null}
                    </Container>
                </FullHeight>


        );
    }
}

export default Text;
