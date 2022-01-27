import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
export class Caro extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="Myimages/1.jpg"
                            alt="First slide"
                            
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="Myimages/2.jpg"
                            alt="Second slide"
                        />

                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="Myimages/3.jpg"
                            alt="Third slide"
                        />

                        
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Caro
