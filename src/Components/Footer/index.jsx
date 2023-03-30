// import React from 'react';
import './style.css';
import logo from '../../assets/footer__logo.png';
import { FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid className="text-dark py-5 px-12 w-100">
            <Row>
                <Col md={4} className="text-center text-md-start">
                    <img src={logo} alt="Logo" width="50%" />
                </Col>
                <Col md={4} className="text-start">
                    <p className='footer__about__ocureel'>Ocureel is a one of a kind video sharing game that guides you on the ultimate adventure of creating real life connections & building deep relationships. be SEEN. be YOU.</p>
                </Col>
                <Col className="d-flex justify-content-center justify-content-md-end">
                    <Col md={4} className="text-center text-md-start w-auto">
                        {/* <Row ><a href="/subscribe" className='link-unstyled'>Subscribe</a></Row> */}
                        <Row><a href="/support" className='link-unstyled'>Support</a></Row>
                        <Row><a href="/press" className='link-unstyled'>Press</a></Row>
                        <Row><a href="/privacy-policy" className='link-unstyled'>Privacy Policy</a></Row>
                        <Row><a href="/terms-of-service" className='link-unstyled'>Terms of Service</a></Row>
                        <Row><a href="/community" className='link-unstyled'>Community Guidelines</a></Row>
                    </Col>
                </Col>
            </Row>
            <Row className='copyright'>
                <Col>&copy; Ocureel Patent Pending</Col>
                <Col className='twitter-icon'><FiTwitter /></Col>
            </Row>
        </Container>
    );
};

export default Footer;
