import React from 'react';
import { Table } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './StockList.css';

class StockListItem extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        console.log(this.props.stock)
        const { stock } = this.props;
        return (
            <tr>
                <td className="company-name">{stock.companyName}</td>
                <td className="symbol-table">{stock.symbol}</td>
                <td className="price">{stock.price}</td>
                <td className="total-shares">{stock.shares}</td>
                <td className="total-price">{stock.shares * stock.price}</td>
            </tr>
        )
    }
}


export default StockListItem;