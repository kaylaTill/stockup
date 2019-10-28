import React from 'react';
import StockList from '../stocks/StockList';
import { Button, Form, Collapse } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './trade.css';
import Search from '../stocks/Search';


class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            amount: 0
        }
        
    }
    
    handleSubmit(event) {
        event.preventDefault()
        let decimalAmount = this.state.amount.toFixed(2)
        this.props.addToBalance(decimalAmount);
    }

    handleChange(event) {
        this.setState({
            amount: event.target.value
        });
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

                <Button className="to-balance-button"
                    block size='sm' variant="outline-light"
                    aria-controls="add-balance"
                    aria-expanded={this.state.open}
                    onClick={(() => this.setState({open: !this.state.open}))}
                > Add To Balance
                </Button>

                <Collapse in={this.state.open}>
                    <div id="add-balance">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Control
                                name="value"
                                autoComplete="off"
                                placeholder="Amount"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </Form>
                    </div>
                </Collapse>

                <StockList 
                    sellAll={this.props.sellAll}
                    sellStock={this.props.sellStock} 
                    buyStock={this.props.buyStock} 
                    stocks={this.props.stocks} 
                    balance={this.props.balance}
                />
            </div>
        )
    }

}


export default Trade;