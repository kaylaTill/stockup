import React from 'react';
import { Button, Collapse, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import BuyFromQuote from './buyFromQuote';
import API_KEY from '../../key';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Quote.css';

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            open: false,
            buyStockOpen: false,  
            companyName: '',
            latestPrice: 0,
            symbol: '',
            annualHigh: 0,
            annualLow: 0,
            change: 0,
            shares: 0
        }
        this.getQuote = this.getQuote.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShareUpdate = this.handleShareUpdate.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
    }

    
    getQuote(symbol) {
        axios.get(`https://cloud.iexapis.com/beta/stock/${symbol}/quote/?token=${API_KEY}&period=annual`)
        .then(({data}) => {
            this.setState({
                open: true,
                companyName: data.companyName,
                latestPrice: data.latestPrice,
                symbol: data.symbol,
                annualHigh: data.week52High,
                annualLow: data.week52Low,
                change: data.ytdChange
            })
            console.log(data)
        })
        .then(() => {
            this.clearForm()
        })
        .catch((err) => {
            console.log(err)
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleShareUpdate(event) {
        event.target.name == 'increase' ? this.setState({ shares: this.state.shares + 1 })  : this.setState({ shares: this.state.shares - 1 })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.getQuote(this.state.value)
    }

    handleBuy() {
        console.log(this.state.symbol);
    }
g

    clearForm() {
        this.setState({
            value: '' 
        })
    }



    render() {
        const symbol = this.state.symbol.toUpperCase();
        const val = this.state.value.toUpperCase();
        return (
            <div>
                <div className="quote-form">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Control
                            name="value"
                            autoComplete="off"
                            placeholder="Symbol"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <Button className="quote-button" 
                            variant="outline-light" size="sm" block
                            aria-controls="stock-info"
                            aria-expanded={this.state.open}
                            type="submit">
                            {
                                `Quote ${val}`
                        }</Button>
                    </Form>
                </div>
        
        
                <Collapse in={this.state.open}>
                    <div id="stock-info">
                        <Table className="table"responsive>
                            <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Symbol</th>
                                    <th>Annual High</th>
                                    <th>Annual Low</th>
                                    <th>Net Change</th>
                                    <th>Latest Price</th>
                                </tr>
                            </thead>
                            <tbody className="stock">
                                <tr>
                                    <td className="name">{this.state.companyName}</td>
                                    <td className="symbol">{symbol}</td>
                                    <td className="annualHigh">{this.state.annualHigh} | usd</td>
                                    <td className="annualLow">{this.state.annualLow} | usd</td>
                                    <td className="change">{this.state.change}</td>
                                    <td className="latestPrice">{this.state.latestPrice} | usd</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div>
                            <Button
                                className="buy"
                                variant="outline-light" size="sm" block
                                aria-controls="buy-stock"
                                aria-expanded={this.state.buyStockOpen}
                                onClick={(() => this.setState({ buyStockOpen: !this.state.buyStockOpen }))}
                            > Buy Stock</Button>

                            <BuyFromQuote symbol={symbol}
                                open={this.state.buyStockOpen}
                                handleShareUpdate={this.handleShareUpdate} 
                                shares={this.state.shares}
                                handleBuy={this.handleBuy}/>
                        </div>
                    </div>
                </Collapse>
        </div>
    )}
}

export default Quote;
