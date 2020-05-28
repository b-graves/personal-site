import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import FullHeight from "react-full-height";

class BigText extends Component {

    state = {

    }

    render() {


        const { slide } = this.props;

        return (
                <FullHeight canExceed>
                    <Container>
                        <h1>{slide.text}</h1>
                        <h2>{slide.source}</h2>
                    </Container>
                </FullHeight>


        );
    }
}

export default BigText;
