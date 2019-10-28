import React from 'react';
import { Table } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './StockList.css';

class StockList  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: []
        }
    }


    render() {
        return (
            <Table responsive className="stock-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price Per Share</th>
                        <th>Total Shares</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody className="stock">
                    <tr>
                        <td className="name">Table cell</td>
                        <td className="symbol">Table cell</td>
                        <td className="price">Table cell</td>
                        <td className="total-shares">Table cell</td>
                        <td className="balance">{this.props.balance}</td>
                    </tr>
                </tbody>
            </Table>
        );
    }   
}


export default StockList;