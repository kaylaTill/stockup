import React from 'react';
import { Button, Collapse, Form } from 'react-bootstrap';
import axios from 'axios';
import API_KEY from '../../key';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './quote.css';

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            open: false,
            stock: ''
        }
        this.getQuote = this.getQuote.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault()
        this.getQuote(this.state.value)

    }

    getQuote(symbol) {
        axios.get(`https://cloud.iexapis.com/beta/stock/${symbol}/quote/?token=${API_KEY}&period=annual`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
    }


    render() {
        return (
            <div>
                <div className="quote-form">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Control
                            name="value"
                            autoComplete="off"
                            placeholder="Symbol"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <Button className="quote-button" 
                            variant="outline-light" size="sm" block
                            aria-controls="stock-info"
                            aria-expanded={this.state.open}
                            type="submit">
                            {
                                `Quote ${this.state.value}`
                        }</Button>
                    </Form>
                </div>
        
        
                <Collapse in={this.state.open}>
                    <div id="stock-info">
                        Info On Quote
                        <Button>
                            Buy Stock
                        </Button>
                    </div>
                </Collapse>
        </div>
    )}
}

export default Quote;
