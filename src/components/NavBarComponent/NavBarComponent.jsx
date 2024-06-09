import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { getAllCategories } from '../../services/productServices';

const NavBarComponent = () => {
    const[categories,setCategories]= useState([]);
    useEffect(()=> {
        getAllCategories()
        .then((res)=>{
            setCategories(res.data);
        })
        .catch((error) =>
        {
            console.error(error)
        });
    },[])
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
                            {categories.map ((category) => {
                                return (
                                    <NavDropdown.Item key={category.slug}>
                                        <Link to={`/category/${category.slug}`}>{category.name}</Link>
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