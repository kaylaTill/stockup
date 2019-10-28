import React from 'react';
import { Table } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './StockList.css';

class StockList  extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        console.log(this.props.stocks)

        return (
            <Table responsive className="stock-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price Per Share</th>
                        <th>Total Shares</th>
                        <th>Current Balance</th>
                    </tr>
                </thead>
                <tbody className="stock">
                    {this.props.stocks.map((stock) => {
                        return (
                            <tr>
                                <td className="name">{stock.companyName}</td>
                                <td className="symbol">{stock.symbol}</td>
                                <td className="price">{stock.price}</td>
                                <td className="total-shares">{stock.shares}</td>
                                <td className="current-balance">{this.props.balance}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        );
    }   
}


export default StockList;