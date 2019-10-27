import React from 'react';
import { Button, Collapse, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import NumericInput from 'react-numeric-input';
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
        this.handleIncrease = this.handleIncrease.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleIncrease(event) {
        event.target.name == 'increase' ? this.setState({ shares: this.state.shares + 1 })  : this.setState({ shares: this.state.shares - 1 })
    }


    handleSubmit(event) {
        event.preventDefault()
        this.getQuote(this.state.value)

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
            .catch((err) => {
                console.log(err)
            });
    }


    render() {
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
                                `Quote ${this.state.value}`
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
                                    <td className="symbol">{this.state.symbol}</td>
                                    <td className="annualHigh">{this.state.annualHigh} | usd</td>
                                    <td className="annualLow">{this.state.annualLow} | usd</td>
                                    <td className="change">{this.state.change}</td>
                                    <td className="latestPrice">{this.state.latestPrice} | usd</td>
                                </tr>
                            </tbody>
                        </Table>


                        <Button
                            className="buy"
                            variant="outline-light" size="sm" block
                            aria-controls="buy-stock"
                            aria-expanded={this.state.buyStockOpen}
                            onClick={(() => this.setState({buyStockOpen: !this.state.buyStockOpen}))}
                            >
                            Buy Stock
                        </Button>

                        <Collapse id="buy-stock" in={this.state.buyStockOpen}>
                            <Form onSubmit={this.handleBuy}>
                                <div>
                                    <Button variant="outline-light" size="sm" name="decrease" className="decrease" onClick={this.handleIncrease} >-</Button>
                                    <input 
                                        type="number" 
                                        className="share-quantity" 
                                        name="shares"
                                        min={0}
                                        max="100"
                                        value={this.state.shares}
                                        onChange={this.handleIncrease}
                                    />
                                    <Button variant="outline-light" size="sm" name="increase" className="increase" onClick={this.handleIncrease} >+</Button>
                                </div>
                                <Button
                                    className="submit-buy"
                                    variant="outline-light" size="sm" block
                                >
                                    {`Buy ${this.state.shares} shares of ${this.state.symbol} stock`}
                                </Button>
                            </Form>
                        </Collapse>

                    </div>
                </Collapse>
        </div>
    )}
}

export default Quote;
