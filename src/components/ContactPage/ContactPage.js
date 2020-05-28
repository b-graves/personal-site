import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import "./ContactPage.css"

class ContactPage extends Component {


    state = {

    }

    render() {


        return (
            <Container className="contact">
                <div className="intro">
                    I'm Ben, a creative coder who enjoys designing and prototyping digital products and experiences that work for people.
                </div>
                <div className="contact__info">
                    Get In Touch: <a target="_blank" href="https://www.linkedin.com/in/ben-graves/">LinkedIn</a> / <a target="_blank" href="mailto:btgraves1997@gmail.com">Email</a>
                </div>


            </Container>
        );
    }
}

export default ContactPage;
