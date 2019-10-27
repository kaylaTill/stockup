import React from 'react';
import StockList from './StockList';
import { Button } from 'react-bootstrap';
import Quote from './Quote';
import Buy from './Buy'
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
            <Quote/>
            <br></br>
            <Buy/>
            <StockList/>
        </div>
    )

})


export default Trade;