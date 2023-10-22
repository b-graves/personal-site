import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import "./SmoothieMakerPage.css"

import FadeIn from 'react-fade-in';

import FullHeight from "react-full-height";
import { misprints, prints } from './edition';

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
                        Smoothie Maker is an edition of 2-colour reduction linocut prints. All 75 prints depict the same foundational image. Unlike a conventional printmaking edition where a consistent uniform set is often the aim, within this series there is an intention to create variation. By altering the colours of the inks used between prints and embracing the natural human imperfections of hand-printing, it's hoped that each print might exhibit its own unique character.
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
                            <LazyLoadImage src={"/assets/smoothie-maker/misprints/" + print.fileName} className="smoothie-maker-image" threshold={1000} />
                            <div className="smoothie-maker-footer">
                                <div className="smoothie-maker-number">MISPRINT {print.number}{!print.isAvailable && " •"}</div>
                            </div>
                        </div>
                    </FullHeight>)}
                </FadeIn>
            </Container >
        );
    }
}

export default SmoothieMakerPage;
