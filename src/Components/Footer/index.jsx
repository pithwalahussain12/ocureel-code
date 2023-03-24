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
                    <p className='footer__about__ocureel'>OCUREEL is a free-to-play mobile video game that guides you on the ultimate adventure of building relationships and real-life connections. As you play the game, you can share video content and advance through levels based on your interactions and contributions <br /> be SEEN be YOU!</p>
                </Col>
                <Col className="d-flex justify-content-center justify-content-md-end">
                    <Col md={4} className="text-center text-md-start w-auto">
                        <Row ><Link to="/subscribe" className='link-unstyled'>Subscribe</Link></Row>
                        <Row><Link to="/support" className='link-unstyled'>Support</Link></Row>
                        <Row><Link to="/press" className='link-unstyled'>Press</Link></Row>
                        <Row><Link to="/privacy-policy" className='link-unstyled'>Privacy Policy</Link></Row>
                        <Row><Link to="/terms-of-service" className='link-unstyled'>Terms of Service</Link></Row>
                        <Row><Link to="/community" className='link-unstyled'>Community Guidelines</Link></Row>
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
