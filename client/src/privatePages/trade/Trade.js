import React from 'react';
import StockList from './StockList';
import { Button } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './trade.css';

const Trade = ((props) => {
/*
    SHOULD HAVE:
        - SearchBar
        - Sell Button 
        - Buy Button 
        - Quote Button
        - Render Trade List 
*/ 
    return (
        <div>
            <Button className="quote-button" 
                      block size='sm' variant="outline-light"
                      // onClick={() => {this.setState({open: !this.state.open})}}
                      // aria-controls="form-collapse"
                      // aria-expanded={this.state.open}
                      >Quote
            </Button>
            <StockList/>
        </div>
    )

})


export default Trade;