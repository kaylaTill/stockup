import React, { useState } from 'react';
import { register } from "../serviceWorker";
import { Form, Button, Collapse } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Register = ((props) => {
    const [open, setOpen] = useState(false);
    return(
        <div>
            <Button className="register-button" 
                block size='lg' variant="outline-light"
                onClick={() => setOpen(!open)}
                aria-controls="form-collapse"
                aria-expanded={open}>
                Register
            </Button>

            <Collapse in={open}>
                <div id="form-collapse">        
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                </div>
            </Collapse>
        </div>
    )
});


export default Register;