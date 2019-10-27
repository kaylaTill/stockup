import React from 'react';
import { Button, Collapse, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import NumericInput from 'react-numeric-input';
import API_KEY from '../../key';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './quote.css';

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            open: false,
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
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
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
                        <Table responsive>
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
                                    <td className="annualHigh">{this.state.annualHigh}</td>
                                    <td className="annualLow">{this.state.annualLow}</td>
                                    <td className="change">{this.state.change}</td>
                                    <td className="latestPrice">{this.state.latestPrice}</td>
                                </tr>
                            </tbody>
                        </Table>


                        <Button
                            variant="outline-light" size="sm" block
                            aria-controls="buy-stock"
                            aria-expanded={this.state.open}
                            >
                            Buy Stock
                        </Button>

                        <Collapse>
                            <Form onSubmit={this.handleBuy}>
                                {/* <Form.Control
                                    name="shares"
                                    required
                                    autoComplete="off"
                                    placeholder="Shares"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                /> */}
                                <NumericInput className="form-control" />
                                <Button
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
