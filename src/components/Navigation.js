import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <header>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/'>IM System</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/products'>Product Master</Link></Nav.Link>
                            <NavDropdown title="Settings" id="collasible-nav-dropdown">
                                <NavDropdown.Item><Link to='/account'>Account</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/transactions'>Transactions</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/help'>Help</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/stocks'>Available Stock</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to='/about'>About us</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link to='/login'><Link to='/'>Login</Link></Nav.Link>
                            <Nav.Link><Link to='/signup'>Sign In</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </header>
    )
}

export default Navigation;
