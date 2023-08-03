import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
const NavigationBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //TODO: i have to use here user from auth provider
    return (

        <Navbar bg="light" expand="lg" className="mb-4 py-4 mr-3">
            <Container>
                {/* Left side of Navbar */}
                <Navbar.Brand href="/">
                    <img
                        src="/src/assets/rexcr.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo"

                    />
                    <span className="ms-2 text-danger fs-3 fw-bold">NextYouHire</span>
                </Navbar.Brand>

                {/* Middle section of Navbar */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto fw-bold fs-4">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/software-engineers">Software Engineers</Nav.Link>
                        <Nav.Link href="/product-managers">Product Managers</Nav.Link>
                        <Nav.Link href="/data-scientists">Data Scientists</Nav.Link>
                    </Nav>

                    {/* Right side of Navbar */}
                    <Nav>
                        {isLoggedIn ? (
                            <React.Fragment>
                                <Nav.Link href="/user-profile">User Profile</Nav.Link>
                                <Button variant="outline-danger" className='ml-3'>
                                    Logout
                                </Button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <NavDropdown
                                    title="Login/Signup"
                                    id="basic-nav-dropdown"
                                    align="end"
                                    className="ms-lg-2 bg-light fs-4 fw-bold"
                                >
                                    <Nav.Link><Button className='w-100 fw-bold'>Login</Button></Nav.Link>
                                    <Nav.Link><Button className='w-100 fw-bold'>Signup</Button></Nav.Link>
                                </NavDropdown>
                            </React.Fragment>
                        )}
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar>
    );
};

export default NavigationBar;