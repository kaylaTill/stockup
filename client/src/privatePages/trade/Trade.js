import React from 'react';
import StockList from '../stocks/StockList';
import axios from 'axios';
import Buy from '../buy/Buy';
import { Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './trade.css';


class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
        
    }



    render() {
        return (
            <div className="dashboard">
                <Button className="to-quote-button"
                    block size='sm' variant="outline-light"
                    href={'/quote'}
                > Quote
                </Button>

                <Button className="to-buy-button"
                    block size='sm' variant="outline-light"
                    href={'/buy'}
                > Buy Stock
                </Button>

                <StockList/>
            </div>
        )
    }

}


export default Trade;