import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container} from "react-bootstrap";
import {Link} from 'react-router-dom';
export class Navbaar extends Component {
    render() {
        return (
            <div className="container-fluid my-1">
                <Navbar bg="secondary" variant="dark">
                    <Container>
                        <Navbar.Brand to="#home">BPK</Navbar.Brand>
                        <Nav className="container-fluid mx-5 justify-content-center" activeKey="/home">
                            <Link className="text-white text-decoration-none m-2"  to="/" >Home</Link>
                            <Link className="text-white text-decoration-none m-2"  to="/shop">Shop</Link>
                            <Link className="text-white text-decoration-none m-2"  to="/products">Products</Link>
                            <Link className="text-white text-decoration-none m-2"  to="/">Promotion</Link>
                            <Link className="text-white text-decoration-none m-2"  to="/blog">Blog</Link>
                            <Link className="text-white text-decoration-none m-2"  to="/contactus">Contact us</Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Nav.Link href="/#"><span className="fas fa-search"></span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/#"><span class="fas fa-shopping-cart"></span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/#"><span class="fas fa-align-justify "></span></Nav.Link>
                            </Nav.Item>
                            
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Navbaar

