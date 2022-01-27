import React, { Component } from 'react'
import { Container ,Row, Col,CardGroup, Card} from 'react-bootstrap'

export class Products extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Row>
                        <Col><h4 className="text-center text-info">Top Seller</h4>  </Col>
                        <Col><h4 className="text-center text-info">Top Rate</h4>  </Col>
                        <Col><h4 className="text-center text-info">Top Special</h4>  </Col>
                    </Row>
                    <Row>

                        <CardGroup>

                            <Card>
                                <Card.Img variant="top" src="Myimages/23.jpg" width="250" height="270" />
                                <Card.Footer>
                                    <Row>
                                        <Col><p className="fas fa-shopping-cart"></p></Col>
                                        <Col><p className="fas fa-retweet "></p></Col>
                                        <Col><p className="fas fa-heart"></p></Col>
                                        <Col><p className="fas fa-eye"></p></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/22.jpg" width="280" height="270" />
                                <Card.Footer>
                                    <Row>
                                        <Col><p className="fas fa-shopping-cart"></p></Col>
                                        <Col><p className="fas fa-retweet "></p></Col>
                                        <Col><p className="fas fa-heart"></p></Col>
                                        <Col><p className="fas fa-eye"></p></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/21.jpg" width="280" height="270" />
                                <Card.Footer>
                                    <Row>
                                        <Col><p className="fas fa-shopping-cart"></p></Col>
                                        <Col><p className="fas fa-retweet "></p></Col>
                                        <Col><p className="fas fa-heart"></p></Col>
                                        <Col><p className="fas fa-eye"></p></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Row>
                    <Row>

                        <CardGroup>

                            <Card>
                                <Card.Img variant="top" src="Myimages/20.jpg" width="280" height="270" />
                                <Card.Footer>
                                    <Row>
                                        <Col><p className="fas fa-shopping-cart"></p></Col>
                                        <Col><p className="fas fa-retweet "></p></Col>
                                        <Col><p className="fas fa-heart"></p></Col>
                                        <Col><p className="fas fa-eye"></p></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/19.jpg" width="280" height="270" />
                                <Card.Footer>
                                    <Row>
                                        <Col><p className="fas fa-shopping-cart"></p></Col>
                                        <Col><p className="fas fa-retweet "></p></Col>
                                        <Col><p className="fas fa-heart"></p></Col>
                                        <Col><p className="fas fa-eye"></p></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/18.jpg" width="280" height="270" />
                                <Card.Footer>
                                    <Row>
                                        <Col><p className="fas fa-shopping-cart"></p></Col>
                                        <Col><p className="fas fa-retweet "></p></Col>
                                        <Col><p className="fas fa-heart"></p></Col>
                                        <Col><p className="fas fa-eye"></p></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Row>
                    <Row>

                        <CardGroup>

                            <Card>
                                <Card.Img variant="top" src="Myimages/16.jpg" width="280" height="270" />
                                <Card.Footer>
                                    <Row>
                                        <Col><p className="fas fa-shopping-cart"></p></Col>
                                        <Col><p className="fas fa-retweet "></p></Col>
                                        <Col><p className="fas fa-heart"></p></Col>
                                        <Col><p className="fas fa-eye"></p></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/14.jpg" width="280" height="270" />
                                <Card.Footer>
                                    <Row>
                                        <Col><p className="fas fa-shopping-cart"></p></Col>
                                        <Col><p className="fas fa-retweet "></p></Col>
                                        <Col><p className="fas fa-heart"></p></Col>
                                        <Col><p className="fas fa-eye"></p></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="Myimages/14.jpg" width="280" height="270" />
                                <Card.Footer>
                                    <Row>
                                        <Col><p className="fas fa-shopping-cart"></p></Col>
                                        <Col><p className="fas fa-retweet "></p></Col>
                                        <Col><p className="fas fa-heart"></p></Col>
                                        <Col><p className="fas fa-eye"></p></Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Row>

                </Row>
            </Container>
        )
    }
}

export default Products
