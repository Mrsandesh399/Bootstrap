import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button} from 'react-bootstrap';


export class Contact_Us extends Component {
    render() {
        return (
            <div>
                <Form className="container text-left">
              
              
              <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name : </Form.Label>
              <Form.Control type="text" placeholder="Enter Your Full Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age : </Form.Label>
              <Form.Control type="number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Label>Gender : </Form.Label>
              <Form.Control type="text" placeholder="Male/Female" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Label>Mobile No : </Form.Label>
              <Form.Control type="number" placeholder="contact me on" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address : </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password : </Form.Label>
              <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea : </Form.Label>
              <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              </Form>
            </div>
        )
    }
}

export default Contact_Us
