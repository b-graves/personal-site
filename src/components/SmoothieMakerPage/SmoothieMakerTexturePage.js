import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import "./SmoothieMakerPage.css"

import FadeIn from 'react-fade-in';

import FullHeight from "react-full-height";
import { misprints, prints } from './edition';

import { LazyLoadImage } from 'react-lazy-load-image-component';


class SmoothieMakerTexturePage extends Component {


    state = {

    }

    render() {
        return (
            <Container className="smoothie-maker">
                <FadeIn>
                    <LazyLoadImage style={{ marginBottom: 32 }} src={"/assets/smoothie-maker/wall/wall1.jpeg"} className="smoothie-maker-image" />
                    <LazyLoadImage style={{ marginBottom: 32 }} src={"/assets/smoothie-maker/wall/wall2.jpeg"} className="smoothie-maker-image" />
                </FadeIn>
            </Container >
        );
    }
}

export default SmoothieMakerTexturePage;
