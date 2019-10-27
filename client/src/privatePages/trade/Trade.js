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
                {/* <div className="balance">Balance: {this.props.balance}</div> */}
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

                <StockList balance={this.props.balance}/>
            </div>
        )
    }

}


export default Trade;