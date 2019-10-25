import React, { useState } from 'react';
import { register } from "../serviceWorker";
import { Form, Button, Collapse } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './registration.css';


class Register extends React.Component  {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            first_name: "",
            last_name: "",
            username: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        this.props.handleRegister(
            this.state.first_name,
            this.state.last_name,
            this.state.username,
            this.state.password
        )
    }


    handleChange(event) {
        console.log(event.target.name + ':' + event.target.value)
        this.setState({ [event.target.name]: event.target.value });
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
                                <Form.Control type="name" 
                                    placeholder="First Name"
                                    required
                                    name="first_name"
                                    value={this.state.first_name}
                                    onChange={this.handleChange} />
                                
                            </Form.Group>
    
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="name" 
                                    placeholder="Last Name" 
                                    required
                                    name="last_name"
                                    value={this.state.last_name}
                                    onChange={this.handleChange} />

                            </Form.Group>
    
                            <Form.Group controlId="formBasicUsername">
                                <Form.Control type="username" 
                                    placeholder="Username"
                                    required name="username"
                                    value={this.state.last_name}
                                    onChange={this.handleChange} />
                            </Form.Group>
    
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" 
                                    placeholder="Password" 
                                    required
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="outline-light" 
                                block size='lg'  
                                onClick={this.handleRegister}
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