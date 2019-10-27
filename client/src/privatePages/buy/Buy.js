import React from 'react';
import { Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Buy.css';

const Buy = ((props) => {
    return (
        <Button className="buy-button"
            block size='sm' variant="outline-light"
        // onClick={() => {this.setState({open: !this.state.open})}}
        // aria-controls="form-collapse"
        // aria-expanded={this.state.open}
        >Buy
        </Button>
    )
})

export default Buy;
