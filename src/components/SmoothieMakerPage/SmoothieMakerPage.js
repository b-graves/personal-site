import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import "./SmoothieMakerPage.css"

import FadeIn from 'react-fade-in';

class SmoothieMakerPage extends Component {


    state = {

    }

    render() {


        return (
            <Container className="contact">
                <FadeIn>
                    <div className="">
                        Smoothie Maker
                    </div>
                </FadeIn>
            </Container>
        );
    }
}

export default SmoothieMakerPage;
