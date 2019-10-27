import React from 'react';
import StockList from './StockList';
import axios from 'axios';
import Quote from './Quote';
import Buy from './Buy'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './trade.css';
import API_KEY from '../../key';
import { symbol } from 'prop-types';

class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: []
        }
        this.getQuote = this.getQuote.bind(this);
    }



    componentDidMount() {
        this.getQuote('AAPL')
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
                <Quote/>
                <Buy/>
                <StockList/>
            </div>
        )
    }

}


export default Trade;