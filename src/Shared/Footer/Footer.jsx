import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (

        <footer className="bg-light text-black fs-5 text-light py-4">
            <Container>
                <Row>
                    <Col md={3}>
                        <h4>Contact Us</h4>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 123-456-7890</p>
                    </Col>
                    <Col md={2}>
                        <h4>Links</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/" className='text-decoration-none text-black'>Home</a>
                            </li>
                            <li>
                                <a href="/" className='text-decoration-none text-black'>About</a>
                            </li>
                            <li>
                                <a href="/" className='text-decoration-none text-black'>Services</a>
                            </li>
                            <li>
                                <a href="/" className='text-decoration-none text-black'>Contact</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h4>Software Engineer Technology</h4>
                        <ul className="list-unstyled">
                            <li>
                                <p>JavaScript (React, Node.js)</p>
                            </li>
                            <li>
                                <p>Python (Django, Flask)</p>
                            </li>
                            <li>
                                <p>Java (Spring Boot)</p>
                            </li>
                            <li>
                                <p>C# (.NET Core)</p>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h4>Project Manager Technology</h4>
                        <ul className="list-unstyled">
                            <li>
                                <p>Agile (Scrum, Kanban)</p>
                            </li>
                            <li>
                                <p>Microsoft Project</p>
                            </li>
                            <li>
                                <p>Jira</p>
                            </li>
                            <li>
                                <p>Asana</p>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h4>Data Scientist Technology</h4>
                        <ul className="list-unstyled">
                            <li>
                                <p>Python (NumPy, pandas)</p>
                            </li>
                            <li>
                                <p>R (ggplot2, caret)</p>
                            </li>
                            <li>
                                <p>SQL (MySQL, PostgreSQL)</p>
                            </li>
                            <li>
                                <p>Machine Learning (TensorFlow, scikit-learn)</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="bg-light text-black text-center py-2">
                <Container>
                    <p className="m-0">&copy; 2023 NextYouHire Inc. All rights reserved.</p>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;