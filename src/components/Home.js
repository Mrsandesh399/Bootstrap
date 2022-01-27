import React, { Component } from 'react'
import Caro from './Caro'
import { Row, Col, Container, Nav, CardGroup, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import Products from './Products';

export class Home extends Component {
    render() {
        return (
            <div>
                <Caro /><br />
                <Container>
                    <Row>
                        <Col sm className="bg-primary text-white border rounded-sm p-3 text-center">FREE SHIPPING WORLDWIDE</Col>
                        <Col sm className="bg-danger text-white border rounded-sm p-3 text-center">100% MONEY BACK</Col>
                        <Col sm className="bg-warning text-white border rounded-sm p-3 text-center">24/7 ONLINE CUSTOMER CARE</Col>
                    </Row>
                    <br /><br />
                    <Row>
                        <Col className=" text-center"><h3>FEATURED COLLECTION</h3></Col>
                    </Row>
                    <Row>
                        <Col className="text-center"><h5>---------------------</h5></Col>
                    </Row><br />
                    <Row>
                        <Nav className="justify-content-center" defaultActiveKey="/NewArrival" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href="/NewArrival">NEW ARRIVAL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1">CLOTHING</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">HATS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-3">SHOES</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-4">BAGS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-5">ACCESSORIES</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Row><br /><br />
                    <Row>
                        <CardGroup className="rounded-sm">
                            <Card>
                                <Card.Img variant="top" src="Myimages/13.jpg" />


                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/18.jpg" />


                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/14.jpg" />


                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/15.jpg" />

                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/16.jpg" />


                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/17.jpg" />


                            </Card>
                        </CardGroup>

                    </Row>
                    <Row>
                        <CardGroup className="rounded-sm">
                            <Card>
                                <Card.Img variant="top" src="Myimages/19.jpg" />

                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/20.jpg" />


                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/21.jpg" />


                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/22.jpg" />

                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/23.jpg" />


                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/24.jpg" />


                            </Card>
                        </CardGroup>

                    </Row><br /><br />

                    <Row>
                        <Col xs={6}><img
                            className="d-block w-100"
                            src="Myimages/4.jpg"
                            alt="Second slide"
                        /></Col>
                        <Col xs={6}>
                            <Row><h3>HOT DEALS</h3></Row>
                            <Row className="ml-5 text-danger"><h2 className="fas fa-ellipsis-h"></h2></Row>
                            <Row><h1 className="text-info">Tulos Draey Skirts</h1></Row>
                            <Row>
                                <Col>
                                    <h6 class="fas fa-star text-success m-1"></h6>
                                    <h6 class="fas fa-star text-success m-1"></h6>
                                    <h6 class="fas fa-star text-success m-1"></h6>
                                    <h6 class="fas fa-star text-success m-1"></h6>
                                    <h6 class="far fa-star text-success m-1"></h6>
                                </Col>
                            </Row><br />
                            <Row><h3 className="text-danger">$230</h3></Row><br />
                            <Row><p className="text-secondary">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repellendus animi dolorem vero molestiae unde alias quo
                                tempore sint minima possimus doloribus illo similique. </p>
                            </Row>
                        </Col>
                    </Row>
                    <br />
                    <br />



                    <Row>
                        <Col className=" text-center"><h3>INSTAGRAM</h3></Col>
                    </Row>
                    <Row>
                        <Col className="text-center"><h5>-------------------------</h5></Col>
                    </Row><br />
                    <Row>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src="Myimages/6.jpg" />

                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/7.jpg" />


                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/8.jpg" />


                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/9.jpg" />

                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/2.jpg" />


                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/11.jpg" />


                            </Card>
                        </CardGroup>
                    </Row><br /><br />
                    
                </Container>
                <br /><br />
                <Products/><br/>

            </div>
        )
    }
}

export default Home
