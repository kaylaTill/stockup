import React from 'react';
import StockList from './StockList';
import axios from 'axios';
import Quote from './Quote';
import Buy from './Buy';
import { Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './trade.css';


class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: []
        }
        
    }



    render() {
        return (
            <div>
                <Button className="quote-button"
                    block size='sm' variant="outline-light"
                    href={'/quote'}
                >Quote
                </Button>
                <Buy/>
                <StockList/>
            </div>
        )
    }

}


export default Trade;