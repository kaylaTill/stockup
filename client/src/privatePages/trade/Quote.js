import React from 'react';
import { Button, Collapse, Form } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './quote.css';

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            open: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
            <Button className="quote-button"
                block size='sm' variant="outline-light"
            onClick={() => {this.setState({open: !this.state.open})}}
            aria-controls="form-collapse"
            aria-expanded={this.state.open}
            >Quote
            </Button>
    
    
            <Collapse in={this.state.open}>
                <div id="quote-form">
                    <Form onSubmit={this.props.getQuote(this.state.value)}>
                        <Form.Control
                            name="value"
                            placeholder="Symbol"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <Button variant="outline-dark" size="lg" block
                            type="submit">
                            Quote
                        </Button>
                    </Form>
                </div>
            </Collapse>
        </div>
        )
    }
}

export default Quote;
