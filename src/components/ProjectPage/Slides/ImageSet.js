import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import FullHeight from "react-full-height";

class ImageSet extends Component {

    state = {

    }

    openLink = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
    }

    render() {


        const { slide, project } = this.props;

        let style = {}

        if (slide.invert) {
            style.backgroundColor = project.invertBackgroundColor
            style.color = project.invertColor
        } else if (slide.highlight) {
            style.backgroundColor = project.highlightBackgroundColor
            style.color = project.highlightColor
        } else {
            style.backgroundColor = project.backgroundColor
            style.color = project.primaryColor
        }

        if (slide.nobottompadding) {
            style.paddingBottom = "0px"
        }

        if (slide.notoppadding) {
            style.paddingTop = "0px"
        }

        return (
            <FullHeight canExceed style={style} className="slide" >
                <Row>
                    <Col className="slide__col" style={{ width: "100%" }}>
                        {slide.text ? <h1>{slide.text}</h1> : null}
                        {slide.subtext ? <h2>{slide.subtext}</h2> : null}
                        {slide.subsubtext ? <h3>{slide.subsubtext}</h3> : null}
                        {slide.body ? <p>{slide.body}</p> : null}
                    </Col>
                </Row>
                <Row className="slide__image-set">
                    {slide.images.map(image =>
                        <Col>
                            <div className="slide__image-set__container" style={{cursor: image.link ? "pointer" : null}} onClick={() => image.link ? this.openLink(image.link) : null}>
                                <img style={slide.images.length > 1 ? { paddingTop: slide.topBottomPadding+"%", paddingBottom: slide.topBottomPadding+"%", paddingLeft: slide.sidePadding+"%", paddingRight: slide.sidePadding+"%", width: 100-2*slide.sidePadding+"%" } : { padding: 0 }} className="slide__image-set__image" src={image.url} alt="project" />
                                <div className="slide__image-set__caption">
                                    {image.caption}
                                </div>
                            </div>
                        </Col>
                    )}
                </Row>
                {slide.footnote ? <Col className="slide__col" style={{ width: "100%" }}>
                    <div className="slide__footnote">
                        {slide.footnote ? <p>{slide.footnote}</p> : null}
                    </div>
                </Col> : null}
            </FullHeight>


        );
    }
}

export default ImageSet;
