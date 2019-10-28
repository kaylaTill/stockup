import React from 'react';
import { Button, Form, Collapse } from 'react-bootstrap';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Buy.css';

class Buy extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            symbol: '',
            shares: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleShareUpdate = this.handleShareUpdate.bind(this);
    }



    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleShareUpdate(event) {
        event.target.name == 'increase' ? this.setState({ shares: this.state.shares + 1 }) : this.setState({ shares: this.state.shares - 1 })
    }

    
    render() {
        return (
            <div>
                <Button className="quote-from-buy"
                    block size='sm' variant="outline-light"
                    href={'/quote'}
                    >Quote
                </Button>
    
                <Button className="buy-button"
                    block size='sm' variant="outline-light"
                    onClick={() => {this.setState({open: !this.state.open})}}
                    aria-controls="buy-collapse"
                    aria-expanded={this.state.open}
                >Buy
                </Button>

                <Collapse in={this.state.open}>
                    <Form id="buy-collapse" onSubmit={this.props.buyStock}>
                        <Form.Control
                            name="symbol"
                            className="symbol"
                            autoComplete="off"
                            placeholder="Symbol"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <div>
                            <Button variant="outline-light"
                                size="sm"
                                name="decrease"
                                className="buy-decrease"
                                onClick={this.handleShareUpdate}>
                                -</Button>
                            <input
                                type="number"
                                className="shares"
                                name="shares"
                                placeholder={0}
                                min={0}
                                max={100}
                                value={this.state.shares > 0 && this.state.shares}
                                onChange={this.handleChange}
                            />
                            <Button variant="outline-light"
                                size="sm" name="increase"
                                className="buy-increase"
                                onClick={this.handleShareUpdate} >
                                +</Button>
                        </div>
                        <Button
                            type="submit"
                            className="buy-submit"
                            variant="outline-light"
                            size="sm" block
                        >
                            {`Buy ${this.state.shares > 0 ? this.state.shares : 0} shares of ${this.state.symbol} stock`}
                        </Button>
                    </Form>
                </Collapse>
            </div>
            
        )
    }
}

export default Buy;
