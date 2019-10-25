import React, { useState } from 'react';
import { register } from "../serviceWorker";
import { Form, Button, Collapse } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './registration.css';


class Register extends React.Component  {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    render() {

        return(
            <div>
                <Button className="register-button" 
                    block size='lg' variant="outline-light"
                    onClick={() => {this.setState({open: !this.state.open})}}
                    aria-controls="form-collapse"
                    aria-expanded={this.state.open}>
                    Register
                </Button>
    
                <Collapse in={this.state.open}>
                    <div id="form-collapse">        
                        <Form className="registration-form"> 
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="name" placeholder="First Name" required />
                            </Form.Group>
    
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="name" placeholder="Last Name" required />
                            </Form.Group>
    
                            <Form.Group controlId="formBasicUsername">
                                <Form.Control type="username" placeholder="Username" required />
                            </Form.Group>
    
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="outline-light" 
                                block size='lg'  
                                onClick={this.props.handleRegister}
                                type="submit">
                                Sign up
                            </Button>
                        </Form>
                    </div>
                </Collapse>
            </div>
        )
    }
};


export default Register;