import React from 'react';
import { Form, Button, Collapse } from 'react-bootstrap';
import './login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };


    async handleSubmit(event) {
        event.preventDefault();
        this.props.handleLogin(
            this.state.username,
            this.state.password
        )

    }

    render() {
        return(
            <div>
                <Button className="register-button"
                    block size='lg' variant="outline-light"
                    onClick={() => { this.setState({ open: !this.state.open }) }}
                    aria-controls="form-collapse"
                    aria-expanded={this.state.open}>
                    Login
                </Button>

                <Collapse in={this.state.open}>
                    <div id="form-collapse">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Group controlId="formBasicUsername">
                                <Form.Control type="username"
                                    placeholder="Username"
                                    required
                                    autoComplete="off"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password"
                                    placeholder="Password"
                                    required
                                    name="password"
                                    autoComplete="off"
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="outline-light"
                                block size='lg'
                                type="submit">
                                Login
                            </Button>
                        </Form>
                    </div>
                </Collapse>
            </div>
        )
    }
}




export default Login;