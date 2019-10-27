import React from 'react';
import { Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './quote.css';

const Quote = ((props) => {
    return (
        <Button className="quote-button"
            block size='sm' variant="outline-light"
        // onClick={() => {this.setState({open: !this.state.open})}}
        // aria-controls="form-collapse"
        // aria-expanded={this.state.open}
        >Quote
        </Button>
    )
})

export default Quote;
