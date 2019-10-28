import React from 'react';
import { Collapse, Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './StockList.css';

class StockListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.collapse = this.collapse.bind(this);
    }


    collapse() {
        this.setState({ open: !this.state.open })
    }



    render() {
        console.log(this.props.stock)
        const { stock } = this.props;

        return (
            <>
                <tr className="stock-item" 
                    aria-controls="item-info"
                    aria-expanded={this.state.open}
                    onClick={this.collapse}
                >
                    <td className="company-name">{stock.companyName}</td>
                    <td className="symbol-table">{stock.symbol}</td>
                    <td className="price">{stock.price}</td>
                    <td className="total-shares">{stock.shares}</td>
                    <td className="total-price">{stock.shares * stock.price}</td>
                </tr>
                <Collapse in={this.state.open}>
                    <div id="item-info">
                        <Button
                            className="buy-more"
                            variant="outline-light" size="sm" 
                            block
                        > Buy More Shares</Button>
                        
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