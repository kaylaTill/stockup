import React from 'react';
import StockList from '../stocks/StockList';
import axios from 'axios';
import Buy from '../buy/Buy';
import { Button,  } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './trade.css';
import Search from '../stocks/Search';


class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
        
    }



    render() {
        return (
            <div className="dashboard">
                <Search handleSearch={this.props.handleSearch}/>
               
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

                <StockList buyStock={this.props.buyStock} stocks={this.props.stocks} balance={this.props.balance}/>
            </div>
        )
    }

}


export default Trade;