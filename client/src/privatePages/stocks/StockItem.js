import React from 'react';
import { Collapse, Button, Form } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './StockList.css';

class StockListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemOpen: false,
            buyMoreOpen: false,
            sellOpen: false,
            shares: 0,
            companyName: '',
            symbol: '',

        }
        this.collapseItem = this.collapseItem.bind(this);
        this.collapseBuy = this.collapseBuy.bind(this);
        this.collapseSell = this.collapseSell.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleShareUpdate = this.handleShareUpdate.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
    }


    collapseItem() {
        this.setState({ itemOpen: !this.state.itemOpen })
    }
    
    collapseBuy() {
        this.setState({ buyMoreOpen: !this.state.buyMoreOpen })
    }
    
    collapseSell() {
        this.setState({ sellOpen: !this.state.sellOpen })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleShareUpdate(event) {
        event.target.name == 'increase' ? this.setState({ shares: this.state.shares + 1 }) : this.setState({ shares: this.state.shares - 1 })
    } 


    handleBuy(event) {
        event.preventDefault()
        this.props.buyStock(
            this.state.symbol,
            this.state.companyName,
            this.state.latestPrice,
            this.state.shares
        )
    }




    render() {
        console.log(this.props.stock)
        const { stock } = this.props;
        return (
            <>
                <tr 
                    name="itemOpen"
                    className="stock-item" 
                    aria-controls="item-info"
                    aria-expanded={this.state.itemOpen}
                    onClick={this.collapseItem}
                >
                    <td className="company-name">{stock.companyName}</td>
                    <td className="symbol-table">{stock.symbol}</td>
                    <td className="price">{stock.price}</td>
                    <td className="total-shares">{stock.shares}</td>
                    <td className="total-price">{stock.shares * stock.price}</td>
                </tr>
                <Collapse in={this.state.itemOpen}>
                    <div id="item-info">
                        <Button
                            className="buy-more"
                            variant="outline-light" 
                            size="sm" block
                            aria-controls="buy-more-form"
                            onClick={this.collapseBuy}
                            aria-expanded={this.state.buyMoreOpen}
                        > Buy More Shares</Button>

                        <Collapse in={this.state.buyMoreOpen}>
                            <Form id="buy-more-form">
                                <Button variant="outline-light"
                                    size="sm"
                                    name="decrease"
                                    className="decrease"
                                    onClick={this.handleShareUpdate}>
                                    -</Button>
                                <input
                                    type="number"
                                    className="share-quantity"
                                    name="shares"
                                    min={0}
                                    max={100}
                                    value={this.state.shares > 0 && this.state.shares}
                                    onChange={this.handleChange}
                                />
                                <Button variant="outline-light"
                                    size="sm" name="increase"
                                    className="increase"
                                    onClick={this.handleShareUpdate} >
                                    +</Button>
                            <Button
                                type="submit"
                                className="collapse-buy"
                                variant="outline-light"
                                size="sm" block
                                >Buy</Button>
                            </Form>
                        </Collapse>
                        
                        <Button
                            className="sell"
                            variant="outline-light" size="sm" 
                            block
                        > Sell </Button>
                    </div>
                </Collapse>
            </>
        )
    }
}


export default StockListItem;