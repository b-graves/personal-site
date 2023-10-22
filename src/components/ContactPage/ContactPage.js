import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import "./ContactPage.css"

import FadeIn from 'react-fade-in';
import { MetaTags } from 'react-meta-tags';

class ContactPage extends Component {


    state = {

    }

    render() {


        return (
            <Container className="contact">
                <MetaTags>
                    <title>Ben Graves - Contact</title>
                    <meta id="description" name="description" content="Product designer and frontend engineer who enjoys creating digital products that work for people." />
                </MetaTags>
                <FadeIn>
                    <div className="intro">
                        I'm Ben, a product designer and frontend engineer who enjoys creating digital products that work for people.
                    </div>

                    <div className="intro__extra">
                        <div>
                            Currently product designer at <a href="https://cogna.co/">Cogna</a>
                        </div>
                    </div>
                    <div className="intro__extra extra">
                        <div>
                            Former UX engineer at Five AI
                        </div>
                        <div>
                            Former intern at Google, Method, Amazon & BuzzFeed.
                        </div>
                    </div>
                    <div className="contact__info">
                        Get In Touch: <a target="_blank" href="https://www.linkedin.com/in/ben-graves/">LinkedIn</a> / <a target="_blank" href="mailto:benxgraves@gmail.com">Email - benxgraves@gmail.com</a>
                    </div>
                </FadeIn>
            </Container>
        );
    }
}

export default ContactPage;
