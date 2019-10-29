import React from 'react';
import { Collapse, Button } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BuyFromStockItem from './BuyFromStockItem';
import SellFromStockItem from './SellFromStockItem';

class StockListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemOpen: false,
            buyMoreOpen: false,
            sellOpen: false,
            shares: 0,
            companyName: this.props.stock.companyName,
            symbol: this.props.stock.symbol,
            price: this.props.stock.price
        }
        this.collapseItem = this.collapseItem.bind(this);
        this.collapseBuy = this.collapseBuy.bind(this);
        this.collapseSell = this.collapseSell.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleShareUpdate = this.handleShareUpdate.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
        this.handleSell = this.handleSell.bind(this);
        this.handleSellAll = this.handleSellAll.bind(this);
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
            this.state.price,
            this.state.shares,
            (this.props.stock.shares + this.state.shares)
        )
    }


    handleSell(event) {
        event.preventDefault()
        this.props.sellStock(
            this.state.symbol,
            this.state.price,
            (this.props.stock.shares - this.state.shares)
        )
    }

    handleSellAll(event) {
        event.preventDefault()
        this.props.sellAll(
            this.state.symbol,
            this.state.price,
            (this.props.stock.shares - this.state.shares)
        )
        window.location.href ='/sell-congratulations';
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
                    <td className="price">{stock.price} | usd</td>
                    <td className="total-shares">{stock.shares}</td>
                    <td className="total-price">{(stock.shares * stock.price).toFixed(2)} | usd</td>
                </tr>
                <Collapse in={this.state.itemOpen}>
                    <div id="item-info">
                        <div>
                            <Button
                                className="buy-more"
                                variant="outline-light" 
                                size="sm" block
                                aria-controls="buy-more-form"
                                onClick={this.collapseBuy}
                                aria-expanded={this.state.buyMoreOpen}
                            > Buy More Shares</Button>

                            <BuyFromStockItem
                                buyMoreOpen={this.state.buyMoreOpen} 
                                shares={this.state.shares} 
                                handleChange={this.handleChange} 
                                handleBuy={this.handleBuy}
                                handleShareUpdate={this.handleShareUpdate}
                            />
                        </div>
                        <div>
                            <Button
                                className="sell"
                                variant="outline-light" size="sm" 
                                block
                                aria-controls="sell-form"
                                onClick={this.collapseSell}
                                aria-expanded={this.state.sellOpen}
                            > Sell </Button>

                            <SellFromStockItem
                                sellOpen={this.state.sellOpen}
                                symbol={stock.symbol}
                                shares={this.state.shares}
                                handleSell={this.handleSell}
                                handleChange={this.handleChange}
                                handleSellAll={this.handleSellAll}
                                handleShareUpdate={this.handleShareUpdate}
                            />
                        </div>
                    </div>
                </Collapse>
            </>
        )
    }
}


export default StockListItem;