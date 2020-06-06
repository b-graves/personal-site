import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import "./ContactPage.css"

import FadeIn from 'react-fade-in';

class ContactPage extends Component {


    state = {

    }

    render() {


        return (
            <Container className="contact">
                <FadeIn>
                    <div className="intro">
                        I'm Ben, a creative coder who enjoys designing and building digital products and experiences that work for people.
                </div>
                    <div className="contact__info">
                        Get In Touch: <a target="_blank" href="https://www.linkedin.com/in/ben-graves/">LinkedIn</a> / <a target="_blank" href="mailto:btgraves1997@gmail.com">Email</a>
                    </div>
                    <div className="contact__extra">
                        Currently looking for opportunities in UX Design/Engineering from July 2020.
            </div>
                </FadeIn>


            </Container>
        );
    }
}

export default ContactPage;
