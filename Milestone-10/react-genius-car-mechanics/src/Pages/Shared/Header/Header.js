import React from 'react';
import { Button, Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={HashLink} to="/#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                        <Nav.Link as={HashLink} to="/#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/#experts">Experts</Nav.Link>
                        <Stack direction="horizontal" gap={3}>
                            {user?.email ?
                                <span><Button onClick={logout} variant="light">Logout</Button></span>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Navbar.Text>
                                Signed in as: <span>{user?.displayName}</span>
                            </Navbar.Text>
                        </Stack>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;