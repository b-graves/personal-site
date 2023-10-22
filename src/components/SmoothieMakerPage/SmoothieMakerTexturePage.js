import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import "./SmoothieMakerPage.css"

import FadeIn from 'react-fade-in';

import FullHeight from "react-full-height";
import { misprints, prints } from './edition';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MetaTags } from 'react-meta-tags';


class SmoothieMakerTexturePage extends Component {


    state = {

    }

    render() {
        return (
            <Container className="smoothie-maker">
                <MetaTags>
                    <title>SMOOTHIE MAKER</title>
                    <meta id="meta-description" name="description" content=" Smoothie Maker is an edition of 2-colour reduction linocut prints. All 75 prints depict the same foundational image. Unlike in a conventional printmaking edition where the aim is often a consistent, uniform set, this series seeks to introduce variation. By altering the colours of the inks between prints and embracing the natural human imperfections of printing by hand, it's hoped each print will exhibit its own unique character." />
                </MetaTags>
                <FadeIn>
                    <LazyLoadImage style={{ marginBottom: 32 }} src={"/assets/smoothie-maker/wall/wall1.jpeg"} className="smoothie-maker-image" />
                    <LazyLoadImage style={{ marginBottom: 32 }} src={"/assets/smoothie-maker/wall/wall2.jpeg"} className="smoothie-maker-image" />
                </FadeIn>
            </Container >
        );
    }
}

export default SmoothieMakerTexturePage;
