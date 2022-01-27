import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class Foot extends Component {
    render() {
        return (
            <Container>
                <Row><img src="Myimages/26.jpg" /></Row>
                <Row>
                    <Col className="bg-primary text-white  p-1 text-center"><h6 className=" p-1 fab fa-facebook "> Facebook</h6></Col>
                    <Col className="bg-danger text-white  p-1 text-center"><h6 className=" p-1 fab fa-twitter "> Twitter</h6></Col>
                    <Col className="bg-warning text-white  p-1 text-center"><h6 className=" p-1 fab fa-instagram "> Instagram</h6></Col>
                    <Col className="bg-primary text-white  p-1 text-center"><h6 className=" p-1 fab fa-pinterest "> pinterest</h6></Col>
                </Row>
                <Row className="bg-dark">
                    <Row>
                        <Col><h2 className=" text-white text-center p-3">BPK</h2></Col>
                    </Row>
                    <Row>
                        <Col><p className="text-secondary text-center p-3">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi rerum delectus tenetur perspiciatis illum nihil corporis quae sunt non odit, minima culpa in saepe dolores deserunt! Quos, fugiat sit."</p></Col>
                    </Row>
                </Row>
            </Container>
        )
    }
}

export default Foot
