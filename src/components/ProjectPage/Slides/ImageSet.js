import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import FullHeight from "react-full-height";

class ImageSet extends Component {

    state = {

    }

    render() {


        const { slide } = this.props;

        return (
                <FullHeight canExceed>
                    <Container>
                        <h1>{slide.text}</h1>
                        {slide.images.map(image =>
                            <img src={image.url} alt="project" />
                        )}
                    </Container>
                </FullHeight>


        );
    }
}

export default ImageSet;
