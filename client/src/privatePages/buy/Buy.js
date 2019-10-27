import React from 'react';
import { Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Buy.css';

const Buy = ((props) => {
    return (
        <div>
            
            <Button className="quote-from-buy"
                block size='sm' variant="outline-light"
                href={'/quote'}
                >Quote
            </Button>

            {/* COLLAPSE => SHOW BUY FORM -> TAKE FROM QUOTE */}
            <Button className="buy-button"
                block size='sm' variant="outline-light"
                // onClick={() => {this.setState({open: !this.state.open})}}
                // aria-controls="form-collapse"
                // aria-expanded={this.state.open}
            >Buy
            </Button>


        </div>
        
    )
})

export default Buy;
