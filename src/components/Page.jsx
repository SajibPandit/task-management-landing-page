import React from 'react'
import '../assets/css/Section.css'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Connector from '../assets/connector.png'
import { BiLogoMagento } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Page() {
    return (
        <>
            <div className='container-div'>
                <section>
                    <Container>
                        <Row>
                            <Col md={6} className="text-center">
                                <Image src={Connector} className="img-fluid" rounded />
                            </Col>
                            <Col md={6} className="text-center d-flex justify-content-center align-items-center flex-column">
                                <h1>Effortless Task Management for Teams and Individuals</h1>
                                <p>
                                    Effortless task management for teams and individuals, streamline
                                    workflows, meet deadlines achieve more with ease
                                </p>

                                <div>
                                    <Button variant="secondary" className="m-2">
                                        Get Started
                                    </Button>
                                    <Button variant="outline-secondary">Learn More</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>

                            <Col md={6} className="text-center d-flex justify-content-center align-items-center flex-column">
                                <h1>Effortless Task Management for Teams and Individuals</h1>
                                <p>
                                    Effortless task management for teams and individuals, streamline
                                    workflows, meet deadlines achieve more with ease
                                </p>

                                <div>
                                    <Button variant="secondary" className="m-2">
                                        Get Started
                                    </Button>
                                    <Button variant="outline-secondary">Learn More</Button>
                                </div>
                            </Col>

                            <Col md={6} className="text-center">
                                <Image src={Connector} className="img-fluid" rounded />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col md={6} className="text-center">
                                <Image src={Connector} className="img-fluid" rounded />
                            </Col>
                            <Col md={6} className="text-center d-flex justify-content-center align-items-center flex-column">
                                <h1>Effortless Task Management for Teams and Individuals</h1>
                                <p>
                                    Effortless task management for teams and individuals, streamline
                                    workflows, meet deadlines achieve more with ease
                                </p>

                                <div>
                                    <Button variant="secondary" className="m-2">
                                        Get Started
                                    </Button>
                                    <Button variant="outline-secondary">Learn More</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>

                            <Col md={6} className="text-center d-flex justify-content-center align-items-center flex-column">
                                <h1>Effortless Task Management for Teams and Individuals</h1>
                                <p>
                                    Effortless task management for teams and individuals, streamline
                                    workflows, meet deadlines achieve more with ease
                                </p>

                                <div>
                                    <Button variant="secondary" className="m-2">
                                        Get Started
                                    </Button>
                                    <Button variant="outline-secondary">Learn More</Button>
                                </div>
                            </Col>

                            <Col md={6} className="text-center">
                                <Image src={Connector} className="img-fluid" rounded />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col md={6} className="text-center">
                                <Image src={Connector} className="img-fluid" rounded />
                            </Col>
                            <Col md={6} className="text-center d-flex justify-content-center align-items-center flex-column">
                                <h1>Effortless Task Management for Teams and Individuals</h1>
                                <p>
                                    Effortless task management for teams and individuals, streamline
                                    workflows, meet deadlines achieve more with ease
                                </p>

                                <div>
                                    <Button variant="secondary" className="m-2">
                                        Get Started
                                    </Button>
                                    <Button variant="outline-secondary">Learn More</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col md={6} className="text-center">
                                <Image src={Connector} className="img-fluid" rounded />
                            </Col>
                            <Col md={6} className="text-center d-flex justify-content-center align-items-center flex-column">
                                <h1>Effortless Task Management for Teams and Individuals</h1>
                                <p>
                                    Effortless task management for teams and individuals, streamline
                                    workflows, meet deadlines achieve more with ease
                                </p>

                                <div>
                                    <Button variant="secondary" className="m-2">
                                        Get Started
                                    </Button>
                                    <Button variant="outline-secondary">Learn More</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className='py-5'>
                <Container>
                    <div className="footer-top d-flex justify-content-between align-items-center">
                        <div className="footer-logo d-flex align-items-center">
                            <BiLogoMagento />
                        </div>
                        <div className="footer-top-links d-flex align-items-center">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                About Us
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                Terms of Use
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="footer-center d-flex justify-content-between align-items-center pt-4 pb-2">
                        <p>© 2024 SproutGigs.com. All Rights Reserved.</p>
                        <div className="social-media-icons d-flex justify-content-between align-items-center">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="social-media-icon" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="social-media-icon" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="social-media-icon" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="social-media-icon" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>47 U.S. Code § 230 Disclaimer: SproutGigs shall not be treated as the publisher or speaker of any information provided by job publishers.</p>
                    </div>
                </Container>
            </section>


            </div>

            
        </>
    )
}

export default Page