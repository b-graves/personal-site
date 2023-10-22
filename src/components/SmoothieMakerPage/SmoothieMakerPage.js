import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import "./SmoothieMakerPage.css"

import FadeIn from 'react-fade-in';

import FullHeight from "react-full-height";
import { misprints, prints, tshirts } from './edition';

import { LazyLoadImage } from 'react-lazy-load-image-component';


class SmoothieMakerPage extends Component {


    state = {

    }

    render() {
        return (
            <Container className="smoothie-maker">
                <FadeIn>
                    <div className="smoothie-maker-title">
                        SMOOTHIE MAKER
                    </div>
                    <div className="smoothie-maker-description">
                        Smoothie Maker is an edition of 2-colour reduction linocut prints. All 75 prints depict the same foundational image. Unlike in a conventional printmaking edition where the aim is often a consistent, uniform set, this series seeks to introduce variation. By altering the colours of the inks between prints and embracing the natural human imperfections of printing by hand, it's hoped each print will exhibit its own unique character.
                    </div>
                    <div className="smoothie-maker-subdescription">
                        <a className="smoothie-maker-subdescription" href="/art/smoothie-maker/texture">
                            The image was taken from a texture on some weathered wood paneling found on Highgate Hill.
                        </a>
                    </div>
                    <div className="smoothie-maker-subdescription">
                        Below are images of the 58 prints on paper, 9 misprints on paper, and 8 prints on cotton t-shirts.
                    </div>
                    <div className="smoothie-maker-subtitle">
                        PRINTS
                    </div>
                    {prints.map(print => <FullHeight canExceed>
                        <div className="smoothie-maker-print" >
                            <LazyLoadImage src={"/assets/smoothie-maker/2000x2800/prints/" + print.fileName} placeholderSrc={"/assets/smoothie-maker/1000x1400/prints/" + print.fileName} className="smoothie-maker-image" />
                            <div className="smoothie-maker-footer">
                                <div className="smoothie-maker-number">{print.number}/58{!print.isAvailable && " •"}</div>

                            </div>
                        </div>
                    </FullHeight>)}
                    <div className="smoothie-maker-subtitle">
                        MISPRINTS
                    </div>
                    {misprints.map(print => <FullHeight canExceed>
                        <div className="smoothie-maker-print">
                            <LazyLoadImage src={"/assets/smoothie-maker/2000x2800/misprints/" + print.fileName} placeholderSrc={"/assets/smoothie-maker/1000x1400/misprints/" + print.fileName} className="smoothie-maker-image" />
                            <div className="smoothie-maker-footer">
                                <div className="smoothie-maker-number">MISPRINT {print.number}{!print.isAvailable && " •"}</div>
                            </div>
                        </div>
                    </FullHeight>)}
                    <div className="smoothie-maker-subtitle">
                        T-SHIRTS
                    </div>
                    {tshirts.map(print => <FullHeight canExceed>
                        <div className="smoothie-maker-print">
                            <img src={"/assets/smoothie-maker/tshirts/" + print.fileName} className="smoothie-maker-image" data-hover-src={"/assets/smoothie-maker/tshirts/t" + print.number + "zoomed.jpeg"} />
                            <div className="smoothie-maker-footer">
                                <div className="smoothie-maker-number">T-SHIRT {print.number} - SIZE {print.size}{!print.isAvailable && " •"}</div>
                            </div>
                        </div>
                    </FullHeight>)}
                    <div className="smoothie-maker-subdescription" style={{ marginBottom: 0, paddingBottom: 128, paddingTop: 64 }}>
                        Thanks for scrolling through all my prints x
                    </div>
                </FadeIn>
            </Container >
        );
    }
}

export default SmoothieMakerPage;
