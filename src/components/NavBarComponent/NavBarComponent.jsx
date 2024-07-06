import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { useProducts } from '../hooks/useProducts';

const NavBarComponent = () => {
    const {items} = useProducts("category");
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Tienda</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" style={{color: "grey", textDecoration: "none", marginTop: "0.756vh", marginRight: "0.45vw", fontWeight: "350", fontSize: "1.05rem"}}>Inicio</Link>
                        <Nav.Link href="#link">Registrate</Nav.Link>
                        <NavDropdown title="Marcas" id="basic-nav-dropdown">
                            {items.map ((category) => {
                                return (
                                    <NavDropdown.Item key={category.id}>
                                        <Link to={`/category/${category.name}`}>{category.name}</Link>
                                    </NavDropdown.Item>
                                );
                            })}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidgetComponent />
            </Container>
        </Navbar>
    );
}


export default NavBarComponent;