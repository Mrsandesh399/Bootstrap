import React, { Component } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import json from '../products.json';
export class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }
    componentDidMount() {
        this.setState({ cart: json.products })
    }
    
    render() {
        return (
            <Container>
                <Row><h1 className="text-success text-center p-5">"Welcome to our site"</h1></Row>
                <Row>{json.products.map(({ pname, id, price, quantity,image}) => {
                    return(
                        <Row>
                        <Col><img src={image} height="280px" className="card-img-top border border-dark rounded" alt="..." /> </Col>
                        <Col><h5>Product name : {pname}</h5><br/><h5>Price : {price}</h5><h5>Quantity : {quantity}</h5></Col>
                        </Row>

                    )
                })}
                
                </Row><br/><br/>

            </Container>
        )
    }
}

export default Blog
