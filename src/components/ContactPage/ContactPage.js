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
                    
                    <div className="contact__extra">
                        <div>
                            Currently working as a User Experience Engineer at <a target="_blank" href="https://five.ai"> Five AI</a> in London.
                            </div>
                        <div>
                            Former intern at Google, Method, Amazon & BuzzFeed.
                        </div>
                    </div>
                    <div className="contact__info">
                        Get In Touch: <a target="_blank" href="https://www.linkedin.com/in/ben-graves/">LinkedIn</a> / <a target="_blank" href="mailto:bengravessss@gmail.com">Email - bengravessss@gmail.com</a>
                    </div>
                </FadeIn>


            </Container>
        );
    }
}

export default ContactPage;
